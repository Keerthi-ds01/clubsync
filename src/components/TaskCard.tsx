
type TaskCardProps = {
    id:string;
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
    const bgClass =
        priority.toLowerCase() === "high"
            ? "bg-red-400"
            : priority.toLowerCase() === "medium"
            ? "bg-yellow-400"
            : "bg-green-400";
    
    const handleDelete = async () => {
        const confirmed = confirm("Delete this task?");

        if (!confirmed) return;

        await fetch(`/api/tasks/${id}`, {
            method: "DELETE",
        });

        window.location.reload();
    };


    return (
        <div
            className={`flex h-auto w-72 self-start flex-col rounded-2xl border-2 border-black overflow-hidden shrink-0 ${bgClass}`}
        >
            <div className="bg-black p-3 text-xl font-bold text-teal-200">
                <h2>{title}</h2>
            </div>

            <div className="p-3 flex flex-col gap-2">
                <div className="rounded-xl border border-black bg-teal-200 p-3 text-sm">
                    {description}
                </div>

                <div className="bg-white rounded-lg p-2 text-sm">
                    <strong>Status:</strong> {status}
                </div>

                <div className="bg-white rounded-lg p-2 text-sm">
                    <strong>Event:</strong> {event}
                </div>

                <div className="bg-white rounded-lg p-2 text-sm">
                    <strong>Assigned To:</strong> {assignedTo}
                </div>

                <div className="bg-white rounded-lg p-2 text-sm">
                    <strong>Due Date:</strong>{" "}
                    {dueDate ? new Date(dueDate).toLocaleDateString() : "Not Set"}
                    
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white p-2 rounded-lg font-bold"
                    >
                    Delete Task
                    </button>

                </div>
            </div>
        </div>
    );
};

export default TaskCard;
