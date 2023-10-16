
import "./listatitulo.css"

function Listatitulo({lista,titulo,legenda,subTitulo}){
    return(
        <>
        
        <h1 className="texto">{titulo}</h1>
        
        <div className="body">
            {
                lista.map((movie) =>
                    <div className="container">
                    <figuricapiotn>
                        <img src={movie.img} alt="" />
                        <p className="destaques">Destaques</p>
                        </figuricapiotn>
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