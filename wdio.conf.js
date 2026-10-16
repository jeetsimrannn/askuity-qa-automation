import fs from 'node:fs';
import path from 'node:path';

// Run headless with: HEADLESS=true npm test
const isHeadless = process.env.HEADLESS === 'true';
const SCREENSHOT_DIR = './screenshots';

export const config = {
    runner: 'local',

    // Specs
    specs: ['./src/specs/**/*.js'],
    exclude: [],

    // Parallel execution: each spec file runs in its own worker and browser session
    maxInstances: 4,

    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--window-size=1440,900',
                ...(isHeadless ? ['--headless=new', '--disable-gpu'] : []),
            ],
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

    // Hooks
    /**
     * Save a screenshot for every failed test, named after the suite, test and time.
     */
    afterTest: async function (test, context, { passed }) {
        if (passed) {
            return;
        }
        fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
        const name = `${test.parent} ${test.title}`
            .replace(/[^a-z0-9]+/gi, '_')
            .slice(0, 100);
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        await browser.saveScreenshot(path.join(SCREENSHOT_DIR, `${name}_${timestamp}.png`));
    },
};
