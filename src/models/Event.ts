import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    venue: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        required: true,
    },

    time: {
        type: String,
        required: true,
    },

    participants: {
        type: Number,
        default: 0,
    },

    status: {
        type: String,
        enum: ["Upcoming", "Past"],
        default: "Upcoming",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Event =
    mongoose.models.Event ||
    mongoose.model("Event", EventSchema);

export default Event;