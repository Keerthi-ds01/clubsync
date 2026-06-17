import connectDB from "@/lib/mongodb";
import Member from "@/models/Member";

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {

    try {

        await connectDB();

        const { id } = await params;

        await Member.findByIdAndDelete(id);

        return Response.json({
            message: "Member deleted",
        });

    } catch (error) {

        console.log(error);

        return Response.json(
            { message: "Failed to delete member" },
            { status: 500 }
        );

    }

}