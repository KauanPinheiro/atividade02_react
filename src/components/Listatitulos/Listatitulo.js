
import "./listatitulo.css"

function Listatitulo({lista,titulo,legenda}){
    return(
        <>
        
        <h1 className="texto">{titulo}</h1>
        
        <div className="body">
            {
                lista.map((movie) =>
                    <div className="container">
                        <img src={movie.img} alt="" />
                        <h4>{movie.nome}</h4>
                        <p>{movie.legenda}</p>
                    </div>
                )
            }
            </div>
        </>
    )
}

export default Listatitulo;