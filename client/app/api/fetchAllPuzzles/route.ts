import prisma from "@/prisma";

export async function GET(req: Request) {
  try {
    const data = await prisma.puzzless.findMany();
    return Response.json({ success: true, data: data }, { status: 200 });
  } catch (err) {
    console.log(err);
    return Response.json(
      { success: false, message: "Prisma err" },
      { status: 500 }
    );
  }
}
