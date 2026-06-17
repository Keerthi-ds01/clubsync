
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
    const [open, setOpen] = useState(true);

    const menuItems = [
        { icon: "🏠", text: "Dashboard", href: "/dashboard" },
        { icon: "📋", text: "Kanban Board", href: "/board" },
        { icon: "➕", text: "Create Task", href: "/create-task" },
        { icon: "📢", text: "Recent Activity", href: "/activity" },
        { icon: "📅", text: "Events", href: "/events" },
        { icon: "👥", text: "Members", href: "/members" },
    ];

    return (
        <aside
            className={`
            fixed
            top-0
            left-0
            h-screen
            bg-slate-950/90
            backdrop-blur-xl
            border-r
            border-white/10
            shadow-2xl
            transition-all
            duration-300
            z-50
            flex
            flex-col
            justify-between
            ${open ? "w-64" : "w-20"}
            `}
        >
            <div>

                {/* Header */}

                <div className="flex items-center justify-between p-5">

                    {open && (
                        <h1 className="text-3xl font-extrabold text-cyan-400">
                            ClubSync
                        </h1>
                    )}

                    <button
                        onClick={() => setOpen(!open)}
                        className="text-white text-2xl hover:text-cyan-400 transition"
                    >
                        ☰
                    </button>

                </div>

                {/* Navigation */}

                <div className="flex flex-col gap-2 px-3 mt-6">

                    {menuItems.map((item) => (
                        <Link key={item.text} href={item.href}>

                            <div
                                className="
                                flex
                                items-center
                                gap-4
                                p-3
                                rounded-2xl
                                text-white
                                hover:bg-cyan-500
                                hover:shadow-lg
                                transition-all
                                duration-300
                                cursor-pointer
                                "
                            >
                                <span className="text-2xl">
                                    {item.icon}
                                </span>

                                {open && (
                                    <span className="font-medium">
                                        {item.text}
                                    </span>
                                )}
                            </div>

                        </Link>
                    ))}

                </div>

            </div>

            {/* Bottom Profile */}

            <div className="p-4 border-t border-white/10">

                <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-xl">
                        👤
                    </div>

                    {open && (
                        <div>
                            <p className="text-white font-semibold">
                                Club Admin
                            </p>

                            <p className="text-gray-400 text-sm">
                                Welcome back!
                            </p>
                        </div>
                    )}

                </div>

            </div>

        </aside>
    );
}
