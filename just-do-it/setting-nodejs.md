1. node 설치
2. vscode 설치
   ** node가 설치되면 nodejs + npm도 같이 설치됨
   ** NPM(node package manager) : node 관련된 패키지를 관리해주는 라이브러리 디펜던시
3. git 설치

vscode 에서 Ctrl+Shift+` 로 터미널 창 실행

- 셋팅 관련 명령어 정리
  $node -v // node 설치 확인(버전 확인)
$npm -v // npm 설치 확인(버전 확인)
  $npm init // nodejs 를 실행하기위한 초기화. package.json 파일이 생성 됨.
$npm install -g npm // npm 업데이트
  $git --version // git 설치 확인(버전 확인)

package.json // npm을 통해 생성되는 node 관련 컴포넌트들의 의존성을 관리하는 모듈(maven 의 pom.xml과 같은 역할)

$npm install express --save // express 모듈 설치

- npm 실행 구문 설명

$npm install [module] [option]
[option] 에 --save란?
package.json 에 node module 정보를 바로 등록하는 옵션

express모듈을 설치하면 package-lock.json 과 node_modules 디렉토리가 생김

express 모듈로 구현. app.js 참고
$node app.js
