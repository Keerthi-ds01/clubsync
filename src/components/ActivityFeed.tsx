
"use client";

import { useEffect, useState } from "react";

type Activity = {
    _id: string;
    user: string;
    action: string;
    taskTitle: string;
};

export default function ActivityFeed() {

    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {

        async function fetchActivities() {

            const res = await fetch("/api/activities");
            const data = await res.json();

            setActivities(data);

        }

        fetchActivities();

    }, []);

    return (

        <div className="
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-3xl
        p-6
        shadow-2xl
        ">

            <div className="flex items-center justify-between mb-6">

                <h2 className="text-3xl font-bold text-white">
                    📢 Recent Activity
                </h2>

                <span className="text-gray-400 text-sm">
                    {activities.length} Activities
                </span>

            </div>

            <div className="space-y-4">

                {activities.length === 0 && (

                    <div className="
                    bg-white/5
                    rounded-2xl
                    p-5
                    text-center
                    text-gray-400
                    ">

                        No recent activity yet.

                    </div>

                )}

                {activities.map((activity) => (

                    <div
                        key={activity._id}
                        className="
                        flex
                        items-center
                        gap-4
                        bg-white/10
                        rounded-2xl
                        p-4
                        hover:bg-white/20
                        transition-all
                        duration-300
                        "
                    >

                        {/* Avatar */}

                        <div className="
                        w-12
                        h-12
                        rounded-full
                        bg-cyan-500
                        flex
                        items-center
                        justify-center
                        text-xl
                        shadow-lg
                        ">

                            👤

                        </div>

                        {/* Activity */}

                        <div className="flex-1">

                            <p className="text-white">

                                <span className="font-bold text-cyan-300">
                                    {activity.user}
                                </span>

                                {" "}

                                {activity.action}

                                {" "}

                                <span className="font-bold">
                                    {activity.taskTitle}
                                </span>

                            </p>

                            <p className="text-gray-400 text-sm mt-1">
                                ClubSync Activity
                            </p>

                        </div>

                        {/* Green Dot */}

                        <div className="
                        w-4
                        h-4
                        rounded-full
                        bg-green-400
                        animate-pulse
                        ">

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}
