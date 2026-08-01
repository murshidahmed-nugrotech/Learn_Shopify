const { execSync } = require("child_process");
const { store } = require("./config");

execSync(
  `shopify theme list --store ${store}`,
  {
    stdio: "inherit",
  }
);