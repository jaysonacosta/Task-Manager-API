const express = require("express");
const router = express.Router();

const Group = require("../controllers/group.controller");

// Get all groups
router.get("/", Group.getAllGroups);

// Crate new group
router.post("/", Group.createNewGroup);

// Get all tasks in group
router.get("/:groupId/task", Group.getGroupTasks);

// Create new task in group
router.post("/:groupId/task", Group.createNewTask);

module.exports = router;
