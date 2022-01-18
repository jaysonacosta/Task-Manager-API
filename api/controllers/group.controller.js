// const express = require("express");
const GroupModel = require("../models/group.model");
const TaskModel = require("../models/task.model");
// const app = express();

exports.getAllGroups = async function (req, res) {
  try {
    const groups = await GroupModel.find({});
    res.send(groups);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createNewGroup = async function (req, res) {
  const group = new GroupModel(req.body);
  try {
    await group.save();
    res.send(group);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getGroupTasks = async function (req, res) {
  const groupId = req.params.groupId;
  try {
    const tasks = await TaskModel.find({ _groupId: groupId });
    res.send(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createNewTask = async function (req, res) {
  const groupId = req.params.groupId;
  const task = new TaskModel(req.body);
  task._groupId = groupId;
  try {
    await task.save();
    res.send(task);
  } catch (err) {
    res.status(500).send(err);
  }
};
