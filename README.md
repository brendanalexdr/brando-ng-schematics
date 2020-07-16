# BRANDO-NG-SCHEMATICS

My own schematics

## Init

- Create styles folder with structure
- Create styles.scss
- Update package json with sanitize.css
- Move app.component to "app-root" folder
## Install Gulp depenencies
```javascript 
 "gulp": "4.0.2",
 "gulp-image": "^6.1.0",
 "gulp-nop": "0.0.3",
 "gulp-plumber": "^1.2.1"
```
## Update package.json browserlist (delete browserlist file)
```javascript
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
  ```
## Add script lines to package.json
```javascript
 "scripts": {
    "ng-build": "ng build --prod --aot",
    "gulp-copy-img": "gulp copyOptimizeImages",
    "gulp-opt-img": "gulp doOptimizeImages",
    "scully": "scully",
    "scully:serve": "scully serve"
  }
  ```

 
