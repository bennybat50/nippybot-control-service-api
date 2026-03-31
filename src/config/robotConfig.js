require("dotenv").config();

/**
 * Robot / Alpha platform configuration
 * Data only — no logic
 */
const robotConfig = {
  alpha: {
    baseUrl: process.env.ALPHA_BASE_URL || "https://alpha-pro.csjbot.com",
    appId: process.env.ALPHA_APP_ID,
    appKey: process.env.ALPHA_APP_KEY,
    appSecret: process.env.ALPHA_APP_SECRET,
    language: process.env.ALPHA_LANGUAGE || "en-US",

    timeoutMs: Number(process.env.ALPHA_TIMEOUT_MS || 5000),
  },
};

/**
 * Fail fast if required config is missing
 */
["appId", "appKey", "appSecret"].forEach((key) => {
  if (!robotConfig.alpha[key]) {
    throw new Error(`Missing required env var: ALPHA_${key.toUpperCase()}`);
  }
});

module.exports = robotConfig;
