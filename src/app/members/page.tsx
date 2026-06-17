"use client";

import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import Link from "next/link";

type Member = {
    _id: string;
    name: string;
    email: string;
    role: string;
    status: string;
    avatar: string;
};

export default function MembersPage() {

    const [members, setMembers] = useState<Member[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    async function fetchMembers() {

        const res = await fetch("/api/members");
        const data = await res.json();

        setMembers(data);
    }

    useEffect(() => {

        fetchMembers();

    }, []);

    async function deleteMember(id: string) {

        if (!confirm("Delete this member?")) return;

        await fetch(`/api/members/${id}`, {
            method: "DELETE",
        });

        fetchMembers();
    }

    const filteredMembers = members.filter((member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">

            <Sidebar />

            <div className="ml-64 p-8">

                <div className="flex justify-between items-center">

                    <div>

                        <h1 className="text-5xl font-bold text-white">
                            👥 Members
                        </h1>

                        <p className="text-gray-400 mt-2">
                            Manage your club members.
                        </p>

                    </div>

                    <Link href="/create-member">

                        <button className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-2xl text-white font-bold">

                            ➕ Add Member

                        </button>

                    </Link>

                </div>

                <input
                    type="text"
                    placeholder="🔍 Search Member..."
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    className="w-full mt-8 p-4 rounded-2xl bg-white/10 border border-white/20 text-white"
                />

                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">

                    {filteredMembers.map((member)=>(

                        <div
                            key={member._id}
                            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl"
                        >

                            <div className="text-6xl">

                                {member.avatar}

                            </div>

                            <h2 className="text-2xl font-bold text-white mt-4">

                                {member.name}

                            </h2>

                            <p className="text-gray-300 mt-2">

                                📧 {member.email}

                            </p>

                            <p className="text-cyan-400 font-semibold mt-2">

                                🎭 {member.role}

                            </p>

                            <p className="text-green-400 mt-2">

                                🟢 {member.status}

                            </p>

                            <button
                                onClick={()=>deleteMember(member._id)}
                                className="w-full mt-6 py-2 rounded-xl bg-red-500 hover:bg-red-400 text-white font-semibold"
                            >

                                🗑 Delete

                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );

}