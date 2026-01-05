export const dynamic = 'force-dynamic';

type Character = {
  id: number;
  name: string;
  image: string;
};

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function CharactersPage({ searchParams }: Props) {
  const params = await searchParams;
  const page = params.page ?? '1';

  const res = await fetch(`/api/characters?page=${page}`, { cache: 'no-store' });

  const data = await res.json();

  return (
    <main style={{ padding: 20 }}>
      <h1>Characters (Page {page})</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
         
        {data.results.map((character: Character) => (
  <a
    key={character.id}
    href={`/characters/${character.id}`}
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <div style={{ width: 150, cursor: 'pointer' }}>
      <img
        src={character.image}
        alt={character.name}
        style={{ width: '100%', borderRadius: 8 }}
      />
      <p>{character.name}</p>
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
