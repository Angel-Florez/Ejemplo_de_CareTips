import React from "react";
const Entret= () => {
  return (
    <div>
      <div className="Titulo">
        ENTRETENIMIENTO 
      </div>
      <div className="Caretip">
        <h1>
          <img src="data:image/png;base64,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g" 
          alt=""
          height="80px"/>
        </h1>
        <h3>
          <b>Bienvenido a Entretenimiento</b>
        </h3>
        <br></br>
        Los contenidos que proponemos en este artículo ayudan a aumentar nuestra perspectiva
         y empatizar aún más con las diferentes realidades del mundo. 
         Para pasar a la acción, necesitamos conocer mejor las necesidades de cada colectivo.<br></br>
        <br></br>
        <h3>
          <b>¿Te atreves a realizarlo?</b>
        </h3>
      </div>
    </div>
  );
};
export default Entret;