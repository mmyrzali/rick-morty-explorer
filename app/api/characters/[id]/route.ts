export const dynamic = 'force-dynamic'; // ensures server always fetches fresh data

import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> } // params is a Promise in App Router
) {
  try {
    // unwrap the Promise to get the actual id
    const p = await params;
    const id = p.id;

    // fetch character data from external API
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
      { cache: 'no-store' } // disable caching
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch character' },
      { status: 500 }
    );
  }
}
