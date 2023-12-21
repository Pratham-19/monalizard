import prisma from "@/prisma";

export async function POST(req: Request) {
  //   console.log(req);
  const { puzzleId, title, img } = await req.json();
  if (!puzzleId || !title || !img ) {
    return Response.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }

  try {
    const data = await prisma.piece.create({
      data: {
        puzzleId,
        title,
        img,
      },
    });
    return Response.json(
      { success: true, message: "Piece created",data: data },
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
