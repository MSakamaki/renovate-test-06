module.exports = {
  platform: "github",
  dryRun: true,
  repositories: ["MSakamaki/renovate-test-06"],
  allowPostUpgradeCommandTemplating: true,
  allowedPostUpgradeCommands: [
    "^\\(cd frontend && NG_CLI_ANALYTICS=ci npm ci\\)$",
    "^\\(cd frontend && NG_CLI_ANALYTICS=ci npm i\\)$",
    "^\\(cd frontend && NG_CLI_ANALYTICS=ci npm ci --ignore-scripts\\)$",
    "^\\(cd frontend && NG_CLI_ANALYTICS=ci npm i --ignore-scripts\\)$",
    "^\\(cd frontend && ",
    "^\\(cd frontend && npm i --ignore-scripts\\)$",
    "^\\(cd frontend && FORCE_NG_UPDATE=true npx ng",
    "^\\(cd frontend && npx nx migrate @nrwl/workspace@latest",
    "^\\(cd frontend && sh nx-run-migrations.sh"
  ],
  skipInstalls: false,
  dryRun: false,
  trustLevel: "high",
  logLevel: "debug",
  logFile: "/var/log/renovate-bot.log",
  baseBranches: ["main"],
  enabledManagers: ["npm", "dockerfile"],
};