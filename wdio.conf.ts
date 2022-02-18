import { ConsoleReporter } from '@serenity-js/console-reporter';
import { ArtifactArchiver } from '@serenity-js/core';
import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';
import { Photographer, TakePhotosOfInteractions, WebdriverIOConfig } from '@serenity-js/webdriverio';
import isCI = require('is-ci');
import { resolve } from 'path';  // eslint-disable-line unicorn/import-style

import { Actors } from './spec/serenity';

export const config: WebdriverIOConfig = {

    baseUrl: 'https://serenity-js.org/',

    framework: '@serenity-js/webdriverio',

    serenity: {
        actors: new Actors(),
        crew: [
            ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
            Photographer.whoWill(TakePhotosOfInteractions),     // slower execution, more comprehensive reports
            // Photographer.whoWill(TakePhotosOfFailures),      // fast execution, screenshots only when tests fail
            ConsoleReporter.forDarkTerminals(),
            new SerenityBDDReporter(),
        ]
    },

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },

    specs: [
        './spec/**/*.spec.ts',
    ],

    // native WebdriverIO reporters
    reporters: [
        'spec',
    ],

    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: false,
            project: resolve(__dirname, './tsconfig.json'),
        },
    },

    // headless: true,
    automationProtocol: 'devtools',

    runner: 'local',

    maxInstances: 1,

    capabilities: [{

        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                // '--headless',
                '--disable-infobars',
                '--no-sandbox',
                '--disable-gpu',
                '--window-size=1024,768',
            ].concat(isCI ? ['--headless'] : [])    // run in headless mode on the CI server,
        }
    }],

    logLevel: 'debug',

    waitforTimeout: 10000,

    connectionRetryTimeout: 90000,

    connectionRetryCount: 3,
};
