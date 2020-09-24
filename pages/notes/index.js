import Link from 'next/link';

const notes = [
  {
    name: 'my-note',
  },
  {
    name: 'my-note-2',
  },
  {
    name: 'another-note',
  },
];

export default function Notes() {
  return (
    <div>
      <h1>Notes page</h1>
      {notes.map(({ name }) => {
        return (
          <div>
            <Link as={`/notes/${name}`} href="/notes/[note]">
              <a>{name}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
