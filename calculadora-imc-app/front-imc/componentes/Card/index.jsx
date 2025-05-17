import estilos from "./Card.module.css";

export default function Card({
  peso,
  altura,
  onPesoChange,
  onAlturaChange,
  onCalcular,
  resultado,
  status,
  erro,
}) {
  return (
    <div className={estilos.container}>
      <div className={estilos.card}>
        <h1>Calcule o seu IMC</h1>
        <div className={estilos.container_input}>
          <label htmlFor="altura">Altura:</label>
          <input
            id="altura"
            type="text"
            placeholder="altura em metros Exemplo: 1.75 "
            value={altura}
            onChange={onAlturaChange}
          />
        </div>

        <div className={estilos.container_input}>
          <label htmlFor="peso">Peso:</label>
          <input
            id="peso"
            type="text"
            placeholder="peso em kg  Exemplo: 60.9"
            value={peso}
            onChange={onPesoChange}
          />
        </div>
        {resultado ? (
          <p>
            Seu imc é: {resultado}
            <br /> você está: {status}
          </p>
        ) : null}

        {erro ? <p style={{ color: "red" }}> Erro: {erro}</p> : null}
        <button onClick={onCalcular} className={estilos.btn}>
          Calcular IMC
        </button>
      </div>
    </div>
  );
}
