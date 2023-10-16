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
import bruxo from "../../img/the_witcher.png"
import bruxoTwo from"../../img/oBruxo.jpg"


function Cartaz() {

    const filmes = [
        { img: vigadores, nome: "OS VIGADORES",legenda:"2019"},
        { img: mario, nome: "MARIO",legenda:"2023" },
        { img: adaoNegro, nome: "ADÃO NEGRO", legenda:"2022"},
        { img: avatar, nome: "AVATAR", legenda:"2022" },
        { img: somDaLiberdade, nome: "SOM DA LIBERDADE", legenda:"2023" },
    ]

    const series = [
        {img: thefresh , nome: "O MALUCO NO PEDAÇO", legenda:"1990" },
        {img: lucifer, nome: "LUCIFER", legenda:"2016" },
        {img: stranger, nome: "STRANGER THINGS", legenda:"2016" },
        {img: theLast, nome: "THE LAST OF US", legenda:"2023" },
        {img: bruxoTwo, nome: "THE WICHER ",legenda:"2019 "  },
    ]

    return (
        <>
            <Listatitulo lista={filmes} titulo={"Filmes"} subTitulo={"Destaques"}/>
            <Listatitulo lista={series} titulo={"Series"} />
        </>
    )
}

export default Cartaz;