"use client";

import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateEventPage() {

    const router = useRouter();

    const [title, setTitle] = useState("");
    const [venue, setVenue] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [participants, setParticipants] = useState(0);
    const [status, setStatus] = useState("Upcoming");
    const [loading, setLoading] = useState(false);

    async function createEvent() {

        if (
            !title ||
            !venue ||
            !date ||
            !time
        ) {
            alert("Please fill all fields.");
            return;
        }

        if (participants < 0) {
            alert("Participants cannot be negative.");
            return;
        }

        setLoading(true);

        const res = await fetch("/api/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                venue,
                date,
                time,
                participants,
                status,
            }),
        });

        if (res.ok) {

            alert("✅ Event Created Successfully!");

            router.push("/events");
            router.refresh();

        } else {

            alert("❌ Failed to create event.");

        }

        setLoading(false);
    }

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">

            <Sidebar />

            <div className="ml-64 p-10">

                <h1 className="text-5xl font-bold text-white mb-8">
                    ➕ Create Event
                </h1>

                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 max-w-3xl">

                    <label className="text-white font-semibold mb-2 block">
                        🎯 Event Title
                    </label>

                    <input
                        placeholder="Enter event title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-800 text-white mb-5"
                    />

                    <label className="text-white font-semibold mb-2 block">
                        📍 Venue
                    </label>

                    <input
                        placeholder="Enter venue"
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-800 text-white mb-5"
                    />

                    <label className="text-white font-semibold mb-2 block">
                        📅 Event Date
                    </label>

                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-800 text-white mb-5"
                    />

                    <label className="text-white font-semibold mb-2 block">
                        🕒 Event Time
                    </label>

                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-800 text-white mb-5"
                    />

                    <label className="text-white font-semibold mb-2 block">
                        👥 Number of Participants
                    </label>

                    <input
                        type="number"
                        min="0"
                        placeholder="Enter participant count"
                        
                        
                        value={participants}
                        onChange={(e) =>
                            setParticipants(Number(e.target.value))
                        }
                        className="w-full p-4 rounded-xl bg-slate-800 text-white mb-5"
                    />

                    <label className="text-white font-semibold mb-2 block">
                        🚩 Event Status
                    </label>

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-800 text-white mb-8"
                    >
                        <option value="Upcoming">Upcoming</option>
                        <option value="Past">Past</option>
                    </select>

                    <button
                        onClick={createEvent}
                        disabled={loading}
                        className="w-full bg-cyan-500 hover:bg-cyan-400 rounded-xl py-4 text-xl font-bold text-white"
                    >
                        {loading ? "Saving..." : "🚀 Save Event"}
                    </button>

                </div>

            </div>

        </div>

    );

}