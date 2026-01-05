export const dynamic = 'force-dynamic';

import { headers } from 'next/headers';

type Character = {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CharacterPage({ params }: Props) {
  const p = await params;
  const id = p.id;

  const h = headers();
  const host = h.get('host');
  const protocol =
    process.env.NODE_ENV === 'development' ? 'http' : 'https';

  const res = await fetch(
    `${protocol}://${host}/api/characters/${id}`,
    { cache: 'no-store' }
  );

  const character: Character = await res.json();

  return (
    <main style={{ padding: 20 }}>
      <h1>{character.name}</h1>

      <img
        src={character.image}
        alt={character.name}
        style={{ width: 300, borderRadius: 12 }}
      />

      <ul>
        <li>Status: {character.status}</li>
        <li>Species: {character.species}</li>
        <li>Gender: {character.gender}</li>
      </ul>

      <a href="/characters">← Back to characters</a>
    </main>
  );
}
