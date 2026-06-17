import connectDB from "@/lib/mongodb";
import Event from "@/models/Event";

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    await connectDB();

    const body = await request.json();
    const { id } = await params;

    const event = await Event.findByIdAndUpdate(
        id,
        body,
        { new: true }
    );

    return Response.json(event);
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    await connectDB();

    const { id } = await params;

    await Event.findByIdAndDelete(id);

    return Response.json({
        message: "Deleted",
    });
}