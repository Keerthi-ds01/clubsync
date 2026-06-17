import connectDB from "@/lib/mongodb";
import Activity from "@/models/Activity";

export async function GET() {
  await connectDB();

  const activities = await Activity.find()
    .sort({ createdAt: -1 })
    .limit(20);

  return Response.json(activities);
}