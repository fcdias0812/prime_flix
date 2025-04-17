import { useEffect, useState } from "react";
import api from "../../services/api";

//URL da API /movie/now_playing?api_key=fd5bb88fd74221037110d433a74a35ed&language=pt-BR

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "fd5bb88fd74221037110d433a74a35ed",
          language: "pt-BR",
          page: 1,
        },
      });

      console.log(response.data.results);
    }

    loadFilmes();
  }, []);

  return (
    <div>
      <h1>Bem vindo a home!</h1>
    </div>
  );
}
