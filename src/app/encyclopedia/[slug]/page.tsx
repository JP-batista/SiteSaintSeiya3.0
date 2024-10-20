import { useRouter } from 'next/router'
import cavaleiros from '../../../data/cavaleiros.json'

export default function CavaleiroPage() {
  const router = useRouter()
  const { slug } = router.query

  const cavaleiro = cavaleiros.find((c) => c.slug === slug)

  if (!cavaleiro) {
    return <p>Cavaleiro não encontrado.</p>
  }

  return (
    <section className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">{cavaleiro.name}</h2>
      <p>{cavaleiro.description}</p>
    </section>
  )
}
