
type TaskCardProps = {
    id: string;
    title: string;
    description: string;
    priority: string;
    status: string;
    event: string;
    assignedTo: string;
    dueDate: string;
};

const TaskCard = ({
    id,
    title,
    description,
    priority,
    status,
    event,
    assignedTo,
    dueDate,
}: TaskCardProps) => {

    const priorityColor =
        priority.toLowerCase() === "high"
            ? "bg-red-500"
            : priority.toLowerCase() === "medium"
            ? "bg-yellow-500"
            : "bg-green-500";

    const statusColor =
        status.toLowerCase() === "completed"
            ? "bg-green-500"
            : status.toLowerCase() === "in progress"
            ? "bg-cyan-500"
            : "bg-orange-500";

    const handleDelete = async () => {
        const confirmed = confirm("Delete this task?");

        if (!confirmed) return;

        await fetch(`/api/tasks/${id}`, {
            method: "DELETE",
        });

        window.location.reload();
    };

    return (

        <div className="
        w-80
        rounded-3xl
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        shadow-2xl
        hover:scale-105
        hover:border-cyan-400
        hover:shadow-cyan-500/30
        transition-all
        duration-300
        overflow-hidden
        ">

            {/* Header */}

            <div className="flex justify-between items-center p-5 border-b border-white/10">

                <h2 className="text-2xl font-bold text-white">
                    {title}
                </h2>

                <span
                    className={`${priorityColor} text-xs font-bold px-3 py-1 rounded-full text-white`}
                >
                    {priority.toUpperCase()}
                </span>

            </div>

            {/* Body */}

            <div className="p-5 flex flex-col gap-4">

                <div className="bg-white/10 rounded-2xl p-4 text-gray-200 leading-relaxed">
                    {description}
                </div>

                <div className="flex justify-between">

                    <span
                        className={`${statusColor} px-3 py-1 rounded-full text-sm font-semibold text-white`}
                    >
                        {status}
                    </span>

                    <span className="bg-cyan-500 px-3 py-1 rounded-full text-sm text-white">
                        {event}
                    </span>

                </div>

                <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">

                    <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center">
                        👤
                    </div>

                    <div>

                        <p className="text-white font-semibold">
                            {assignedTo || "Unassigned"}
                        </p>

                        <p className="text-gray-400 text-sm">
                            Assigned Member
                        </p>

                    </div>

                </div>

                <div className="bg-white/10 rounded-xl p-3 text-gray-200">

                    📅 Due Date

                    <div className="mt-1 font-semibold text-white">

                        {dueDate
                            ? new Date(dueDate).toLocaleDateString("en-IN")
                            : "Not Set"}

                    </div>

                </div>

                {/* Buttons */}

                <div className="flex gap-3 mt-2">

                    <button
                        onClick={() =>
                            (window.location.href = `/edit-task/${id}`)
                        }
                        className="
                        flex-1
                        py-3
                        rounded-xl
                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-600
                        font-semibold
                        text-white
                        hover:scale-105
                        transition-all
                        "
                    >
                        ✏️ Edit
                    </button>

                    <button
                        onClick={handleDelete}
                        className="
                        flex-1
                        py-3
                        rounded-xl
                        bg-gradient-to-r
                        from-red-500
                        to-pink-600
                        font-semibold
                        text-white
                        hover:scale-105
                        transition-all
                        "
                    >
                        🗑 Delete
                    </button>

                </div>

            </div>

        </div>

    );
};

export default TaskCard;
