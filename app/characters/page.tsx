export const dynamic = 'force-dynamic';

type Character = {
  id: number;
  name: string;
  image: string;
};

function getBaseUrl() {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
}

export default async function CharactersPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = searchParams.page ?? '1';
  const baseUrl = getBaseUrl();

  const res = await fetch(
    `${baseUrl}/api/characters?page=${page}`,
    { cache: 'no-store' }
  );

  const data = await res.json();

  return (
    <main style={{ padding: 20 }}>
      <h1>Characters (Page {page})</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {data.results.map((c: Character) => (
          <a
            key={c.id}
            href={`/characters/${c.id}`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <div style={{ width: 150 }}>
              <img src={c.image} alt={c.name} width={150} />
              <p>{c.name}</p>
            </div>
          </a>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        {Number(page) > 1 && (
          <a href={`/characters?page=${Number(page) - 1}`}>Previous</a>
        )}
        {' | '}
        {Number(page) < data.info.pages && (
          <a href={`/characters?page=${Number(page) + 1}`}>Next</a>
        )}
      </div>
    </main>
  );
}
