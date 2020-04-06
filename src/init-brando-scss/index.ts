import {
  MergeStrategy,
  Rule,
  SchematicContext,
  Tree,
  apply,
  chain,
  mergeWith,
  move,
  template,
  url,
} from "@angular-devkit/schematics";
import {
  NodeDependencyType,
  addPackageJsonDependency,
} from "schematics-utilities";

import { strings } from "@angular-devkit/core/src/utils";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function initBrandoScss(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    if (tree.exists("src/styles.scss")) {
      tree.delete("src/styles.scss");
    }
    tree.create("src/styles/2-layout/.gitkeep", "");
    tree.create("src/styles/3-pages/.gitkeep", "");
    tree.create("src/styles/4-vendor/.gitkeep", "");

    addPackageJsonDependency(tree, {
      type: NodeDependencyType.Dev,
      name: "sanitize.css",
      version: "^11.0.0",
      overwrite: true,
    });

    return chain([
      mergeWith(add0ModulesFolder(), MergeStrategy.Overwrite),
      mergeWith(addStylesScss(), MergeStrategy.Overwrite),
      mergeWith(addGlobalScss(), MergeStrategy.Overwrite),
    ])(tree, _context);
  };
}

function add0ModulesFolder() {
  const sourceTemplates = url("./files/0-modules");
  const sourceParametrizedTemplates = apply(sourceTemplates, [
    template({ ...{}, ...strings }),
    move("src/styles/0-modules"),
  ]);
  return sourceParametrizedTemplates;
}
function addStylesScss() {
  const sourceTemplates = url("./files/styles");
  const sourceParametrizedTemplates = apply(sourceTemplates, [
    template({ ...{}, ...strings }),
    move("src"),
  ]);
  return sourceParametrizedTemplates;
}

function addGlobalScss() {
  const sourceTemplates = url("./files/1-partials");
  const sourceParametrizedTemplates = apply(sourceTemplates, [
    template({ ...{}, ...strings }),
    move("src/styles/1-partials"),
  ]);
  return sourceParametrizedTemplates;
}
