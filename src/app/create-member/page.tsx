"use client";

import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateMemberPage() {

    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("Active");
    const [avatar, setAvatar] = useState("👤");

    async function createMember() {

        await fetch("/api/members", {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                name,
                email,
                role,
                status,
                avatar,
            }),

        });

        router.push("/members");
    }

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">

            <Sidebar />

            <div className="ml-64 p-10">

                <h1 className="text-5xl font-bold text-white mb-8">
                    👥 Add Member
                </h1>

                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 max-w-3xl">

                    <input
                        placeholder="Member Name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-800 text-white mb-5"
                    />

                    <input
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-800 text-white mb-5"
                    />

                    <input
                        placeholder="Role (President, Designer, Developer...)"
                        value={role}
                        onChange={(e)=>setRole(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-800 text-white mb-5"
                    />

                    
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-600 mb-8"
                    >
                    <option value="Active" className="text-black">
                        Active
                    </option>

                    <option value="Inactive" className="text-black">
                        Busy
                    </option>

                    <option value="Offline" className="text-black">
                        Offline
                    </option>

                    </select>

                    <button
                        onClick={createMember}
                        className="w-full bg-cyan-500 hover:bg-cyan-400 rounded-xl py-4 text-white text-xl font-bold"
                    >
                        🚀 Add Member
                    </button>

                </div>

            </div>

        </div>

    );

}