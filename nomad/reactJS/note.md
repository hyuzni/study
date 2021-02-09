react 실행조건

1. nodeJS 설치 확인
   : node -v
2. npm 설치 확인
   : npm -v
3. npx 설치(? 설치가 꼭 필요한가)
   : npm install npx -g
4. git 설치 확인
   : git --version

webpack, babel

react 설치
$npx create-react [movie-app]
// movie-app is project name. the name can no longer contain capital letters

git 연동()
$git init 
$git remote add origin [git url]
$git add.
$git commit -m []
$git push origin master

npm prop-types 설치
$npm i prop-types
react 에서 prop 을 전달할 때 type 체크를 위해 설치

사용방법 : 공식문서 참고
예)
something.propTypes = {
1: propTypes.string.isRequired,
2: propTypes.number.isRequired,
}

// es6 공부
https://beomy.tistory.com/category/JavaScript

$ npm init
$ npm i -D [eslint]
: -D 는 --save-dev의 축약법
--save는 ./package.json의 dependencies에 저장되며,
-D는(--save-dev) ./package.json의 devDependencies에 저장된다.
npm install을 할 때 해당 패키지가 같이 설치된다.

// eslint 설치
$ node_modules/.bin/eslint --init

eslint error

1. Parsing error: Unexpected token
   : parser 를 babel로 바꿔줘야함.
   $ npm install -D babel-eslint
   .eslintrc.js 에 "parser": "babel-eslint" 추가
2. error 'Movie' is defined but never used
   : .exlintrc.js 에 extends: ["plugin:react/recommended"] 추가
3. 'React' must be in scope when using JSX
   : import react from 'react'를 import React from 'react'로 바꿔주면 됨

//setting.json
{
"workbench.colorTheme": "Noctis",

"prettier.printWidth": 120,
"prettier.tabWidth": 2,
"prettier.singleQuote": true,
"prettier.trailingComma": "all",
"prettier.bracketSpacing": true,
"prettier.semi": true,
"prettier.useTabs": false,
"prettier.arrowParens": "avoid",
"prettier.endOfLine": "lf",

"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode"
}
