# 1 Project prepare
Branch: init

## 1.1 Install dependency
```js
// For JS compile
1. npm init -y
2. cnpm install --save-dev webpack webpack-cli
3. npm install react react-dom
4. cnpm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react

// For TS compile
cnpm i -D typescript @babel/preset-typescript source-map-loader
cnpm i @types/react @types/react-dom @types/react-router-dom
cnpm i -D @types/webpack-env
cnpm i ts-loader
```


## 1.2 Configuration File
Let webpack work together with babel. Create 
Create following files
### 1.2.1 For JS
1. ./babel.config.json: config babel settings for js

### 1.2.2 For TS
1. .babelrc: config babel settings
2. create tsconfig.json

### 1.2.3 Webpacks
1. Create webpack for ES: /configs/javascript/webpack.config.js
2. Create webpack for TS: /configs/typescript/webpack.config.js

## 1.3 package.json
1. create 2 scripts for testing js and ts config

```json
"start-js": "webpack --config configs/js/webpack.config.js --mode development",
"start-ts": "webpack --config configs/ts/webpack.config.js --mode development",
```
2. Run the command 
```js
npm run start-js
npm run start-ts
```

3. Test
There will be 2 files generated. You can run 
dist/javascript/bundle.js
dist/typescript/bundle.js

```shell
node dist/javascript/bundle.js
```

4. Debug with source-map
- in webpack.config.js
```js
// The source-map option generates a full source map for debugging
devtool: 'source-map',
// Debugging before other plugins
{
test: /\.js$/,
use: ["source-map-loader"],
enforce: "pre"
}
```
- run your webpack commands: It will generate some map file for debug


## 1.4 Setup tslint/prettier
1. Install dependencies
```js
npm i -D tslint tslint-react prettier
```
2. Create a tslint.json

3. Create .prettierrc and .prettierignore

4. Add script into package.json

```js
   "format": "prettier --write \"**/*.{js,jsx,tsx}\"",
    "lint": "tslint ./**/*.tsx",
```

## 1.5 Setup test framework jest
```js
// Install dependencies
npm install --save-dev jest ts-jest @types/jest @types/react @types/react-dom
```
