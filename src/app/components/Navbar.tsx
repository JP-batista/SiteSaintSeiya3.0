"use client";
import './navbar.css'; // Importa o CSS específico para o Navbar
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo" aria-label="Logo Os Cavaleiros do Zodíaco">
          <img src="/spinners/zodiac-wheel/zodiac-wheel-spinner-white.gif" alt="Logo Os Cavaleiros do Zodíaco" />
          <strong>Os Cavaleiros do Zodíaco</strong>
        </Link>
        <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <Link href="/">Home</Link>
          <Link href="/characters">Personagens</Link>
          <Link href="/about">Sobre</Link>
          <Link href="/hipermito">Hipermito</Link>
          <Link href="/mangas">Mangas</Link>
          <div className="navbar-dropdown">
            <button aria-label="Explorar Mais">Explorar Mais</button>
            <div className="navbar-dropdown-menu">
              <Link href="/animes">Anime</Link>
              <Link href="/soundtrack">Trilha Sonora</Link>
              <Link href="/videos/battle-videos">Vídeos de Batalhas</Link>
              <Link href="/timeline">Linha do Tempo</Link>
              <Link href="/quiz">Quiz</Link>
              <Link href="/videos/lost-canvas">Lost Canvas</Link>
              <Link href="/galeria">Minha Galeria</Link>
              <Link href="/game">DLE Saint Seiya</Link>
              <Link href="/teste">Teste</Link>
            </div>
          </div>
        </nav>
        <Link href="/login" className="navbar-login">Login</Link>
      </div>
    </header>
  );
}
