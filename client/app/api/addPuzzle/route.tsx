import prisma from "@/prisma";

export async function POST(req: Request) {
  //   console.log(req);
  const { description, title, img, endDate, ownerAddress, price } =
    await req.json();
  if (!description || !title || !img || !endDate || !ownerAddress || !price) {
    return Response.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }

  try {
    const data = await prisma.puzzless.create({
      data: {
        description,
        title,
        ownerAddress,
        endDate,
        img,
        price,
      },
    });
    return Response.json(
      { success: true, message: "Puzzle created", data: data },
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
