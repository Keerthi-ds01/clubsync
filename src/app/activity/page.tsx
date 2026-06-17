"use client";

import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

type Activity = {
    _id: string;
    user: string;
    action: string;
    taskTitle: string;
    createdAt: string;
};

export default function ActivityPage() {

    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {

        async function fetchActivity() {

            const res = await fetch("/api/activity");
            const data = await res.json();

            setActivities(data);

        }

        fetchActivity();

    }, []);

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">

            <Sidebar />

            <div className="ml-64 p-8">

                <h1 className="text-5xl font-bold text-white">
                    📢 Recent Activity
                </h1>

                <p className="text-gray-400 mt-2">
                    Latest updates across ClubSync
                </p>

                <div className="mt-10 space-y-5">

                    {activities.map((activity) => (

                        <div
                            key={activity._id}
                            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5"
                        >

                            <h2 className="text-xl font-bold text-cyan-400">
                                📢 {activity.action}
                            </h2>

                            <p className="text-white mt-2">
                                👤 <span className="font-semibold">{activity.user}</span>
                            </p>

                            <p className="text-gray-300 mt-1">
                                📋 {activity.taskTitle}
                            </p>

                            <p className="text-gray-500 text-sm mt-3">
                                🕒 {new Date(activity.createdAt).toLocaleString()}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );
}