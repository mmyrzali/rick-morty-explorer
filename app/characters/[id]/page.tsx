export const dynamic = 'force-dynamic';

type Character = {
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
};

function getBaseUrl() {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
}

export default async function CharacterPage({
  params,
}: {
  params: { id: string };
}) {
  const baseUrl = getBaseUrl();

  const res = await fetch(
    `${baseUrl}/api/characters/${params.id}`,
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
