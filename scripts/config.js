require("dotenv").config();

module.exports = {
  store: process.env.SHOPIFY_STORE,
  theme: process.env.SHOPIFY_THEME,
};