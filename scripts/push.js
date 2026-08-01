const { execSync } = require("child_process");
const { store, theme } = require("./config");

execSync(
  `shopify theme push --store ${store} --theme ${theme}`,
  {
    stdio: "inherit",
  }
);