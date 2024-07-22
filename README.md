# React
 
#### A JavaScript library for building user interfaces
![R](https://github.com/user-attachments/assets/103b717b-c3ca-49a1-b0ce-1a36ae9091ed)

### Try React locally 
To try React locally on your computer, [download this HTML page](https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html). Open it in your editor and in your browser!

### Start a new React project
If you want to build a new app or a new website fully with React, we recommend picking one of the React-powered frameworks popular in the community.

You can use React without a framework, however we’ve found that most apps and sites eventually build solutions to common problems such as code-splitting, routing, data fetching, and generating HTML. These problems are common to all UI libraries, not just React.

By starting with a framework, you can get started with React quickly, and avoid essentially building your own framework later.

#### Creating an App
You’ll need to have Node >= 14 on your local development machine (but it’s not required on the server). You can use [nvm](https://github.com/nvm-sh/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

##### npx 
```
npx create-react-app my-app
```
([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))


##### npm
```
npm init react-app my-app
```
`npm init <initializer>` is available in npm 6+

##### Yarn
```
yarn create react-app my-app
```
`yarn create` is available in Yarn 0.25+


#### Selecting a template

You can now optionally start a new app from a template by appending `--template [template-name]` to the creation command.

If you don't select a template, we'll create your project with our base template.

Templates are always named in the format `cra-template-[template-name]` , however you only need to provide the `[template-name]` to the creation command.

```
npx create-react-app my-app --template [template-name]
```


Your app is ready to be deployed.
