/**
 * AI106 HTML — main entry point
 *
 * Add your application logic here. The DOM is ready when this script runs
 * (loaded with defer in index.html).
 */

(function () {
  "use strict";

  const yearEl = document.getElementById("year");
  const demoButton = document.getElementById("demo-button");
  const demoOutput = document.getElementById("demo-output");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (demoButton && demoOutput) {
    let clickCount = 0;

    demoButton.addEventListener("click", () => {
      clickCount += 1;
      demoOutput.textContent =
        clickCount === 1
          ? "JavaScript is wired up. Replace this with your own logic."
          : `Button clicked ${clickCount} times.`;
    });
  }
})();
