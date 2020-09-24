import { useRouter } from 'next/router'

export default function Note() {
  const router = useRouter()
  return <div>This is name note: {router.query.note}</div>;
}
