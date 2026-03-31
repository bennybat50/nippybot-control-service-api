const axios = require("axios");
const {
  generateGetAlphaSign,
  generatePostAlphaSign,
} = require("../utils/alphaSign");

const BASE_URL = "https://alpha-pro.csjbot.com";

class RobotService {
  constructor({ appId, appKey, appSecret }) {
    this.appId = appId;
    this.appKey = appKey;
    this.appSecret = appSecret;
  }

  buildConfig(sn) {
    return {
      sn,
      appId: this.appId,
      appKey: this.appKey,
      appSecret: this.appSecret,
      nonce: Math.random().toString(36).substr(2, 10),
      timestamp: Math.floor(Date.now() / 1000),
    };
  }

  buildHeaders(config, alphaSign) {
    return {
      "Alpha-Robot-Sn": config.sn,
      "Alpha-App-Id": config.appId,
      "Alpha-App-Key": config.appKey,
      "Alpha-Nonce": config.nonce,
      "Timestamp": config.timestamp,
      "Alpha-language": "en-US",
      "Alpha-Sign": alphaSign,
    };
  }

  async get(endpoint, params = {}, sn) {
    
    const config = this.buildConfig(sn);
    const alphaSign = generateGetAlphaSign(params, config);

    const response = await axios.get(BASE_URL + endpoint, {
      headers: this.buildHeaders(config, alphaSign),
      params,
    });

    return response.data;
  }

  async put(endpoint, body = {}, sn) {
    const config = this.buildConfig(sn);
    const alphaSign = generatePostAlphaSign(body, config);

    const response = await axios.put(BASE_URL + endpoint, body, {
      headers: this.buildHeaders(config, alphaSign),
    });

    return response.data;
  }

  /* ---------- High-level robot commands ---------- */

  openCabinDoor(sn) {
    return this.put("/app-api/server/command/cabin-door/open", {}, sn);
  }

  closeCabinDoor(sn) {
    return this.put("/app-api/server/command/cabin-door/close", {}, sn);
  }

  controlCabinDoor(sn, action) {
    if (!["open", "close"].includes(action)) {
      throw new Error("action must be 'open' or 'close'");
    }
    return this.put(`/app-api/server/command/cabin-door/${action}`, {}, sn);
  }

  getRobotSettings(sn) {
    return this.get(
      "/app-api/server/robot-setting/get-setting-state-latest",
      {},
      sn,
    );
  }

  controlNeonLights(sn, action) {
  if (!["open", "close"].includes(action)) {
        throw new Error("action must be 'open' or 'close'");
      }
      return this.put(`/app-api/server/light/${action}-neon-light`, {}, sn);
    }


  turnOnLights(sn) {
    return this.put("/app-api/server/light/open-neon-light", {}, sn);
  }

  turnOffLights(sn) {
    return this.put("/app-api/server/light/close-neon-light", {}, sn);
  }


    controlMovement(sn, action) {
  if (!["stop","backward",  "forward", "right","left"].includes(action)) {
        throw new Error("action must be 'stop', 'backward', 'forward', 'right', or 'left'");
      }
      return this.get(`/app-api/server/move/${action}`, {"sn": sn}, sn);
    }


  // turnOnLights(sn) {
  //   return this.put("/app-api/server/light/open-neon-light", {}, sn);
  // }

  // turnOffLights(sn) {
  //   return this.put("/app-api/server/light/close-neon-light", {}, sn);
  // }


}

module.exports = RobotService;
