import konoha from "../../assets/img/konoha.jpg"
import jaqueta from '../../assets/img/jaqueta.jpg'
import bandana from '../../assets/img/bandana.jpg'
import caneca from '../../assets/img/caneca.jpg'
import espada from '../../assets/img/espada.jpg'
import garrafa from '../../assets/img/garrafa.jpg'




const loja = {
    banner: {
        titulo: "Loja Borutinho"
    },
    venda: {
        titulo: "Boruto Store",
        img: konoha,
        subtitulo: "Bem-vindo",
        descricao: "Boruto: Naruto Next Generations é um derivado do popular Naruto. A história segue agora um novo protagonista, Boruto Uzumaki, e seu time de ninjas. O mangá foi criado em 2016 e começou como uma ideia de criar uma sequência de Naruto. Com o sucesso dos quadrinhos, um anime foi criado em 2017. A trama teve muito sucesso porque, embora continue expandindo a história original, com vários personagens retornando, apresenta também uma nova geração de ninjas. Além disso, ao contrário de seu pai que cresceu como um órfão, Boruto tem de lutar contra outras questões interiores que advêm de ser um privilegiado.",
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