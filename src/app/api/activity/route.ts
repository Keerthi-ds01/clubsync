import connectDB from "@/lib/mongodb";
import Activity from "@/models/Activity";

export async function GET() {

    try {

        await connectDB();

        const activities = await Activity.find().sort({
            createdAt: -1,
        });

        return Response.json(activities);

    } catch (error) {

        console.log(error);

        return Response.json(
            { message: "Failed to fetch activity" },
            { status: 500 }
        );

    }

}