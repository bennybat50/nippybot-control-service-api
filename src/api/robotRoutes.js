const express = require("express");
const router = express.Router();
const RobotService = require("../services/robotService");
const { alpha } = require("../config/robotConfig");

const robotService = new RobotService({
  appId: alpha.appId,
  appKey: alpha.appKey,
  appSecret: alpha.appSecret,
});

router.post("/:sn/cabin/open", async (req, res) => {
  try {
    const result = await robotService.openCabinDoor(req.params.sn);
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/:sn/cabin/close", async (req, res) => {
  try {
    const result = await robotService.closeCabinDoor(req.params.sn);
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/:sn/lights/on", async (req, res) => {
  try {
    const result = await robotService.turnOnLights(req.params.sn);
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/:sn/lights/off", async (req, res) => {
  try {
    const result = await robotService.turnOffLights(req.params.sn);
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:sn/move/forward", async (req, res) => {
  try {
    const result = await robotService.controlMovement(req.params.sn, "forward");
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:sn/move/backward", async (req, res) => {
  try {
    const result = await robotService.controlMovement(req.params.sn, "backward");
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:sn/move/stop", async (req, res) => {
  try {
    const result = await robotService.controlMovement(req.params.sn, "stop");
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:sn/move/left", async (req, res) => {
  try {
    const result = await robotService.controlMovement(req.params.sn, "left");
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:sn/move/right", async (req, res) => {
  try {
    const result = await robotService.controlMovement(req.params.sn, "right");
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:sn/settings", async (req, res) => {
  try {
    const result = await robotService.getRobotSettings(req.params.sn);
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
