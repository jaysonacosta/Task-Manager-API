const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  _groupId: { type: mongoose.Schema.Types.ObjectId, required: true },
  meta: {
    completed: { type: Boolean, default: false },
    priority: { type: Boolean, default: false },
  },
  createdAt: { type: Date, default: Date.now },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
