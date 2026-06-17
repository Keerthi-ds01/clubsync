
"use client";

import Sidebar from "@/components/Sidebar";
import { useState, useEffect } from "react";
import Link from "next/link";

type Event = {
  _id: string;
  title: string;
  venue: string;
  date: string;
  time: string;
  participants: number;
  status: "Upcoming" | "Past";
};

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] =
    useState<"Upcoming" | "Past">("Upcoming");

  const [events, setEvents] = useState<Event[]>([]);

  async function fetchEvents() {
    const res = await fetch("/api/events");
    const data = await res.json();
    setEvents(data);
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  async function deleteEvent(id: string) {
    if (!confirm("Delete this event?")) return;

    await fetch(`/api/events/${id}`, {
      method: "DELETE",
    });

    fetchEvents();
  }

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesTab = event.status === selectedTab;

    return matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">

      <Sidebar />

      <div className="ml-64 p-8">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-5xl font-extrabold text-white">
              📅 Events
            </h1>

            <p className="text-gray-400 mt-2 text-lg">
              Organize and manage your club events.
            </p>

          </div>

          <Link href="/create-event">

            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition px-7 py-3 rounded-2xl text-white font-bold shadow-xl">
              ➕ Add Event
            </button>

          </Link>

        </div>

        <div className="flex gap-4 mt-8">

          <button
            onClick={() => setSelectedTab("Upcoming")}
            className={`px-6 py-3 rounded-xl font-semibold transition ${
              selectedTab === "Upcoming"
                ? "bg-cyan-500 text-white"
                : "bg-white/10 text-gray-300"
            }`}
          >
            Upcoming
          </button>

          <button
            onClick={() => setSelectedTab("Past")}
            className={`px-6 py-3 rounded-xl font-semibold transition ${
              selectedTab === "Past"
                ? "bg-cyan-500 text-white"
                : "bg-white/10 text-gray-300"
            }`}
          >
            Past
          </button>

        </div>

        <input
          type="text"
          placeholder="🔍 Search Events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mt-8 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white outline-none focus:border-cyan-400 transition"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">

          {filteredEvents.map((event) => (

            <div
              key={event._id}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-7 shadow-2xl hover:scale-105 hover:border-cyan-400 transition-all duration-300"
            >

              <div className="flex justify-between items-center">

                <h2 className="text-3xl font-bold text-white">
                  🎯 {event.title}
                </h2>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-bold ${
                    event.status === "Upcoming"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {event.status}
                </span>

              </div>

              <div className="mt-6 space-y-3">

                <p className="text-gray-300 text-lg">
                  📍 {event.venue}
                </p>

                <p className="text-gray-300 text-lg">
                  📅{" "}
                  {new Date(event.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <p className="text-gray-300 text-lg">
                  🕒 {event.time}
                </p>

                <div className="inline-block bg-cyan-500/20 px-4 py-2 rounded-full">

                  <span className="text-cyan-300 font-bold">
                    👥 {event.participants} Participants
                  </span>

                </div>

              </div>

              <div className="flex gap-3 mt-8">

                <Link
                  href={`/edit-event/${event._id}`}
                  className="flex-1"
                >

                  <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 transition text-white font-bold">
                    ✏️ Edit
                  </button>

                </Link>

                <button
                  onClick={() => deleteEvent(event._id)}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition text-white font-bold"
                >
                  🗑 Delete
                </button>

              </div>

            </div>

          ))}

        </div>

        {filteredEvents.length === 0 && (

          <div className="text-center text-gray-400 text-2xl mt-16">
            🚀 No events found
          </div>

        )}

      </div>

    </div>
  );
}
