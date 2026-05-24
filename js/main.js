/**
 * Portfolio site script
 * Handles the live year display and the contact action.
 */

(function () {
  "use strict";

  const yearEl = document.getElementById("year");
  const contactButton = document.getElementById("contact-button");
  const messageOutput = document.getElementById("message-output");
  const emailAddress = "hello@averychen.dev";

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (contactButton && messageOutput) {
    contactButton.addEventListener("click", async () => {
      messageOutput.textContent = "Preparing your message…";

      try {
        await navigator.clipboard.writeText(emailAddress);
        messageOutput.textContent = `Email copied to clipboard: ${emailAddress}`;
      } catch (error) {
        messageOutput.textContent = `Please email: ${emailAddress}`;
      }
    });
  }
})();
