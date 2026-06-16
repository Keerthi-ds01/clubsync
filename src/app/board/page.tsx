
"use client";

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

type Task = {
    _id: string;
    title: string;
    description: string;
    priority: string;
    status: string;
};

export default function BoardPage() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const updateStatus = async (
        id: string,
        newStatus: string
    ) => {
        await fetch(`/api/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                status: newStatus,
            }),
        });

        window.location.reload();
    };

    useEffect(() => {
        async function fetchTasks() {
            const res = await fetch("/api/tasks");
            const data = await res.json();
            setTasks(data);
        }

        fetchTasks();
    }, []);

    const todo = tasks.filter(
        (task) => task.status === "todo"
    );

    const inprogress = tasks.filter(
        (task) => task.status === "inprogress"
    );

    const done = tasks.filter(
        (task) => task.status === "done"
    );

    return (
        <>
            <Navbar />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">

                <div className="bg-blue-500 text-white p-4 rounded-xl shadow">
                    <h3 className="text-lg font-bold">Total Tasks</h3>
                    <p className="text-3xl">{tasks.length}</p>
                </div>

                <div className="bg-yellow-500 text-white p-4 rounded-xl shadow">
                    <h3 className="text-lg font-bold">To Do</h3>
                    <p className="text-3xl">{todo.length}</p>
                </div>

                <div className="bg-purple-500 text-white p-4 rounded-xl shadow">
                    <h3 className="text-lg font-bold">In Progress</h3>
                    <p className="text-3xl">{inprogress.length}</p>
                </div>

                <div className="bg-green-600 text-white p-4 rounded-xl shadow">
                    <h3 className="text-lg font-bold">Done</h3>
                    <p className="text-3xl">{done.length}</p>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

                {/* TO DO */}
                <div className="bg-gray-100 rounded-xl p-4">
                    <h2 className="text-2xl font-bold mb-4">
                        To Do
                    </h2>

                    {todo.map((task) => (
                        <div
                            key={task._id}
                            className="bg-white p-3 rounded-lg mb-3 shadow"
                        >
                            <h3 className="font-bold">
                                {task.title}
                            </h3>

                            <p>{task.description}</p>

                            <button
                                onClick={() =>
                                    updateStatus(
                                        task._id,
                                        "inprogress"
                                    )
                                }
                                className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
                            >
                                Move →
                            </button>
                        </div>
                    ))}
                </div>

                {/* IN PROGRESS */}
                <div className="bg-gray-100 rounded-xl p-4">
                    <h2 className="text-2xl font-bold mb-4">
                        In Progress
                    </h2>

                    {inprogress.map((task) => (
                        <div
                            key={task._id}
                            className="bg-white p-3 rounded-lg mb-3 shadow"
                        >
                            <h3 className="font-bold">
                                {task.title}
                            </h3>

                            <p>{task.description}</p>

                            <div className="flex gap-2 mt-2">
                                <button
                                    onClick={() =>
                                        updateStatus(
                                            task._id,
                                            "todo"
                                        )
                                    }
                                    className="bg-gray-500 text-white px-3 py-1 rounded"
                                >
                                    ← Back
                                </button>

                                <button
                                    onClick={() =>
                                        updateStatus(
                                            task._id,
                                            "done"
                                        )
                                    }
                                    className="bg-green-600 text-white px-3 py-1 rounded"
                                >
                                    Done →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* DONE */}
                <div className="bg-gray-100 rounded-xl p-4">
                    <h2 className="text-2xl font-bold mb-4">
                        Done
                    </h2>

                    {done.map((task) => (
                        <div
                            key={task._id}
                            className="bg-white p-3 rounded-lg mb-3 shadow"
                        >
                            <h3 className="font-bold">
                                {task.title}
                            </h3>

                            <p>{task.description}</p>

                            <button
                                onClick={() =>
                                    updateStatus(
                                        task._id,
                                        "inprogress"
                                    )
                                }
                                className="bg-yellow-500 text-white px-3 py-1 rounded mt-2"
                            >
                                Reopen
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}
