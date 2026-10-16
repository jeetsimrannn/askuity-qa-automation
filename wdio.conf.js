const fs = require('fs');
const path = require('path');

// Run headless with: npm run test:headless
const chromeArgs = ['--window-size=1440,900'];
if (process.env.HEADLESS === 'true') {
    chromeArgs.push('--headless=new');
}

exports.config = {
    runner: 'local',

    // Specs
    specs: ['./src/specs/**/*.js'],
    exclude: [],

    // Parallel execution: each spec file runs in its own browser session
    maxInstances: 4,

    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: chromeArgs,
        },
    }],

    // Test configuration
    logLevel: 'warn',
    bail: 0,
    baseUrl: 'https://qa-task--oyettijon.replit.app',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    // Spec file retries are intentionally disabled so flaky tests are visible, not hidden

    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },

    // Save a screenshot for every failed test
    afterTest: async function (test, context, { passed }) {
        if (passed) {
            return;
        }
        const folder = './screenshots';
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder);
        }
        const fileName = test.title.replace(/[^a-z0-9]+/gi, '_') + '_' + Date.now() + '.png';
        await browser.saveScreenshot(path.join(folder, fileName));
    },
};
