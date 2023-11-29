import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";


export async function POST(request) {
  const { secret } = await request.json();
  const tag = request.headers.get('tag');

  if (secret !== process.env.REVALIDATION_TOKEN) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  if (!tag) {
    return NextResponse.json(
      { message: "Missing tag header" },
      { status: 400 }
    )
  }

  revalidateTag(tag);

  return NextResponse.json(
    { revalidated: true, now: Date.now() },
    { status: 200 }
  );
}
