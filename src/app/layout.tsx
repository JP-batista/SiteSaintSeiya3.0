import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Cavaleiros do Zodíaco',
  description: 'Site dedicado aos Cavaleiros do Zodíaco',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        <main className="main-content container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
