"use client";

import Sidebar from "@/components/Sidebar";
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

        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">

            <Sidebar />

            <div className="ml-64 p-8">

                {/* Header */}

                <div className="flex justify-between items-center mb-10">

                    <div>

                        <h1 className="text-5xl font-extrabold text-white">
                            📋 Kanban Board
                        </h1>

                        <p className="text-gray-400 mt-3">
                            Organize club tasks with a simple workflow.
                        </p>

                    </div>

                    <button className="
                    bg-cyan-500
                    hover:bg-cyan-400
                    transition
                    rounded-2xl
                    px-6
                    py-3
                    text-white
                    font-bold
                    ">

                        + New Task

                    </button>

                </div>

                {/* Stats */}

                <div className="grid md:grid-cols-4 gap-6 mb-10">

                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">

                        <p className="text-gray-300">
                            Total Tasks
                        </p>

                        <h1 className="text-5xl font-bold text-cyan-400 mt-2">
                            {tasks.length}
                        </h1>

                    </div>

                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-yellow-400/30">

                        <p className="text-gray-300">
                            To Do
                        </p>

                        <h1 className="text-5xl font-bold text-yellow-400 mt-2">
                            {todo.length}
                        </h1>

                    </div>

                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-cyan-400/30">

                        <p className="text-gray-300">
                            In Progress
                        </p>

                        <h1 className="text-5xl font-bold text-cyan-400 mt-2">
                            {inprogress.length}
                        </h1>

                    </div>

                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-green-400/30">

                        <p className="text-gray-300">
                            Done
                        </p>

                        <h1 className="text-5xl font-bold text-green-400 mt-2">
                            {done.length}
                        </h1>

                    </div>

                </div>

                {/* Kanban Columns */}

                <div className="grid lg:grid-cols-3 gap-8">

                                        {/* TO DO */}

                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-yellow-400/30 p-5">

                        <div className="flex justify-between items-center mb-5">

                            <h2 className="text-3xl font-bold text-yellow-400">
                                📌 To Do
                            </h2>

                            <span className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full">
                                {todo.length}
                            </span>

                        </div>

                        {todo.length === 0 && (
                            <div className="text-gray-400 text-center py-10">
                                No tasks here.
                            </div>
                        )}

                        {todo.map((task) => (

                            <div
                                key={task._id}
                                className="bg-white/10 rounded-2xl border border-white/10 p-5 mb-5 hover:scale-105 hover:border-cyan-400 transition-all"
                            >

                                <h3 className="text-xl font-bold text-white">
                                    {task.title}
                                </h3>

                                <p className="text-gray-300 mt-3">
                                    {task.description}
                                </p>

                                <button
                                    onClick={() =>
                                        updateStatus(task._id, "inprogress")
                                    }
                                    className="mt-5 w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 py-3 font-semibold text-white transition"
                                >
                                    Move →
                                </button>

                            </div>

                        ))}

                    </div>

                    {/* IN PROGRESS */}

                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-cyan-400/30 p-5">

                        <div className="flex justify-between items-center mb-5">

                            <h2 className="text-3xl font-bold text-cyan-400">
                                🚀 In Progress
                            </h2>

                            <span className="bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full">
                                {inprogress.length}
                            </span>

                        </div>

                        {inprogress.length === 0 && (
                            <div className="text-gray-400 text-center py-10">
                                No tasks here.
                            </div>
                        )}

                        {inprogress.map((task) => (

                            <div
                                key={task._id}
                                className="bg-white/10 rounded-2xl border border-white/10 p-5 mb-5 hover:scale-105 hover:border-cyan-400 transition-all"
                            >

                                <h3 className="text-xl font-bold text-white">
                                    {task.title}
                                </h3>

                                <p className="text-gray-300 mt-3">
                                    {task.description}
                                </p>

                                <div className="flex gap-2 mt-5">

                                    <button
                                        onClick={() =>
                                            updateStatus(task._id, "todo")
                                        }
                                        className="flex-1 rounded-xl bg-slate-600 hover:bg-slate-500 py-3 text-white"
                                    >
                                        ← Back
                                    </button>

                                    <button
                                        onClick={() =>
                                            updateStatus(task._id, "done")
                                        }
                                        className="flex-1 rounded-xl bg-green-600 hover:bg-green-500 py-3 text-white"
                                    >
                                        Done →
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* DONE */}

                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-green-400/30 p-5">

                        <div className="flex justify-between items-center mb-5">

                            <h2 className="text-3xl font-bold text-green-400">
                                ✅ Done
                            </h2>

                            <span className="bg-green-400/20 text-green-300 px-3 py-1 rounded-full">
                                {done.length}
                            </span>

                        </div>

                        {done.length === 0 && (
                            <div className="text-gray-400 text-center py-10">
                                No tasks here.
                            </div>
                        )}

                        {done.map((task) => (

                            <div
                                key={task._id}
                                className="bg-white/10 rounded-2xl border border-white/10 p-5 mb-5 hover:scale-105 hover:border-green-400 transition-all"
                            >

                                <h3 className="text-xl font-bold text-white">
                                    {task.title}
                                </h3>

                                <p className="text-gray-300 mt-3">
                                    {task.description}
                                </p>

                                <button
                                    onClick={() =>
                                        updateStatus(task._id, "inprogress")
                                    }
                                    className="mt-5 w-full rounded-xl bg-amber-500 hover:bg-amber-400 py-3 font-semibold text-white"
                                >
                                    Reopen
                                </button>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>

    );

}
