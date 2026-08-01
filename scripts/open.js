const { execSync } = require("child_process");
const { store, theme } = require("./config");

execSync(
  `shopify theme open --store ${store} --theme ${theme}`,
  {
    stdio: "inherit",
  }
);