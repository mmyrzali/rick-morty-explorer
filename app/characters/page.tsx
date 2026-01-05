export const dynamic = 'force-dynamic';

type Character = {
  id: number;
  name: string;
  image: string;
};

export default async function CharactersPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = searchParams.page ?? '1';

  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`,
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
