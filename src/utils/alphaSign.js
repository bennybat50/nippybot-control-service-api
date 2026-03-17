const crypto = require("crypto");

function sha1Hex(str) {
  return crypto.createHash("sha1").update(str).digest("hex").toLowerCase();
}

function generateGetAlphaSign(params, config) {
  const { appSecret, appId, appKey, nonce, timestamp } = config;

  const sortedKeys = Object.keys(params).sort();
  const paramString = sortedKeys.map((k) => `${k}=${params[k]}`).join("&");

  const fixedStr =
    `alphaAppId=${appId}` +
    `&alphaAppKey=${appKey}` +
    `&alphaNonce=${nonce}` +
    `&timestamp=${timestamp}`;

  return sha1Hex(`${appSecret}${paramString}${fixedStr}`);
}

function generatePostAlphaSign(body, config) {
  const { appSecret, appId, appKey, nonce, timestamp } = config;

  const fixedStr =
    `alphaAppId=${appId}` +
    `&alphaAppKey=${appKey}` +
    `&alphaNonce=${nonce}` +
    `&timestamp=${timestamp}`;

  return sha1Hex(`${appSecret}${fixedStr}${JSON.stringify(body)}`);
}

module.exports = {
  generateGetAlphaSign,
  generatePostAlphaSign,
};
