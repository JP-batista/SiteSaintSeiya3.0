// src/app/layout.tsx

import './globals.css'

export const metadata = {
  title: 'Cavaleiros do Zodíaco',
  description: 'Explorando o universo dos Cavaleiros de Athena',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-900 text-white">
        <header className="bg-black py-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">Cavaleiros do Zodíaco</h1>
            <nav>
              <a href="/" className="px-4">Início</a>
              <a href="/encyclopedia" className="px-4">Enciclopédia</a>
              <a href="/timeline" className="px-4">Linha do Tempo</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-black text-center py-4">
          <p>© 2024 Cavaleiros do Zodíaco - Todos os direitos reservados</p>
        </footer>
      </body>
    </html>
  )
}
