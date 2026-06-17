import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        enum: ["Active", "Busy", "Offline"],
        default: "Active",
    },

    avatar: {
        type: String,
        default: "👤",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

});

const Member =
    mongoose.models.Member ||
    mongoose.model("Member", MemberSchema);

export default Member;