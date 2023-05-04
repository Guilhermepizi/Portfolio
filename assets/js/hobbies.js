const hobbie = document.querySelectorAll('.hobbie-box');
const descricaoHobbie = document.querySelector('.texto-descricao2');
const sobreHobbie = [
                    '<p>Video Game</p> <br><p>Um dos meus hobbies preferidos é jogar video game. Jogo desde os meus 7 anos, começando com o PS1 e agora com o PS4. Sempre gostei mais dos jogos com narativas cativantes que me fazem entrar na história. Mas também gosto de jogar outros tipos de jogos. </p> <br>',
                    '<p>Filmes</p> <br> <p>Filmes para mim não tem dia ruim, gosto de um bom filme, seja ele um clássico ou um lançamento.</p> <br>',
                    '<p>Séries</p> <br> <p>Comecei a assistir séries na minha adolescência e nunca mais parei. Prefiro séries curtas que prendem a atenção do começo ao fim. </p> <br>',
                    '<p>Animes e Desenhos</p> <br> <p>Comecei a assistir desenhos quando criança, mas animes comecei com Naruto e também não consigo parar de assitir. </p> <br>',
                    '<p>HQs e Mangás</p> <br> <p>HQs comecei a ler a Turma da Monica, passando pelos heróis da marvel e ultimamente estou lendo o interminavel One Piece, que valem todos esses anos de espera por um fim.</p> <br>',
                    '<p>Livros</p> <br> <p>Livros comecei a ler desde pequeno também as aventuras da coleção Vaga-Lume. Gosto de livros com uma boa história de ficção, mas ultimamente estou mudando essa linha. </p> <br>',
                    '<p>Esportes</p> <br> <p>Sempre gostei de praticar esportes, o tênis foi onde comecei e até participei de campeonatos. Mas por conta dos meus estudos tive que parar. O Bodyboard eu praticava basicamente nas férias, quando descia para a práia. Já a corrida é o que eu pratico hoje em dia para não ficar parado. </p> <br>',
                    ]     
const dataInicioHobbie = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    ]
const dataHojeHobbie = (new Date()).getTime();

hobbie.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento2 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHojeHobbie-dataInicioHobbie[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricaoHobbie.innerHTML = `<p>${sobreHobbie[index1]} </p>` ;
        
    } )
    elemento.addEventListener('mouseout', (evento, elemento2,) => {
        descricao2.innerHTML = '/* Passe o mouse ou toque em cima de algum hobbie para saber mais */';
    } )
} );



