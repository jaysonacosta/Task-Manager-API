const mongoose = require("mongoose");

const Task = require("../models/task.model");

const GroupSchema = new mongoose.Schema({
  title: { type: String, required: true },
  meta: { pinned: { type: Boolean, default: false } },
  createdAt: { type: Date, default: Date.now },
});

const Group = mongoose.model("Group", GroupSchema);

module.exports = Group;
