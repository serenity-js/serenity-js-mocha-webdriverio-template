# Serenity/JS Mocha WebdriverIO Template

[![Build Status](https://github.com/serenity-js/serenity-js-mocha-webdriverio-template/workflows/build/badge.svg)](https://github.com/serenity-js/serenity-js-mocha-webdriverio-template/actions)

Use this [template repository](https://help.github.com/en/articles/creating-a-repository-from-a-template)
to get started with acceptance testing your web applications using [Serenity/JS](https://serenity-js.org),
[Mocha](https://mochajs.org/) and [WebdriverIO](https://webdriver.io/).

Learn more:
- [Serenity BDD reports for this project](https://serenity-js.github.io/serenity-js-mocha-webdriverio-template/)
- [Serenity/JS Website](https://serenity-js.org)
- [Serenity/JS Tutorial](https://serenity-js.org/handbook/thinking-in-serenity-js/index.html)
- [Serenity/JS API Docs](https://serenity-js.org/modules)

## Prerequisites

To use this project, you'll need:
- Node.js, a Long-Term Support (LTS) release version 14 or later - [download](https://nodejs.org/en/)
- Java Runtime Environment (JRE) or a Java Development Kit (JDK) version 8 or later - [download](https://adoptopenjdk.net/)
- Chrome web browser - [download](https://www.google.co.uk/chrome/)

Follow the [installation instructions](https://serenity-js.org/handbook/integration/runtime-dependencies.html) to help you verify your setup.

## Usage

This repository is a GitHub template. You can use it to create new [GitHub repositories](https://help.github.com/en/articles/creating-a-repository-from-a-template) or simply [clone it to your computer](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

### Installation

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

If you encounter issues downloading the Serenity BDD CLI jar, please follow the [detailed instructions in the Serenity/JS Handbook](https://serenity-js.org/modules/serenity-bdd/#downloading-the-serenity-bdd-reporting-cli).

Similar instructions are available for the [`chromedriver` module](https://www.npmjs.com/package/chromedriver).

### Execution

The project provides several [NPM scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts) defined in [`package.json`](package.json):

```
npm run lint            # runs code linter
npm run lint:fix        # attempts to automatically fix linting issues
npm run clean           # removes reports from any previous test run
npm test                # executes the example test suite
                        # and generates the report under ./target/site/serenity
```

## Your feedback matters!

Do you find Serenity/JS useful? [Give it a star](https://github.com/serenity-js/serenity-js)! &#9733;

Found a bug? Need a feature? Raise [an issue](https://github.com/serenity-js/serenity-js/issues?state=open)
or submit a pull request.

Have feedback? Let me know on Twitter: [@JanMolak](https://twitter.com/JanMolak) 

If you'd like to chat with fellow users of Serenity/JS, join us on [Serenity/JS Community Chat](https://gitter.im/serenity-js/Lobby).

And if Serenity/JS has made your life a little bit easier, please consider [sponsoring its ongoing development](https://github.com/sponsors/serenity-js) 🙇

New tutorials and videos are coming soon, follow us on Twitter and subscribe to [Serenity/JS YouTube channel](https://www.youtube.com/channel/UC0RdeVPyjtJopVHvlLrXd1Q) to get notified when they're available!

[![Twitter Follow](https://img.shields.io/twitter/follow/SerenityJS?style=social)](https://twitter.com/@SerenityJS)
[![Twitter Follow](https://img.shields.io/twitter/follow/JanMolak?style=social)](https://twitter.com/@JanMolak)

