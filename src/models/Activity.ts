import mongoose, { Schema } from "mongoose";

const ActivitySchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },

    action: {
      type: String,
      required: true,
    },

    taskTitle: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Activity ||
  mongoose.model("Activity", ActivitySchema);