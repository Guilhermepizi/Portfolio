const skill = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>HTML é uma abreviação de Hyper Text Markup Language, ou em português, Linguagem de Marcação de Hipertexto. Em essência trata-se de um conjunto de regras, códigos e marcadores (ou tags) utilizados para definir principalmente como o conteúdo da página será apresentado. Esses marcadores dizem se uma frase deve ser exibida em negrito e centralizada, o tamanho e cores da fonte, a localização de uma imagem, um links e muito mais.</p> <br>',
                    '<p>CSS</p> <br> <p>O CSS(Cascading Style Sheets ou Folha de Estilos em Cascata) é uma linguagem de folhas de estilos que é utilizada para definir como os documentos escritos na linguagem de marcação (HTML ou XML) devem ser apresentados em termos de formatação, de layout.</p> <br>',
                    '<p>JavaScript</p> <br> <p>JavaScript é uma linguagem de programação usada por desenvolvedores para fazer páginas interativas da Internet. As funções de JavaScript podem melhorar a experiência do usuário durante a navegação em um site, como, por exemplo, desde a atualização do feed na página da mídia social até a exibição de animações e mapas interativos.</p> <br>',
                    '<p>Java</p> <br> <p>Java é uma linguagem de programação amplamente usada para codificar aplicações Web. Ela tem sido uma escolha popular entre os desenvolvedores há mais de duas décadas, com milhões de aplicações Java em uso hoje. Java é uma linguagem multiplataforma, orientada a objetos e centrada em rede que pode ser usada como uma plataforma em si. É uma linguagem de programação rápida, segura e confiável para codificar tudo, desde aplicações móveis e software empresarial até aplicações de big data e tecnologias do servidor.</p> <br>',
                    '<p>C#</p> <br> <p>A linguagem C# foi influênciada por várias linguagens, como por exemplo, JAVA e C++. Ela é uma junção das principais vantagens dentre essas linguagens, melhorando suas implementações e adicionando novos recursos. Sua sintaxe é simples e de fácil aprendizagem, muito familiar com a sintaxe de JAVA e C. Além disso, simplifica muitas complexidades do C++, fornecendo recursos poderosos, como tipos de valor nulo, enumerações, delegações, expressões lambdas e acesso direto a memória, suporte a métodos e tipos genéricos, gerando uma melhor segurança de tipo e desempenho.</p> <br>',
                    '<p>SQL</p> <br> <p>A linguagem SQL é o recurso mais conhecido por DBAs e programadores para a execução de comandos em bancos de dados relacionais. É por meio dela que criamos tabelas, colunas, índices, atribuímos permissões a usuários, bem como realizamos consultas a dados.É utilizando o SQL que conversamos com o banco de dados.</p> <br>',
                    '<p>React</p> <br> <p>O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites.</p> <br>',
                    '<p>Nodejs</p> <br> <p>Node.js é uma tecnologia usada para executar código JavaScript fora do navegador. Com ele podemos construir aplicações web em geral, desde web sites até APIs e microsserviços.</p> <br>',
                    '<p>Git</p> <br> <p>Git é um sistema de controle de versão open-source. Ele é utilizado para a criação de um histórico de alterações em código-fonte de projetos de desenvolvimento de software. Por meio de sua utilização, podemos saber quais foram as alterações realizadas, quem fez cada uma das alterações e baixar essas mudanças em nossa máquina. Se necessário, revertê-las para uma versão anterior.</p> <br>',
                    '<p>Github</p> <br> <p>O Github é um repositório remoto, criado como um serviço online de hospedagem de repositórios do Git. Funciona como um servidor que agrega todas as modificações realizadas por cada uma das pessoas envolvidas em um projeto, unificando as diferentes versões de código e seus históricos, permitindo compartilhamento entre as equipes. Além disso, o GitHub também conta com várias integrações com outros serviços online, permitindo o deploy automático de aplicação. Assim, garante a integração contínua e facilita o desenvolvimento.</p> <br>'
]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    (new Date(2021, 11, 1)).getTime(), // 8
                    ]
const dataHoje = (new Date()).getTime();

skill.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '/* Passe o mouse ou toque em cima de alguma habilidade para ler a descrição */';
    } )
} );



