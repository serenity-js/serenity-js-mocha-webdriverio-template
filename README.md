# Serenity/JS Mocha WebdriverIO Template

[![Build Status](https://github.com/serenity-js/serenity-js-mocha-webdriverio-template/workflows/build/badge.svg)](https://github.com/serenity-js/serenity-js-mocha-webdriverio-template/actions)
[![Serenity/JS on GitHub](https://img.shields.io/badge/github-serenity--js-yellow?logo=github)](https://github.com/serenity-js/serenity-js)
[![Serenity/JS on StackOverflow](https://img.shields.io/badge/stackoverflow-serenity--js-important?logo=stackoverflow)](https://stackoverflow.com/questions/tagged/serenity-js)
[![Contribute with Gitpod](https://img.shields.io/badge/Contribute%20with-Gitpod-908a85?logo=gitpod)](https://gitpod.io/from-referrer/)

[![Follow Serenity/JS on LinkedIn](https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin)](https://www.linkedin.com/company/serenity-js)
[![Watch Serenity/JS on YouTube](https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube)](https://www.youtube.com/@serenity-js)
[![Join Serenity/JS Community Chat](https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix)](https://matrix.to/#/#serenity-js:gitter.im)
[![Support Serenity/JS on GitHub](https://img.shields.io/badge/Support-@serenity--js-703EC8?logo=github)](https://github.com/sponsors/serenity-js)

Use this [template repository](https://help.github.com/en/articles/creating-a-repository-from-a-template)
to get started with acceptance testing your web applications using [Serenity/JS](https://serenity-js.org),
[Mocha](https://mochajs.org/) and [WebdriverIO](https://webdriver.io/).

Learn more:
- [Serenity BDD reports for this project](https://serenity-js.github.io/serenity-js-mocha-webdriverio-template/)
- [Serenity/JS website, tutorials, and API docs](https://serenity-js.org/)

## Usage

This repository is a GitHub template. You can use it to [create a new GitHub repository](https://help.github.com/en/articles/creating-a-repository-from-a-template), [clone it to your computer](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

You can also launch it in a virtual Gitpod workspace without having to install anything on your machine:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/from-referrer/)

### Installation

To use this project, you'll need:
- Node.js, a Long-Term Support (LTS) release version 18.12 or later - [download](https://nodejs.org/en/)
- Java Runtime Environment (JRE) or a Java Development Kit (JDK) version 11 or later - [download](https://adoptopenjdk.net/)

Follow the [installation instructions](https://serenity-js.org/handbook/about/installation/) to help you verify your setup.

Once you have the code on your computer, use your computer terminal to run the following command in the directory where you've cloned the project:
```
npm ci
```

Running [`npm ci`](https://docs.npmjs.com/cli/v6/commands/npm-ci) downloads the [Node modules](https://docs.npmjs.com/about-packages-and-modules) this project depends on, as well as the latest version of [`chromedriver`](https://www.npmjs.com/package/chromedriver) and the [Serenity BDD CLI](https://github.com/serenity-bdd/serenity-cli) reporter jar. 

### Corporate networks

If your network administrators require you to use proxy servers or an internal artifact registry (Artifactory, Nexus, etc.), your development environment might require some additional configuration.

The easiest way to do it is to create an [`.npmrc` file](https://docs.npmjs.com/cli/v6/configuring-npm/npmrc) in your home directory: 

```
proxy=http://user:password@host.mycompany.com:8080/
https-proxy=http://user:password@host.mycompany.com:8080/
strict-ssl=false
registry=https://artifactory.mycompany.com/artifactory/
```

### Execution

The project provides several [NPM scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts) defined in [`package.json`](package.json):

```
npm run lint            # runs code linter
npm run lint:fix        # attempts to automatically fix linting issues
npm run clean           # removes reports from any previous test run
npm test                # executes the example test suite
                        # and generates the report under ./target/site/serenity
npm start               # starts a mini HTTP server and serves the test reports
                        # at http://localhost:8080
```

## 💡️ Learn Serenity/JS

- [Serenity/JS WebdriverIO integration guide](https://serenity-js.org/handbook/test-runners/webdriverio/) - Integrate Serenity/JS with your WebdriverIO test suite, enable Serenity BDD reports, and start using the Screenplay Pattern
- [Serenity/JS Handbook](https://serenity-js.org/handbook/) - Write high-quality automated acceptance tests with Serenity/JS
- [Serenity/JS API documentation](https://serenity-js.org/api/) - Explore Serenity/JS modules and features
- [Serenity/JS Project Templates](https://serenity-js.org/handbook/getting-started/project-templates/) - Kickstart your projects with best practices built right in

## 👋 Join the Serenity/JS Community

- [Serenity/JS Community chat channel](https://matrix.to/#/#serenity-js:gitter.im) - Meet Serenity/JS developers and maintainers
- [Serenity/JS Forum](https://github.com/orgs/serenity-js/discussions/categories/how-to) - Find answers to your Serenity/JS questions
- [Contribute to Serenity/JS](https://serenity-js.org/community/contributing/) - Learn how to propose features, report bugs, and contribute to the Serenity/JS codebase

## 📣 Stay up to date

- [Serenity/JS on YouTube](https://www.youtube.com/@serenity-js) - Subscribe for tutorials, demos, conference talks, and more
- [Serenity/JS on LinkedIn](https://www.linkedin.com/company/serenity-js) - Follow for release and community event announcements
- [Serenity/JS on GitHub](https://github.com/serenity-js/serenity-js) - Star Serenity/JS to help others discover the framework!

## 💛 Support Serenity/JS

Support our mission to make test automation collaborative and easier to scale. Become a Serenity/JS GitHub Sponsor today!

[![GitHub Sponsors](https://img.shields.io/badge/Sponsor%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sponsors/serenity-js)
