# BRANDO-NG-SCHEMATICS

My own schematics

## Init
    ng new project --style=scss --skipTests=true --routing=true --force=true
    
    schematics ../../../Schematics/brando-ng-schematics/src/collection.json:init-brando-scss --dry-run=false

- Move app.component to "app-root" folder/update app.modules

## Init styles
To package json

    npm install sanitize.css --save
-  create styles.scss
-  create styles folder structure with boilerplate
-  [Sharing styles between apps inside Nx workspace](https://dev.to/vitorstick/sharing-styles-between-apps-inside-nx-workspace-20i5)

```json
// angular.json
"projects": {
    "ds-project": {
        "projectType": "application",
         "architect": {
        "build": {
          "options": {
            "stylePreprocessorOptions": {
              "includePaths": [
                "libs/ur/src/lib/styles/src/lib/viewport/_index.scss"
              ]
            }
          }
```


## Install Gulp depenencies
```json
{
 "@types/node": "^12.11.1",
 "del": "^5.1.0",
 "fs": "0.0.1-security",
 "gulp": "4.0.2",
 "gulp-image": "^6.1.0",
 "gulp-nop": "0.0.3",
 "gulp-plumber": "^1.2.1"
}
```
- Create gulpfile.js folder with code
## Update package.json browserlist (delete browserlist file)
```json
{
 "browserslist": [
    "> 1%",
    "ie >= 8",
    "edge >= 15",
    "ie_mob >= 10",
    "ff >= 45",
    "chrome >= 45",
    "safari >= 7",
    "opera >= 23",
    "ios >= 7",
    "android >= 4",
    "bb >= 10"
  ]
}
  ```
## Add script lines to package.json
```json
{
 "scripts": {
    "ng-build": "ng build --prod --aot",
    "gulp-copy-img": "gulp copyOptimizeImages",
    "gulp-opt-img": "gulp doOptimizeImages",
    "scully": "scully",
    "scully:serve": "scully serve"
  }
}  
  ```
## RxJS: Avoiding rxjs-compat
- [RxJS: Avoiding rxjs-compat](https://medium.com/@cartant/rxjs-avoiding-rxjs-compat-4b79a566359b)
- [rxjs-tslint-rules](https://github.com/cartant/rxjs-tslint-rules)
 
Install the package using NPM:

    npm install rxjs-tslint-rules --save-dev

Update `tslint.json` file to extend this package:

```json
{
  "extends": [
    "rxjs-tslint-rules"
  ],
  "rules": {
    "rxjs-add": { "severity": "error" },
    "rxjs-no-unused-add": { "severity": "error" },
  "rxjs-no-compat": true
  }
  
}
```
## GOOGLE ANALYTICS AND SITEMAP.XML
Add the following to angular.json
```json
"architect": {
    "options": {
        "assets": [
              "apps/PATH/src/googlexzxzxzxz.html",
              "apps/PATH/src/sitemap.xml"
            ]
    }
}
```

## SCULLY.IO
-  [Scully Installation](https://scully.io/docs/learn/getting-started/installation/)
-  [https://github.com/scullyio/scully](https://github.com/scullyio/scully)
```bash
npm install @scullyio/init
nx g @scullyio/init:install -- --project=<projectName>
```
