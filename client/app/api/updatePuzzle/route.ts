import prisma from "@/prisma";

export async function POST(req: Request) {
  const { id, pieces } = await req.json();
  if (!id || !pieces) {
    return Response.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }

  try {
    const data = await prisma.puzzless.update({
      where: { id },

      data: {
        pieces,
      },
    });
    return Response.json(
      { success: true, message: "Puzzle updated", data: data },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return Response.json(
      { success: false, message: "Prisma err" },
      { status: 500 }
    );
  }
}
