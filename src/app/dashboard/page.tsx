
"use client";

import Navbar from "@/components/Navbar";
import TaskCard from "@/components/TaskCard";
import React, { useState, useEffect } from "react";

type Task = {
  _id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
  event: string;
  assignedTo: string;
  dueDate: string;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("All");

  async function fetchTasks() {
    const response = await fetch("/api/tasks");
    const data = await response.json();
    setTasks(data);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesEvent =
      selectedEvent === "All" ||
      task.event === selectedEvent;

    return matchesSearch && matchesEvent;
  });

  return (
    <>
      <Navbar />

      <div className="p-4 flex flex-col md:flex-row gap-4">

        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 rounded-xl border w-full md:w-96"
        />

        <select
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
          className="p-3 rounded-xl border"
        >
          <option value="All">All Events</option>
          <option value="General">General</option>
          <option value="Recruitment 2026">Recruitment 2026</option>
          <option value="Workshop">Workshop</option>
          <option value="Hackathon">Hackathon</option>
        </select>

      </div>

      <div className="flex flex-wrap items-start gap-4 m-3">
        {filteredTasks.map((task) => (
          <TaskCard
            id={task._id}
            key={task._id}
            title={task.title}
            description={task.description}
            priority={task.priority}
            status={task.status}
            event={task.event}
            assignedTo={task.assignedTo}
            dueDate={task.dueDate}
            
          />
        ))}
      </div>
    </>
  );
}
