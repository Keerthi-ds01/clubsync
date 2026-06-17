
"use client";

import Sidebar from "@/components/Sidebar";
import TaskCard from "@/components/TaskCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



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



export default function Dashboard() {

  
  
  const router = useRouter();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [members, setMembers] = useState<any[]>([]);
  const [activities, setActivities] = useState<any[]>([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("All");

  useEffect(() => {
    async function loadData() {
      const taskRes = await fetch("/api/tasks");
      const taskData = await taskRes.json();
      setTasks(taskData);

      const eventRes = await fetch("/api/events");
      const eventData = await eventRes.json();
      setEvents(eventData);

      const memberRes = await fetch("/api/members");
      const memberData = await memberRes.json();
      setMembers(memberData);

      const activityRes = await fetch("/api/activity");
      const activityData = await activityRes.json();
      setActivities(activityData);
    }

    loadData();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesEvent =
      selectedEvent === "All" || task.event === selectedEvent;

    return matchesSearch && matchesEvent;
  });

  const completed = tasks.filter(
    (task) => task.status.toLowerCase() === "completed"
  ).length;

  const pending = tasks.length - completed;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">
      <Sidebar />

      <div className="ml-64 p-8">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-5xl font-bold text-white">
              Dashboard 👋
            </h1>

            <p className="text-gray-400 mt-2">
              Organize events, members and tasks effortlessly.
            </p>
          </div>

          <button
            onClick={() => router.push("/create-task")}
            className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-2xl text-white font-bold"
          >
            ➕ New Task
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6">
            <p className="text-gray-300">📋 Total Tasks</p>
            <h1 className="text-5xl text-cyan-400 font-bold mt-3">
              {tasks.length}
            </h1>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6">
            <p className="text-gray-300">✅ Completed</p>
            <h1 className="text-5xl text-green-400 font-bold mt-3">
              {completed}
            </h1>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6">
            <p className="text-gray-300">⏳ Pending</p>
            <h1 className="text-5xl text-yellow-400 font-bold mt-3">
              {pending}
            </h1>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6">
            <p className="text-gray-300">📅 Events</p>
            <h1 className="text-5xl text-purple-400 font-bold mt-3">
              {events.length}
            </h1>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6">
            <p className="text-gray-300">👥 Members</p>
            <h1 className="text-5xl text-orange-400 font-bold mt-3">
              {members.length}
            </h1>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6">
            <p className="text-gray-300">⚡ Activities</p>
            <h1 className="text-5xl text-pink-400 font-bold mt-3">
              {activities.length}
            </h1>
          </div>

        </div>

        <div className="mt-8 bg-white/10 backdrop-blur-xl rounded-3xl p-6">

          <h2 className="text-2xl text-white font-bold mb-5">
            ⚡ Quick Actions
          </h2>

          <div className="flex flex-wrap gap-4">

            <button
              onClick={() => router.push("/create-task")}
              className="bg-cyan-500 px-5 py-3 rounded-xl text-white"
            >
              ➕ Create Task
            </button>

            <button
              onClick={() => router.push("/create-event")}
              className="bg-green-500 px-5 py-3 rounded-xl text-white"
            >
              📅 Create Event
            </button>

            <button
              onClick={() => router.push("/create-member")}
              className="bg-orange-500 px-5 py-3 rounded-xl text-white"
            >
              👥 Add Member
            </button>

            <button
              onClick={() => router.push("/board")}
              className="bg-purple-500 px-5 py-3 rounded-xl text-white"
            >
              📋 Kanban
            </button>

          </div>

        </div>

        <div className="mt-8 bg-white/10 backdrop-blur-xl rounded-3xl p-6">

          <h2 className="text-2xl text-white font-bold mb-5">
            ⚡ Recent Activity
          </h2>

          <div className="space-y-3">

            {activities.slice(0, 5).map((activity: any) => (

              <div
                key={activity._id}
                className="bg-white/5 rounded-xl p-4 flex justify-between"
              >
                <span className="text-white">
                  {activity.user}
                </span>

                <span className="text-cyan-300">
                  {activity.action}
                </span>

                <span className="text-gray-400">
                  {activity.taskTitle}
                </span>
              </div>

            ))}

          </div>

        </div>

        <div className="flex flex-col lg:flex-row gap-5 mt-8">

          <input
            type="text"
            placeholder="🔍 Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-white/10 rounded-2xl p-4 text-white"
          />

          <select
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            className="bg-white/10 rounded-2xl p-4 text-white"
          >
            <option value="All">All Events</option>

            {events.map((event) => (
              <option
                key={event._id}
                value={event.title}
                className="bg-slate-900 text-white"
              >
                {event.title}
              </option>
            ))}

          </select>

        </div>

        <div className="mt-10">

          <div className="flex justify-between mb-5">

            <h2 className="text-3xl font-bold text-white">
              📋 Tasks
            </h2>

            <span className="text-gray-400">
              {filteredTasks.length} Results
            </span>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {filteredTasks.length === 0 ? (

              <div className="col-span-full bg-white/10 rounded-3xl p-10 text-center text-gray-300">
                No Tasks Found
              </div>

            ) : (

              filteredTasks.map((task) => (

                <TaskCard
                  key={task._id}
                  id={task._id}
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                  status={task.status}
                  event={task.event}
                  assignedTo={task.assignedTo}
                  dueDate={task.dueDate}
                />

              ))

            )}

          </div>

        </div>

      </div>
    </div>
  );
}
