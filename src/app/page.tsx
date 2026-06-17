
"use client";

import { useRouter } from "next/navigation";

export default function Home() {

    const router = useRouter();

    return (

        <main className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white">

            {/* Hero */}

            <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">

                {/* Glow Effects */}

                <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full top-0 left-0"></div>

                <div className="absolute w-96 h-96 bg-purple-500/20 blur-[150px] rounded-full bottom-0 right-0"></div>

                {/* Logo */}

                <h1 className="text-8xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                    ClubSync

                </h1>

                <p className="mt-6 text-3xl text-gray-300">

                    Student Club Collaboration Platform

                </p>

                <p className="mt-6 text-lg max-w-3xl text-gray-400 leading-8">

                    Organize events, assign tasks, collaborate with members,
                    track activities and manage your entire student club
                    effortlessly from one beautiful workspace.

                </p>

                {/* Buttons */}

                <div className="flex gap-5 mt-10">

                    <button

                        onClick={() => router.push("/dashboard")}

                        className="
                        px-8
                        py-4
                        rounded-2xl
                        bg-cyan-500
                        hover:bg-cyan-400
                        text-xl
                        font-bold
                        shadow-2xl
                        hover:scale-105
                        transition-all
                        "

                    >

                        🚀 Get Started

                    </button>

                    <button

                        onClick={() => window.scrollTo({
                            top: window.innerHeight,
                            behavior: "smooth",
                        })}

                        className="
                        px-8
                        py-4
                        rounded-2xl
                        border
                        border-white/20
                        bg-white/10
                        backdrop-blur-xl
                        hover:bg-white/20
                        transition-all
                        "

                    >

                        Learn More

                    </button>

                </div>

                {/* Stats */}

                <div className="grid md:grid-cols-4 gap-8 mt-20">

                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">

                        <h2 className="text-5xl font-bold text-cyan-400">
                            500+
                        </h2>

                        <p className="text-gray-300 mt-2">
                            Members
                        </p>

                    </div>

                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">

                        <h2 className="text-5xl font-bold text-green-400">
                            120+
                        </h2>

                        <p className="text-gray-300 mt-2">
                            Events
                        </p>

                    </div>

                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">

                        <h2 className="text-5xl font-bold text-yellow-400">
                            900+
                        </h2>

                        <p className="text-gray-300 mt-2">
                            Tasks
                        </p>

                    </div>

                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">

                        <h2 className="text-5xl font-bold text-purple-400">
                            24/7
                        </h2>

                        <p className="text-gray-300 mt-2">
                            Collaboration
                        </p>

                    </div>

                </div>

            </section>

            {/* Features */}

            <section className="px-10 pb-24">

                <h2 className="text-5xl font-bold text-center mb-14">

                    Everything your club needs

                </h2>

                <div className="grid lg:grid-cols-3 gap-8">

                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:scale-105 transition">

                        <div className="text-5xl">
                            📋
                        </div>

                        <h3 className="text-3xl font-bold mt-5">

                            Task Management

                        </h3>

                        <p className="text-gray-400 mt-4">

                            Assign, update and monitor tasks for every member.

                        </p>

                    </div>

                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:scale-105 transition">

                        <div className="text-5xl">
                            📅
                        </div>

                        <h3 className="text-3xl font-bold mt-5">

                            Event Planning

                        </h3>

                        <p className="text-gray-400 mt-4">

                            Manage workshops, recruitments and hackathons.

                        </p>

                    </div>

                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:scale-105 transition">

                        <div className="text-5xl">
                            👥
                        </div>

                        <h3 className="text-3xl font-bold mt-5">

                            Team Collaboration

                        </h3>

                        <p className="text-gray-400 mt-4">

                            Keep every club member connected in one workspace.

                        </p>

                    </div>

                </div>

            </section>

            {/* Footer */}

            <footer className="text-center text-gray-500 pb-10">

                Built with ❤️ using Next.js + Tailwind CSS

            </footer>

        </main>

    );

}
