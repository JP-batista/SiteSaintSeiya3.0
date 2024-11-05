const HomePage: React.FC = () => {
  return (
    <section className="home-section">
      <h2 className="home-title">Bem-vindo ao Universo dos Cavaleiros do Zodíaco</h2>
      <p className="home-description">
        Explore a história, personagens e muito mais sobre os lendários Cavaleiros de Atena.
      </p>
      <a href="/characters" className="botao-padrao">Conheça os Personagens</a>
    </section>
  );
};

export default HomePage;
