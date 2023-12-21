import prisma from "@/prisma";

export async function POST(req: Request) {
  const { address } = await req.json();
  if (!address) {
    return Response.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }

  try {
    const data = await prisma.user.create({
      data: {
        walletAddress: address,
      },
    });
    return Response.json(
      { success: true, message: "User created" },
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
