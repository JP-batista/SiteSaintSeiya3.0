// src/app/page.tsx

export default function HomePage() {
  return (
    <section className="container mx-auto p-8 text-center">
      <h2 className="text-4xl font-bold mb-4">Bem-vindo ao Universo dos Cavaleiros do Zodíaco</h2>
      <p className="text-lg mb-8">
        Explore a história dos cavaleiros, sua jornada e as lendas que moldaram o destino da Terra.
      </p>
      <img src="/images/saints-group.jpg" alt="Cavaleiros de Athena" className="mx-auto rounded-lg shadow-lg"/>
    </section>
  )
}
