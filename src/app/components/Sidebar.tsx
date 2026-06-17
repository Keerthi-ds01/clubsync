"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white/10 backdrop-blur-lg border-r border-white/20 p-6">

      <h1 className="text-3xl font-bold mb-10 text-cyan-400">
        ClubSync
      </h1>

      <nav className="flex flex-col gap-4">

        <Link href="/dashboard" className="hover:text-cyan-400">
          🏠 Home
        </Link>

        <Link href="/kanban" className="hover:text-cyan-400">
          📋 Kanban Board
        </Link>

        <Link href="/activity" className="hover:text-cyan-400">
          📢 Recent Activity
        </Link>

        <Link href="/events" className="hover:text-cyan-400">
          📅 Events
        </Link>

        <Link href="/members" className="hover:text-cyan-400">
          👥 Members
        </Link>

        <Link href="/analytics" className="hover:text-cyan-400">
          📈 Analytics
        </Link>

        <Link href="/leaderboard" className="hover:text-cyan-400">
          🏆 Leaderboard
        </Link>

        <Link href="/settings" className="hover:text-cyan-400">
          ⚙ Settings
        </Link>

      </nav>
    </aside>
  );
}