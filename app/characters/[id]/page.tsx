export const dynamic = 'force-dynamic';

type Character = {
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
};

export default async function CharacterPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`,
    { cache: 'no-store' }
  );

  const c: Character = await res.json();

  return (
    <main style={{ padding: 20 }}>
      <h1>{c.name}</h1>
      <img src={c.image} alt={c.name} width={300} />
      <ul>
        <li>Status: {c.status}</li>
        <li>Species: {c.species}</li>
        <li>Gender: {c.gender}</li>
      </ul>
      <a href="/characters">← Back</a>
    </main>
  );
}
