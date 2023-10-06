import { useEffect, useState } from "react";
import "./favoritos.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(id) {
    let filterFilmes = filmes.filter((filme) => {
      return filme.id !== id;
    });
    setFilmes(filterFilmes);
    localStorage.setItem("@primeflix", JSON.stringify(filterFilmes));
    toast.success("Filme removido com sucesso!");
  }
  return (
    <div className="meus-filmes">
      <h1>Tela Favoritos</h1>
      {filmes.length === 0 && <span>Você não possui nenhum filme salvo!</span>}

      <ul>
        {filmes.map((filme) => {
          return (
            <li key={filme.id}>
              <span>{filme.title}</span>
              <div>
                <Link target="_blank" to={`/filme/${filme.id}`}>
                  Ver Detalhes
                </Link>
                <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
