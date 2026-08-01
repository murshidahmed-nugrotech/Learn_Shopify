require("dotenv").config();

const { spawn } = require("child_process");

const [, , command] = process.argv;

const commands = {
  dev: ["theme", "dev"],
  pull: ["theme", "pull"],
  push: ["theme", "push"],
  open: ["theme", "open"],
  list: ["theme", "list"],
  info: ["theme", "info"],
  publish: ["theme", "publish"],
  delete: ["theme", "delete"],
};

if (!commands[command]) {
  console.error(`Unknown command: ${command}`);
  process.exit(1);
}

const args = [
  ...commands[command],
  "--store",
  process.env.SHOPIFY_STORE,
];

if (command !== "list") {
  args.push("--theme", process.env.SHOPIFY_THEME);
}

const child = spawn("shopify", args, {
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => process.exit(code));