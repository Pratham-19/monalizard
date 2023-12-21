import prisma from "@/prisma";

export async function POST(req: Request) {
  //   console.log(req);
  const { bannerImg, address } = await req.json();
  if (!bannerImg || !address) {
    return Response.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }

  try {
    const data = await prisma.promoter.create({
      data: {
        bannerImg: bannerImg,
        walletAddress: address,
      },
    });
    return Response.json(
      { success: true, message: "Promoter created", },
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
