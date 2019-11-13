# React-Native .. docs \_ ()

## Install

1. install nvm

   <pre>
   $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
   </pre>

2. Check nvm version by running

   <pre>
   $ nvm --version
   </pre>

3. You can now install nodejs and npm via nvm.

   <pre>
    This will install latest version of node version 10 which is 10.14.2 currently.
    $ nvm install [version]
    Below command will set default node version for nvm
    $ nvm alias default [hope that use node version]
   </pre>

4. Now check nodejs and npm version.
   <pre>
    $ node -v
    12.13.0
    $ npm -v
    6.4.1
   </pre>

<hr>

## iOS installation

- install xcode
- Troubleshoot
  <pre>
  $ sudo xcode-select -s /Applications/Xcode.app
  $ xcode-select --install
  $ sudo xcodebuild -license accept
  </pre>

## React Native installation

<pre>
install watchman (Mac & Linux only, Window is currently in beta) Watchman is a tool by Facebook for watching changes in the filesystem. This isn't necessary be installed but it will enhance the performace of your dev env.
</pre>

- install brew

- brew install watchman

- Install react-native-cli as global npm package

  <pre>
      npm install -g react-native-cli
  </pre>

- Create react-native project

  <pre>
  react-native init [PROJECT_NAME]
  </pre>

- Run your project
  <pre>
  $ cd [PROJECT_NAME]
  // run ios
  $ react-native run-ios
  // run android
  $ react-native run-android
  </pre>

<hr><hr>

# babel

- install babel
  <pre>
      1. npm init
      2. npm install --save-dev @babel/cli @babel/core  @babel/node
      3. npm install --save-dev @babel/preset-env
      <pre>
        1) touch .babelrc in Project Path
        2) https://babeljs.io/docs/en/presets</pre>
  </pre>

babel 같은 경우, devDependencies를 사용하는 것을 추천

- dependencies는 build시 Prodeuction bundle에 추가
- devDependencies는 build시 Prodeuction bundle에 영향 없음

## We Need 'npx' What Is The 'npx' ?

<pre> 
    npx는 local에 설치 되어있는 스크립트들을 실행시켜주는 기능.
</pre>

- npm install -g npx
  <pre>
      # npx babel-node index.js
  </pre>
