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

- express module 설치
  $npm install express --save

- npm 실행 구문 설명
  $npm install [module] [option]
  [option] 에 --save란?
  package.json 에 node module 정보를 바로 등록하는 옵션

express모듈을 설치하면 package-lock.json 과 node_modules 디렉토리가 생김

express 모듈로 구현. app.js 참고
$node app.js
Ctrl+c // 서버 꺼짐

- pm2 module 설치
  $npm install pm2 -g

pm2 ? production process manager for Node.js

pm2 setting
npm install pm2 -g
powershell 관리자모드 실행 > Get-ExcutionPolicy > 권한확인 > Set-ExcutionPolicy RemoteSigned

- powershell 관리자 권한 설정

1. powershell > 관리자 권한으로 실행
2. $get-help Set-ExecutionPolicy : 'y' 권한설정 모듈 실행
3. $Set-ExcutionPolicy [option]
   : option
   Restricted : PowerShell의 실행 권한 정책 중 기본적으로 적용되어 있는 옵션. ps1 스크립트 파일을 로드하여 실행할 수 없는 정책
   AllSigned : 신뢰된 배포자에 의해 서명된 스크립트만 실행 할 수 있는 정책
   RemoteSigned : 로컬 컴퓨터에서 본인이 생성한 스크립트만 실행 가능, 또는 인터넷에서 다운로드 받은 스크립트는 신뢰된 배포자에 의해 서명된 것만 실행 가능한 정책 (이걸로 사용)
   Unrestricted : 제한 없이 모든 스크립트 실행 가능한 정책
   ByPass : 어떤 것도 차단하지 않고 경고 없이 실행 가능한 정책
   Undefined : 정책 적용 안함
