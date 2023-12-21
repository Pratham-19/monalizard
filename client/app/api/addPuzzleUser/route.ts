import prisma from "@/prisma";

export async function POST(req: Request) {
  const { id, address } = await req.json();
  if (!id || !address) {
    return Response.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }

  try {
    const data = await prisma.user.update({
      where: { walletAddress: address },

      data: {
        puzzles: {
          push: id,
        },
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
