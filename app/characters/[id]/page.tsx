export const dynamic = 'force-dynamic'; // ensures fresh server fetch

type Character = {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
};

type Props = {
  params: Promise<{ id: string }>; // params is now a Promise in Next.js 14
};

export default async function CharacterPage({ params }: Props) {
  // unwrap the params promise
  const p = await params;
  const id = p.id;

  // fetch character data from your backend API
  const res = await fetch(`/api/characters/${id}`, { cache: 'no-store' })


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
