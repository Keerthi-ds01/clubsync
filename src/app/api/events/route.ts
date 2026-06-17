import Activity from "@/models/Activity";
import connectDB from "@/lib/mongodb";
import Event from "@/models/Event";

export async function GET() {
    try {
        await connectDB();

        const events = await Event.find().sort({
            createdAt: -1,
        });

        return Response.json(events);

    } catch (error) {

        console.log(error);

        return Response.json(
            { message: "Failed to fetch events" },
            { status: 500 }
        );

    }
}

export async function POST(request: Request) {

    try {

        await connectDB();

        const body = await request.json();

        const event = await Event.create({
            title: body.title,
            venue: body.venue,
            date: body.date,
            time: body.time,
            participants: body.participants,
            status: body.status,
        });

        await Activity.create({
            user: "Admin",
            action: "Created Event",
            taskTitle: body.title,
        });

        return Response.json(event, {
            status: 201,
        });

    } catch (error) {

        console.log(error);

        return Response.json(
            { message: "Failed to create event" },
            { status: 500 }
        );

    }

}