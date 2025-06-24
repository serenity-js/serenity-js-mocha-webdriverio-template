const {remote} = require("webdriverio");

async function main() {
    const browser = await remote({
        capabilities: {
            browserName: "chrome",
            'goog:chromeOptions': {
                args: [
                    // https://github.com/webdriverio/webdriverio/issues/14168
                    "--no-sandbox",
                    "--headless",
                ]
            }
        },
        logLevel: 'info',
        connectionRetryCount: 1,
    });

    await browser.url(`about:blank`);
    const expected = "";
    const value = await browser.getTitle();
    if (value !== expected) console.error(`Wrong value! Expected "${expected}", actual "${value}"!`);

// Now we need to close the browser window, because it stays open after this
// program exits
// This is a different topic.
    await browser.closeWindow();
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
