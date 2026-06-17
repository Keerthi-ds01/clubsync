
"use client";

import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const CreateTask = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("low");
    const [status, setStatus] = useState("todo");
    const [taskEvent, setTaskEvent] = useState("General");
    const [dueDate, setDueDate] = useState("");
    const [assignedTo, setAssignedTo] = useState("Unassigned");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        try {
            const response = await fetch("/api/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    description,
                    priority,
                    status,
                    event: taskEvent,
                    assignedTo,
                    dueDate,
                }),
            });

            await response.json();

            setTitle("");
            setDescription("");
            setPriority("low");
            setStatus("todo");
            setTaskEvent("General");
            setAssignedTo("Unassigned");
            setDueDate("");

            alert("🎉 Task created successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to create task.");
        }
    }

    return (
        <div className="min-h-screen">

            <Navbar />

            <div className="flex justify-center p-8">

                <div className="w-full max-w-3xl rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8">

                    <h1 className="text-5xl font-extrabold text-center text-white mb-2">
                        ✨ Create New Task
                    </h1>

                    <p className="text-center text-gray-300 mb-8">
                        Organize your club activities efficiently.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                    >

                        <div>
                            <label className="text-white font-semibold">
                                Task Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter task name"
                                value={title}
                                onChange={(e) =>
                                    setTitle(e.target.value)
                                }
                                className="mt-2 w-full rounded-xl bg-white/10 border border-white/20 p-4 text-white outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        <div>
                            <label className="text-white font-semibold">
                                Description
                            </label>

                            <textarea
                                placeholder="Describe the task..."
                                value={description}
                                onChange={(e) =>
                                    setDescription(e.target.value)
                                }
                                rows={4}
                                className="mt-2 w-full rounded-xl bg-white/10 border border-white/20 p-4 text-white outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">

                            <div>
                                <label className="text-white font-semibold">
                                    Priority
                                </label>

                                <select
                                    value={priority}
                                    onChange={(e) =>
                                        setPriority(e.target.value)
                                    }
                                    className="mt-2 w-full rounded-xl bg-white/10 border border-white/20 p-4 text-white"
                                >
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-white font-semibold">
                                    Status
                                </label>

                                <select
                                    value={status}
                                    onChange={(e) =>
                                        setStatus(e.target.value)
                                    }
                                    className="mt-2 w-full rounded-xl bg-white/10 border border-white/20 p-4 text-white"
                                >
                                    <option value="todo">To Do</option>
                                    <option value="inprogress">
                                        In Progress
                                    </option>
                                    <option value="done">
                                        Done
                                    </option>
                                </select>
                            </div>

                        </div>

                        <div className="grid md:grid-cols-2 gap-5">

                            <div>
                                <label className="text-white font-semibold">
                                    Event
                                </label>

                                <select
                                    value={taskEvent}
                                    onChange={(e) =>
                                        setTaskEvent(e.target.value)
                                    }
                                    className="mt-2 w-full rounded-xl bg-white/10 border border-white/20 p-4 text-white"
                                >
                                    <option value="General">
                                        General
                                    </option>
                                    <option value="Recruitment 2026">
                                        Recruitment 2026
                                    </option>
                                    <option value="Workshop">
                                        Workshop
                                    </option>
                                    <option value="Hackathon">
                                        Hackathon
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label className="text-white font-semibold">
                                    Assigned To
                                </label>

                                <select
                                    value={assignedTo}
                                    onChange={(e) =>
                                        setAssignedTo(e.target.value)
                                    }
                                    className="mt-2 w-full rounded-xl bg-white/10 border border-white/20 p-4 text-white"
                                >
                                    <option value="Unassigned">
                                        Unassigned
                                    </option>
                                    <option value="Keerthi">
                                        Keerthi
                                    </option>
                                    <option value="Rahul">
                                        Rahul
                                    </option>
                                    <option value="Ananya">
                                        Ananya
                                    </option>
                                    <option value="Priya">
                                        Priya
                                    </option>
                                </select>
                            </div>

                        </div>

                        <div>
                            <label className="text-white font-semibold">
                                Due Date
                            </label>

                            <input
                                type="date"
                                value={dueDate}
                                onChange={(e) =>
                                    setDueDate(e.target.value)
                                }
                                className="mt-2 w-full rounded-xl bg-white/10 border border-white/20 p-4 text-white"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-4 text-lg font-bold text-white shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            🚀 Create Task
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default CreateTask;
