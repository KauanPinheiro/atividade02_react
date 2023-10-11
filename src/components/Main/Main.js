import "./main.css"
import mario from "../../img/movie_mario.jpg"
import adaoNegro from "../../img/movie_adaoNegro.jpg"
import avatar from "../../img/movie_avatar.jpg"
import somDaLiberdade from "../../img/movie_somDaLiberdade.jpg"
import vigadores from "../../img/movie_theAvengers.jpg"
import thefresh from "../../img/serie_oMalucoNoPedaco.jpg"
import lucifer from "../../img/serie_lucifer.png"
import stranger from "../../img/serie_strangerThings.jpg"
import theLast from "../../img/serie_theLastOfUs.jpg"
import fayra from "../../img/series_fayraAndraste.jpg"
import { useLayoutEffect } from "react"
import Listatitulo from "../Listatitulos/Listatitulo"


function Cartaz() {

    const filmes = [
        { img: vigadores, nome: "OS VIGADORES"},
        { img: mario, nome: "MARIO" },
        { img: adaoNegro, nome: "ADÃO NEGRO" },
        { img: avatar, nome: "AVATAR" },
        { img: somDaLiberdade, nome: "SOM DA LIBERDADE"  },
    ]

    const series = [
        {img: thefresh , nome: "O MALUCO NO PEDAÇO" },
        {img: lucifer, nome: "LUCIFER" },
        {img: stranger, nome: "STRANGER THINGS" },
        {img: theLast, nome: "THE LAST OF US" },
        {img: fayra, nome: "FAYRA ANDRASTE"  },
    ]

    return (
        <>
            <Listatitulo lista={filmes} titulo={"Destaques"}/>
            <Listatitulo lista={series} titulo={"Series"}/>
        </>
    )
}

export default Cartaz;