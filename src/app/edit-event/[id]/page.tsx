"use client";

import Sidebar from "@/components/Sidebar";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function EditEventPage() {

    const router = useRouter();
    const params = useParams();

const id = Array.isArray(params?.id)
  ? params.id[0]
  : params?.id ?? "";

    const [title, setTitle] = useState("");
    const [venue, setVenue] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [participants, setParticipants] = useState(0);
    const [status, setStatus] = useState("Upcoming");

    useEffect(() => {

        async function loadEvent() {

            const res = await fetch("/api/events");

            const data = await res.json();

            const event = data.find((e: any) => e._id === id);

            if (!event) return;

            setTitle(event.title);
            setVenue(event.venue);
            setDate(event.date.substring(0, 10));
            setTime(event.time);
            setParticipants(event.participants);
            setStatus(event.status);
        }

        loadEvent();

    }, [id]);

    async function updateEvent() {

        await fetch(`/api/events/${id}`, {

            method: "PUT",

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

        router.push("/events");

    }

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">

            <Sidebar />

            <div className="ml-64 p-10">

                <h1 className="text-5xl font-bold text-white mb-8">
                    ✏️ Edit Event
                </h1>

                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 max-w-3xl">

                    <input
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        placeholder="Title"
                        className="w-full p-4 rounded-xl bg-slate-800 text-white mb-5"
                    />

                    <input
                        value={venue}
                        onChange={(e)=>setVenue(e.target.value)}
                        placeholder="Venue"
                        className="w-full p-4 rounded-xl bg-slate-800 text-white mb-5"
                    />

                    <input
                        type="date"
                        value={date}
                        onChange={(e)=>setDate(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-800 text-white mb-5"
                    />

                    <input
                        type="time"
                        value={time}
                        onChange={(e)=>setTime(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-800 text-white mb-5"
                    />

                    <input
                        type="number"
                        value={participants}
                        onChange={(e)=>setParticipants(Number(e.target.value))}
                        className="w-full p-4 rounded-xl bg-slate-800 text-white mb-5"
                    />

                    <select
                        value={status}
                        onChange={(e)=>setStatus(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-800 text-white mb-8"
                    >
                        <option>Upcoming</option>
                        <option>Past</option>
                    </select>

                    <button
                        onClick={updateEvent}
                        className="w-full bg-cyan-500 hover:bg-cyan-400 rounded-xl py-4 text-white text-xl font-bold"
                    >
                        💾 Save Changes
                    </button>

                </div>

            </div>

        </div>

    );

}