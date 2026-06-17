import Activity from "@/models/Activity";
import connectDB from "@/lib/mongodb";
import Member from "@/models/Member";

export async function GET() {

    try {

        await connectDB();

        const members = await Member.find().sort({
            createdAt: -1,
        });

        

        return Response.json(members);

    } catch (error) {

        console.log(error);

        return Response.json(
            { message: "Failed to fetch members" },
            { status: 500 }
        );

    }

}

export async function POST(request: Request) {

    try {

        await connectDB();

        const body = await request.json();

        const member = await Member.create(body);

        await Activity.create({
            user: body.name,
            action: "Added Member",
            taskTitle: body.role,
        });

        return Response.json(member, {
            status: 201,
        });

    } catch (error) {

        console.log(error);

        return Response.json(
            { message: "Failed to create member" },
            { status: 500 }
        );

    }

}