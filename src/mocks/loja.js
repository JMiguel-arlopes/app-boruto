import konoha from "../../assets/img/konoha.jpg"
import jaqueta from '../../assets/img/jaqueta.jpg'
import bandana from '../../assets/img/bandana.jpg'
import caneca from '../../assets/img/caneca.jpg'
import espada from '../../assets/img/espada.jpg'
import garrafa from '../../assets/img/garrafa.jpg'




const loja = {
    banner: {
        titulo: "Esse é o nosso titulo"
    },
    venda: {
        titulo: "Nosso Título",
        img: konoha,
        subtitulo: "Industria",
        descricao: "lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum",
        preco: "R$ 40,00",
        botao: "Comprar"
    },
    itens: {
        titulo: "Lista de Itens",
        lista: [
            { nome: 'Jaqueta', img: jaqueta },
            { nome: 'Bandana', img: bandana },
            { nome: 'Espada', img: espada },
            { nome: 'Garrafas', img: garrafa },
            { nome: 'Canecas', img: caneca },
        ]
    }
}
export default loja