
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-xl bg-slate-900/40 border-b border-cyan-400/20 shadow-2xl">

            {/* Logo */}
            <Link href="/">
                <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 cursor-pointer">
                    ClubSync
                </h1>
            </Link>

            {/* Navigation Buttons */}
            <div className="flex gap-4">

                <Link href="/dashboard">
                    <button className="px-5 py-2 rounded-xl bg-cyan-500/80 hover:bg-cyan-400 text-white font-semibold shadow-lg hover:shadow-cyan-400/40 hover:scale-105 transition-all duration-300">
                        Dashboard
                    </button>
                </Link>

                <Link href="/board">
                    <button className="px-5 py-2 rounded-xl bg-purple-500/80 hover:bg-purple-400 text-white font-semibold shadow-lg hover:shadow-purple-400/40 hover:scale-105 transition-all duration-300">
                        Kanban Board
                    </button>
                </Link>

                <Link href="/create-task">
                    <button className="px-5 py-2 rounded-xl bg-emerald-500/80 hover:bg-emerald-400 text-white font-semibold shadow-lg hover:shadow-emerald-400/40 hover:scale-105 transition-all duration-300">
                        Create Task
                    </button>
                </Link>

            </div>

        </nav>
    );
}
