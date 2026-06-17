
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function EditTaskPage() {
    const params = useParams();
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("low");
    const [status, setStatus] = useState("todo");
    const [taskEvent, setTaskEvent] = useState("General");
    const [assignedTo, setAssignedTo] = useState("Unassigned");
    const [dueDate, setDueDate] = useState("");

    useEffect(() => {
        async function fetchTask() {
            const res = await fetch(`/api/tasks/${params.id}`);
            const data = await res.json();

            setTitle(data.title);
            setDescription(data.description);
            setPriority(data.priority);
            setStatus(data.status);
            setTaskEvent(data.event);
            setAssignedTo(data.assignedTo);

            setDueDate(
                data.dueDate
                    ? data.dueDate.split("T")[0]
                    : ""
            );
        }

        fetchTask();
    }, [params.id]);

    async function handleUpdate(
        e: React.FormEvent
    ) {
        e.preventDefault();

        await fetch(`/api/tasks/${params.id}`, {
            method: "PATCH",
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

        router.push("/dashboard");
    }

    return (
        <div className="min-h-screen">

            <Navbar />

            <div className="flex justify-center p-8">

                <div className="w-full max-w-3xl rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8">

                    <h1 className="text-5xl font-extrabold text-center text-white mb-2">
                        ✏️ Edit Task
                    </h1>

                    <p className="text-center text-gray-300 mb-8">
                        Update task details and save your changes.
                    </p>

                    <form
                        onSubmit={handleUpdate}
                        className="flex flex-col gap-6"
                    >

                        <input
                            value={title}
                            onChange={(e) =>
                                setTitle(e.target.value)
                            }
                            placeholder="Task Title"
                            className="rounded-xl bg-white/10 border border-white/20 p-4 text-white outline-none focus:ring-2 focus:ring-cyan-400"
                        />

                        <textarea
                            rows={4}
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                            placeholder="Task Description"
                            className="rounded-xl bg-white/10 border border-white/20 p-4 text-white outline-none focus:ring-2 focus:ring-cyan-400"
                        />

                        <div className="grid md:grid-cols-2 gap-5">

                            <select
                                value={priority}
                                onChange={(e) =>
                                    setPriority(e.target.value)
                                }
                                className="rounded-xl bg-white/10 border border-white/20 p-4 text-white"
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>

                            <select
                                value={status}
                                onChange={(e) =>
                                    setStatus(e.target.value)
                                }
                                className="rounded-xl bg-white/10 border border-white/20 p-4 text-white"
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

                        <div className="grid md:grid-cols-2 gap-5">

                            <select
                                value={taskEvent}
                                onChange={(e) =>
                                    setTaskEvent(e.target.value)
                                }
                                className="rounded-xl bg-white/10 border border-white/20 p-4 text-white"
                            >
                                <option value="General">General</option>
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

                            <select
                                value={assignedTo}
                                onChange={(e) =>
                                    setAssignedTo(e.target.value)
                                }
                                className="rounded-xl bg-white/10 border border-white/20 p-4 text-white"
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

                        <input
                            type="date"
                            value={dueDate}
                            onChange={(e) =>
                                setDueDate(e.target.value)
                            }
                            className="rounded-xl bg-white/10 border border-white/20 p-4 text-white"
                        />

                        <button
                            type="submit"
                            className="mt-4 rounded-xl bg-gradient-to-r from-green-500 to-cyan-500 py-4 text-lg font-bold text-white shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            💾 Save Changes
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

