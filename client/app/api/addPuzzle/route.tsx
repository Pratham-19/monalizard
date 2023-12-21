import prisma from "@/prisma";

export async function POST(req: Request) {
  //   console.log(req);
  const { description, title, img, endDate, ownerAddress } = await req.json();
  if (!description || !title || !img || !endDate || !ownerAddress) {
    return Response.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }

  try {
    const data = await prisma.puzzles.create({
      data: {
        description,
        title,
        ownerAddress,
        endDate,
        img,
      },
    });
    return Response.json(
      { success: true, message: "Puzzle created",data: data },
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
