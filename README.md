<a name="readme-top"></a>

<div align="center"><br/><h3><b></b></h3></div>





https://user-images.githubusercontent.com/104390780/231420479-8752b6e4-41e8-4699-bd48-45f547866c79.mp4



<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 \[LeaderBoard Project\] ](#-leaderboard-project-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
    - [**Leaderboard Project**](#leaderboard-project)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage ](#usage-)
    - [Run tests ](#run-tests-)
    - [Deployment ](#deployment-)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 [LeaderBoard Project] <a name="about-project"></a>

**[LeaderBoard Project](https://bestbynature.github.io/leaderboard-project/)** is a JavaScript project that builds the Leaderboard list app, using webpack and ES6 features (notably modules). It employs the Leaderboard API using JavaScript async and await, with some nice styling. The application contains two buttons - `Refresh` and `Submit`. Clicking the `Submit` button after filling the name and score input will perform a `POST` method on the API and bring back a confirmatory message in the DOM (which disappears after 5 seconds). In contrast, clicking the `Refresh` button performs a `GET` method and pulls the currently available data, with respect to the already programmed GameID, from the API and displays the full list in the DOM.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JAVASCRIPT</li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **[Linter checks]**
- **[Webpack]**
- **[API]**


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

### **[Leaderboard Project](https://bestbynature.github.io/leaderboard-project/)**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Prerequisites

In order to run this project you need:

<ul>
    <li>The current version of node</li>
    <li>To have Git installed on your local machine</li>
    <li>Node Package manager (npm) </li>
    <li>An editor such as Visual Studio Code</li>
  </ul>
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Setup

Clone this repository to your desired folder:

<ul>
    <li>Create your classic access token from github.com</li>
    <li>run "git clone https://{access_token}@github.com/username/{repo_name}.git"</li>
    <li>Update your git identity by running "git config --global user.email "your_email@gmail.com""</li>
    <li>Update your name on git by running "git config --global user.name "your_name"</li>
  </ul>
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>

### Install

Install this project with:

```sh
- In the first commit of your feature branch create a .github/workflows folder and add a copy of [.github/workflows/linters.yml](https://github.com/microverseinc/linters-config/blob/master/html-css-js/.github/workflows/linters.yml) to that folder.
- create a .gitignore file and add 'node_modules' to it
- run 'npm init -y'
- run 'npm install --save-dev hint@7.x'
- Copy [hintrc](https://github.com/microverseinc/linters-config/blob/master/html-css-js/.hintrc) to the root directory of your project.
- run 'npx hint .'
- Fix validation errors.
- run 'npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x'
- Copy [stylelintrc.json](https://github.com/microverseinc/linters-config/blob/master/html-css-js/.stylelintrc.json) to the root directory of your project.
- Run 'npx stylelint "\*_/_.{css,scss}"'
- fix linter errors
- run "npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x"
- Copy [eslintrc.json](https://github.com/microverseinc/linters-config/tree/master/html-css-js)
- Run npx eslint . on the root of your directory of your project
- Fix linter error.

### To Install Jest
- run npm install --save-dev jest
- add " "test": "jest", "watch": "jest --watch *.js" to the scripts section of package.json"
- run npm install --save-dev @babel/plugin-transform-modules-commonjs
- create a file at the root called .babelrc
- copy `{
    "env": {
        "test": {
            "plugins": ["@babel/plugin-transform-modules-commonjs"]
        }
    }
}` inside the file

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
### Usage <a name="usage"></a>

To run the project, execute the following command:

```sh
  use git bash to open in Vs code
  use npm start to run web dev server
  npm run build to get the production version
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Run tests <a name="run-tests"></a>

To run tests, run the following command:

```sh
Run "npx hint ."
Run "npx stylelint "**/*.{css,scss} --fix " to fix linters
Run "npx eslint . --fix to fix linters"
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Deployment <a name="triangular_flag_on_post-deployment"></a>

You can deploy this project using:

- github pages
```sh
- npm run deploy
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Author**

- GitHub: [@githubhandle](https://github.com/Bestbynature)
- Twitter: [@twitterhandle](https://twitter.com/Dammybest)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/damilare-ismaila-4a5a8b30/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **[contact form page]**
- [ ] **[A feature for prize inclusion]**
- [ ] **[A feature for updating the scores on the board]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, kindly drop a star for me.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to use this medium to appreciate [Microverse](https://microverse.org) for giving me this type of opportunity.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
