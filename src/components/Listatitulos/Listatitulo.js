
import "./listatitulo.css"

function Listatitulo({lista,titulo,legenda,subTitulo}){

    return(
        <>
        
        <h1 className="texto">{titulo}</h1>
        
        <div className="body">
            {
                lista.map((movie) =>
                    <div className="container-t">
                    
                    {
                        movie.destaque === true ? 
                        <div className="titulo"><p>Destaques</p></div>
                        :""
                    }
                    <div>
                        <img src={movie.img} alt="" />
                        
                        <h4>{movie.nome}</h4>
                        <p>{movie.legenda}</p>
                        </div>
                        
                </div>
            )}
        </div>
        </>
    )
}

export default Listatitulo;