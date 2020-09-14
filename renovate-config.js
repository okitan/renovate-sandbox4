module.exports = {
  onboarding: false,
  platform: "github",
  repositories: ["okitan/renovate-sandbox4"],
  includeForks: true,
  // for postUpgradeTasks
  trustLevel: "high",
  allowedPostUpgradeCommands: [".*"],
};
