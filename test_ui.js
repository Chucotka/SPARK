const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2
  });

  const page = await context.newPage();

  // Serve the file via a local server to ensure it loads properly with relative paths
  const fileUrl = 'file://' + __dirname + '/index.html';
  await page.goto(fileUrl);

  // Wait a bit for animations and layout
  await page.waitForTimeout(2000);

  // Take screenshot
  await page.screenshot({ path: '/tmp/file_attachments/spark_updated.png' });

  await browser.close();
  console.log('Screenshot saved to /tmp/file_attachments/spark_updated.png');
})();
