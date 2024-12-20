// Conceituando O JS
// Criada  a partir do CMM feita pela cepewwave mas decidirão mudar o nome para ScriptEase que
// despertou interesse da netscape que estava numa briga com a microsoft.Em 1945  a linguagem mudou
// para Mocha de liveScript a netscape estava em negociação com a SUN Microsystem que estava fazendo
// o java então a netscape SUN fizeram uma jogada de marketing de fundir o nome das 2 linguagens
// elas são semelhante porque foram baseadas em C. Tipagem dinâmica fraca é Client Side e Server.
// node permite js exe. em qualquer lugar que antes era só web. Ao incluir no html usar tag type=module
// Há mais vulnerabilidade por estar do lado do cliente, ainda mais quando se trata de validações.

// console.log() === echo;
// ; opcional

// UNDEFINED X NULL
// Undefined é quando a var não foi declarada e null é um valor atribuido e intencional
// NaN Not a Number é um valor que não é um número
// é possivel declarar numeros octo e hexadecimal
// VAR é de escopo global, let e const são de escopo local

// Copia Superficial 
// Object. compartilha mesma referencia ou sej alert. o original alterar a copia superficial.

function testeDeEscopo() {
    var testeGlobal = "Global";
    let testeLocal = "Local";
    let testeNull = null;
    let testeUndefined = undefined;
    console.log(typeof testeGlobal);
    console.log(typeof testeLocal);
    console.log(typeof testeNull);
    console.log(typeof testeUndefined);
}

// OPERADOR TERNARIO
// pode substituir if else em caso simples
function opTernario() {
    let num = 10;
    //primeiro condição, segundo caso for verdadeira, terceiro caso for falsa
    let result = num > 5 ? "Maior que 5" : "Menor que 5";
    console.log(result);
}

// FUNÇÕES
function funcoesGenericas(parametro) {
    //Variaveis para teste
    let seq = 183872394238;
    let palavra = "DNA";
    let frase = "Apenas os mortos verão o fim da guerra";

    // Parse (conversão)
    console.log(parseFloat(seq));
    console.log(parseInt(palavra));//NaN
    console.log(seq.toString());// é usado para conversão para texto
    console.log(frase.substring(0, 10));//1°para. inicio e fim de onde devolver as string
    console.log(frase.toLocaleLowerCase());
    console.log(frase.toLocaleUpperCase());
    console.log(frase.toLowerCase());
    console.log(frase.toUpperCase());
}

// i++
function imais() {
    //i++ lê depois add o valor ++i add valor primeiro
    let i = 5;
    let valorA = i++;
    let valorB = ++i;

    console.log("O valor de valorA é:", valorA);
    console.log("O valor de valorB é:", valorB);
    // O operador i++ faz um pós-incremento, o que significa que 
    // primeiro atribui o valor atual de i a valorA e depois 
    // incrementa i. Em seguida, o operador ++i incrementa o 
    // valor de i e atribui esse valor a valorB.
}

// FOR
// Padrão
function formasDoFor() {
    const notas = ["um", "dois", "tres", "four", "five", "six", "seven", "eight"];

    for (let indice = 0; indice < notas.length; ++indice) {
        console.log
            (indice, notas[indice]);
    }

    //For Of
    for (let nota of notas) {
        console.log(nota);
    }

    //For Each não retorna nenhum valor
    notas.forEach(function (nota) {
        console.log(nota);
    })

    // For in
    const objeto = { nome: "leo", age: 19, ende: [{ rua: "rua 1", numero: 100 }] }
    for (let key in objeto) {
        // const texto = `a chave ${key} tem valor ${objeto[key]}`
        // Resolvendo o problema de object object
        const tipo = typeof objeto[key]; // FILTAR OS OBJETOS
        if (tipo !== "object" && tipo !== "function") {
            const texto = `a chave ${key} tem valor ${objeto[key]}`
            console.log(texto);
        }
        // erro object object ocorre quando se tenta força um objeto a ser uma string
    }
}


function objetos() {
    const car = { motor: "bom", rodas: 4, cor: "azul" };
    const pessoa = { nome: "very much", altura: 3, pele: "invisible" };

    //return keys
    const keys = Object.keys(car);
    console.log(keys);

    //return keys
    const valores = Object.values(car);
    console.log(valores);

    //entries retorn os dois key e value
    const mesclagem = Object.entries(car);
    console.log(mesclagem);

    // Fusão e copia (assign)
    const fusion = Object.assign({}, car, pessoa);
    console.log(fusion);

    // validação de key util para saber se ao add algum atributo já consta ou não no obj
    if (!keys.includes('dono')) {
        console.log("Quem é o dono krl???");
    }




}

//mais enxuto
//const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10: nota + 1);


// const arrayNums = [1, 2, 3, 4]
// const arrynovo = arrayNums.map(notas => notas *= 10)
// console.log(arrynovo)


// Quando passamos como valor undefined para alguma função e ele já tiver valor padrao ele irá pegar este valor.

// Expressões de função 
// Quando declararamos uma variavel com uma função podemos chama-la 
// apenas após ela, já uma função normal pode ser chamada antes dela
// ser declarada. Isto é feito por meio conhecido como HOSTING ao 
// ser lido o code as fun as puxada para cima a menos que seja uma 
// expressão de função.


// Tipos primitivos são sempre passados como um valor, enquanto tipos não primitivos sempre são passados por referência.
// Objetos JS
// Quando criamos um objeto dentro do JavaScript ocorre a reserva de um espaço na memória local que chamamos de heap.Ao fazer isso, o que o JavaScript guarda na nova variável não é o valor do Objeto que criamos, mas sim o endereço de memória onde os valores estão salvos.Dessa forma, ao declararmos uma variável que armazena informações dentro do heap, o que estamos fazendo é "alugar" um espaço da memória, o qual funções podem acessar.Isso torna as operações muito mais eficientes, mas tem um problema: quaisquer alterações no conteúdo armazenado pelos objetos não primitivos afetam todas as variáveis que o referenciam.Como essas variáveis são links para espaços na memória, dizemos que elas são um "tipo de referência" enquanto que os tipos primitivos são "um tipo de valor".Notação de objeto javascript é um formato de transferência de dados usado em chamadas AJAX entre o navegador é um servidor.Por mais que seu nome tenha javascript ele é mais restrito que um obj.Javascript enquanto num obj.Javascript ele teria as propriedades no JSON ele tem apenas os valores.O JSON não pode ter funções, comentários e todo texto sempre tem aspas duplas e elas sempre têm prioridade.
//     Heap
// para alterar de forma direta o valor de um objeto, é necessário usar o Object.create()
// Operadores
// instanceOf serve para verificar se a variavel é instancia uma instancia da classe seguida do operador
// Métodos
// Get e set(assessores) são acessados de forma diferente de uma função normal.
// Se for criado apenas o método get a variavel irá servir apenas de leitura não poderá ser acessada diretamente há a possibilidade de modifica - la no método construtor

// super() precisa ser usado antes do this, quando ele está na classe construtor ele é responsável por chamar o método construtor da classe pai.Quando ele está dentro de outra método ele chama a classe do mesmo nome só que do pai.È necessário passar por parâmetros os dados da classe que ele se refere.Para sobrescrever algo ao usa o super basta muda na class filha que está sendo usada, não é necessário mudar o pai.

//     This.constructor refere - se o constructor da conta caso queira que fazer condições de construtores

// Funções
// setTimeout(função(), milissegundos) essa função é exe.após os milissegundos passados.

//     clearTimeout() cancelar o setTimeout

// setInterval() recebe a função e intervalo que será exe a função continuamente

// clearInterval() limpa o tempo da função setInterval

// getAttribute() retorna o valor do atributo do elemento, caso não exista o valor será null ou “”




// Arrays
// Um array list const pode ser add e alterado, mas não se pode mudar o tipo

// Referencia X Clonar
// Referencia é feita de forma padrão usando array x = y
// Clonar é feito com uso do operador de espalhamento"..."
// Exemplo onde é possivel ver a != ao usar o push que quaando ref. add nos arrays ele altera o original e o "clonado"

function listas() {
    const people = ["julio", "Lucas", "julio", "Lucas", "martins", "manu", "erick", "martina"];
    const valores = [100, 293, 929, 320, 120, 903, 574];
    const outroValores = [100110010, 1111, 11001, 110010110];
    const fragmentos = ['gatilho', "ferrolho", "alavanca do ferrolho", "cão",];


    //array com mais uma dimensão
    const matriz = [people, valores];
    console.log(matriz[0][0]);
    console.log(matriz[1][0]);

    //junta dois ou mais
    const misto = [].concat(people, valores);
    console.log(misto);

    //Pesquisa
    people.includes("martina");//output true

    //Destructuring em JS pegar apenas os valores de dois arrays
    const onlyvalue = [...people, ...valores];
    console.log(onlyvalue);
    const [valor0, valor1, ...valoresRestantes] = [1, 2, 3, 4, 5, 6,];
    console.log(valor0, valor1, valoresRestantes);//1 2 [ 3, 4, 5, 6 ]
    //valor padrão
    //const [status = "morto"] = [];
    const [status = "morto"] = ["vivo"];
    console.log(status);
    //Herança
    const edit = { "width": 122, "height": 1080 }
    const video = { ...edit, "time": 200 }
    console.log(video);
    const { width } = video;// outro jeito de acessar atributo CREATE VAR precisa corresponder ao nome colcoado ali
    console.log(width);
    function acessoDireto({ width, height }) {
        console.log(width, height);
    };//Outro jeito de acessar por função direto
    //acessoDireto(edit);

    //Filter copy superficial c/elem. TDS que foram validados
    const filtrado = valores.filter(valor => valor > 100);
    console.log(filtrado);

    //reduce parâ.1 original parâ.2 return
    const soma = valores.reduce((acumulador, valor) => acumulador + valor, 0);
    console.log(soma);

    //Remover duplcidades
    const semDuplicatas = [new Set(people)];
    console.log(semDuplicatas);// ele é CONJUNTO !ARRAY é um array like

    //add os valores filtrados para um ARRAY
    const arrayFiltrado = [...new Set(filtrado)];// "..."
    console.log(arrayFiltrado);

    console.log(outroValores.join('-'))//retorna com valor de dentro das aspas separando cada item

    // retorna a posição do parâmetro ou -1 se não achar
    console.log(people.indexOf('julia'));

    // semelhante ao indexof mas inicia a pesquisa do fim
    console.log(people.lastIndexOf('julia'));

    // parâmetro 1 indice, 2 delete qtd e 3 recebe o valor a add
    fragmentos.splice(1, 2, 'Alça-mira');
    console.log(fragmentos);
    
    // retorna primeiro elemento verdadeiro conforme a condição
    const found = fragmentos.find((element) => element == "gatilho");
    const foundErro = fragmentos.find((element) => element == "alavanca");
    console.log(found, foundErro);
    // semelhantes:
    // findIndex() return indice

    // Push() add na última posição do array
    // Unshift() add no começo do array
    // Pop() remove o último item do array
    // Shift() remove o primeiro item de um array
    // Reverse() reverte o array


}


// Objects
function jobObject() {
    const military = { name: "Chris", surname: "Kyle", patent: "sargent", kills: 333 };
    // padrão de acessar
    // console.log(military.name);
    // console.log(military.kills);
    // console.log(military.surname);
    // console.log(military.patent);
    // BIZU
    function easy(obj, info) {
        return obj[info];
    }
    console.log(easy(military, 'name'));

    // Var que não existem não dão erro sim undefined

    // JEITOS ERRADO DE TENTAR BUSCA RETURN
    // console.log(military[name]); ERRO
    // console.log(military[0]); UNDEFINED
    // console.log(military.name()); NOT FUNCTION
    // JEITO CERTO console.log(military['name'])

    // DELETE
    delete military.surname;
    delete military["kills"]


}

// DESESTRUTURANDO OBJETOS
function desestruturando() {
    const civil = { nome: "Donald", altura: 1.5, peso: 78 };
    // vincula o obj. ás variaveis 
    const { nome, altura, peso, sexo } = civil; // var devem ter no obj
    console.log(nome);
    console.log(sexo);// undefined pois não tem no obj
    // Associar a outros nomes 
    const { nome: name, altura: height, peso: weight } = civil;
    console.log(name);
    // Desvantagens mais complexo e deve eliminar as var quando não mais usadas
}

// INTERPOLAÇÃO or TEMPLATE STRING or TEMPLATE LITERALS
// Dentro de ‘ ‘ basta utilizar ${ variável }, substituindo a concatenação por “” + “”

// DOM Document Object Model
// Através dele é possível alterar tudo no html ele é responsável por interpretar, alterar e organizar todos elementos HTML
// Window & DOM: dom tem como limite do documento da página e window janela do Browser
// DOM & BEM: utilizar os dois pode ser de grande proveito pois pode referir á class
function funcoesDOM() {
    //usam document pois é arquivo raiz e const pois n havera alterações nelas
    const identificacao = document.getElementById("");
    const classe = document.getElementsByClassName("");// retorna uma array
    const tagName = document.getElementsByTagName("");// retorna uma array
    const selecionarPrimeiro = document.querySelector(""); // seleciona primeiro elem.
    const selecionarVarios = document.querySelectorAll("div p"); // job nodelist != arrays.
    // seletor.style.proriedade
    identificacao.style.backgroundColor = "red";


}

// EVENTS
// Quando se refere a eventos pode chamar uma função no evento que está na TAG ou seleciona o elemento e utilizar.onclick = funcao;
// onchaged para quando houver alteração elemento
// onclick para quando clicarem no elemento
// onmouseover quando o mouse estiver em cima do elemento onmouseout quando o mouse não estiver em cima do elemento
// De vez add propriedades em eventos add classes com essas propriedades
// onmousedown
// onmouseup
// onfocus
// addEventListener('event', 'function') passando por parâmetro o evento e depois a função sem o parêntese






// innerText seleciona apenas o texto já o innerHTML seleciona os textos e tags html



// Bind
// Faz com que mude o contexto inserido

// Arrow Functions
// Tem esse nome por causa de sua semelhaça a uma flecha.Arrows Functions tem um escopo lexico significa que podemos acessar a propriedade código dentro do nosso forEach.O this não irá variar de acordo com o contexto.Essas funções são mais simples e não possui seu proprio this quando usado se refere ao contexto externo, arguments, super ou new.target não recomendadas para metodos e não podem ser udadas para contrutores.Resolve o problema de escopo quando não conseguimos acessar uma propriedade por causa do aninhamento em resumo.Se for necessário criar alguma função que necessite realizar referência a seu próprio escopo dentro de si, as arrow functions não são recomendadas.Contudo, se não for esse o caso, você poderá usá - las em grande parte de seus projetos tranquilamente, o que deixará seus códigos ainda mais modernos e poderosos.São sempre anonimas, são atribuidas a variavel depois() o simbolo de = e depois > seguindo o code.Não é necessario a palavra functions e quando ha apenas uma instrução não é necessario a palavra return nem chaves.Quando ha apenas um parametro o parentese pode ser omitido.Caso não haja parametros colocasse() vazio.você pode omitir as chaves { } e a palavra - chave return:


// POO

// Class no js são functions, porem as classes não são hoisted diferente das funções
// Para utilizar o próprio object se utiliza this

// Em métodos não é necessário utilizar a palavra function

//     Para atributos privados pode se usar # porem não foi implementado por completo

// Durante a execução se for atribuir alguma variável com valor no object será salvo na instancia única não na classe como um todo

// Atributo com _ na frente significa que é privado

// Atributos static se refere a classe e não ao objeto para acessa - lo é necessario colocar o nome da classe e depois o ponto

// This varia conforme o seu contexto podendo acasionar alguns erros por isso tem arrows functions

// Module

// Para criar um module basta usar no terminal npm init depois nomear, colocar uma descrição entre outras informações
// Para exportar um arquivo JS é necessário usar a palavra export na class ou etc


// Package.js a tag script tem a função de inicializar todas instruções nela quando usado o comando npm start


//     ForEach & map
// O método forEach() executa uma dada função em cada elemento de um array.O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.


// armazenamento de informações(cachê)
// window.localStorage.setItem('key', 'value') tem armazenamento local quando queremos pegar esse item usamos get no lugar do set para pegar o item é apenas necessário a key.Já window.sessionStorage.setItem serve para apenas uma sessão.


// Estamos mais acostumados a ver chamadas de funções dessa forma:
// minhaFunction = (texto) => {
//     console.log(texto);
// }



// pesquisa
// super
// Metodos da class console
// Fazer um metodo public que chame um metodo de mesmo nome só que que  private para que seja possivel aumnetar o controle do metodo podendo fazer o metodo public para controle e o private para receber parametros e executar tarefas.Exe aluara poo js polimorfismo etc.
// review POO of Js
// Pelo que vi até agora js não tem como objetivo a programação poo por mais que seja possível.Alguns conceitos da poo parece que são feitos com guambiara como classes abstratc que diferente do php tinha uma palavra reservada no js vc constroi esse conceito com regras fazendo eles se comportarem da forma requerida diferente de outras linguagens que com palavras reservadas basta lidar com comportamento, em js é necessário criar varias regras e logica para isso e não me parece tão eficaz quando as outras como por exemplo atributos private.
//     History
// Em 1995 criada por Brendan Eich enquanto estava na Netscape chamada inicialmente moca depois iria se chama livescript mas por conta do sucesso do Java decidirão chame de JavaScript.Em 1997 a Netscape padroniza o js pelo ecma que cria o emcaScript por causa do medo de serem copiada pela Microsoft.Em 2002 mozila é criada junto com Firefox.Em 2008 é criado o Google Chrome, o que fez o Chrome se destaca foi seu motor V8 que tinha code open.Por V8 ser code open foi alterado e criado o node uma máquina que roda javascript fora dos navegadores ou seja do lado do servidor.EcmaScript é versão padronizada do Js primeira versão é de 1997, 2° 1998, 3° 1999. Com várias promessas para versão 4 não foi possível cumprir então em 2009 lançou a versão ES5 que ficou muito popular depois em 2015 venho ES6 e depois começou a ter atualizações anuais que seu nome correspondente ao ES e o ano.Em javascript toda variável é "elevada/ içada"(hoisting) esse mecanismo move a variável para o topo do seu escopo antes de exe.como os tipos var.Já o tipo let tem seu escopo limitado ao bloco que está inserido.O tipo const não pode ter seu valor alterado depois de atribuído caso tente ocorrerá erro e também tem escopo local.Vale lembrar que devem ser inicializada obrigatoriamente quando declarada.

//     Com polimorfismo é possivel trata igual diferentes objetos

// In verifica dentro de objeto
// InstanceOf ?

//     Duck type faz analogia de se ele se comporta como um pato ele é um pato então ele, retorna verdadeiro ou seja o importante não é o que ele realmente é e sim seus comportamentos


// Const quando recebe um valor de uma variavel irá ficar com aquele valor mesmo depois de a variavel trocar de valor que foi atribuida trocar de valor


// Um outro problema é quando há uso do document.write, algo que é má prática há muito tempo mas infelizmente ainda muito usado.
// Usar o LABjs é bastante simples:
// // carrega 3 scripts em paralelo mas mantém ordem de execução
// $LAB.script('jquery.js').wait()
//     .script('plugin.jquery.js').wait()
//     .script('app.js');

// carrega e executa outro script em paralelo, com callback
// $LAB.script('sem-dependencias.js').wait(function () {
//     alert('Callback executando quando script carrega');

// O HTML5 especificou um novo atributo async na tag < script > mas poucos browsers suportam.O IE possui um atributo proprietário defer há muito tempo, com propósito parecido.Enquanto não há uma solução padrão e portável, o uso de algum framework de carregamento assíncrono é recomendado.
// A solução foi carregar assincronamente, via JavaScript, as imagens secundárias, deixando inicialmente apenas a primeira imagem com HTML normal.Usamos os data attributes do HTML5 para criar atributos próprios no HTML que referenciam os endereços das imagens secundárias:
//     <ul>
//         <li>
//             <p>Conheça os cursos de Java da Caelum</p>
//             <img alt="Cursos Java" src="banner_01.jpg" width="960" height="330" />
//         </li>
//         <li data-img-src="banner_02.jpg">
//             <p>Veja os projetos da Caelum</p>
//         </li>
//         <li data-img-src="banner_03.jpg">
//             <p>Baixe as apostilas gratuitas</p>
//         </li>
//     </ul>

// Usando JQuery, selecionamos todos os < li > que possuem o atributo data - img - src.Criamos, então, um novo elemento < img > com o src apontando para o endereço da imagem.Repare que tentamos adiar esse carregamento o máximo possível, já que a segunda imagem só aparecerá para o usuário depois de vários segundos.No código acima, agendamos o script para rodar 600 milissegundos após o carregamento da página.
// Uma preocupação possível com essa prática é com usuários com JavaScript desabilitado ou navegadores limitados.É preciso pensar bem nesse caso e oferecer uma boa experiência para o usuário em todas as situações.Mas as imagens rotativas dependem de JavaScript para funcionar; logo, mesmo sem o carregamento assíncrono das imagens secundárias, o efeito não funcionaria e apenas a primeira imagem(em HTML e CSS puros) seria mostrada.Portanto, não há impacto para o usuário em usar a solução JavaScript para carregamento das imagens.Um impacto possível é que os buscadores não enxergam mais as imagens secundárias e, portanto, estas não serão indexadas.Steve Souders mostrou que a tag < iframe > é o elemento mais caro a ser criado no DOM, ordens de magnitude mais lento, mesmo vazio.Mas o principal problema é o onload da nossa página passar a depender do onload do widget, que é grande e lento.Devemos otimizar o tempo que o onload dispara, pois isso dispara os callbacks de onload(bastante comuns) e porque o indicador de carregamento do navegador para de girar após o onload(dando a sensação de rapidez pro usuário).
// A melhor estratégia é carregar o < iframe > após o onload via JavaScript, ainda mais se não é algo crítico, como o widget do Facebook.O código é bastante simples:
//     $(window).load(function () {
//         $('#facebook_like_box')
//             .html('<iframe src="https://www.facebook.com/plugin...></iframe>');
//     });
// Quando colocamos() numa função era n será passada como referencia ou guarda será executada

// innerHtml escreve no conteúdo selecionado


// DocString comentário usado para e



// ARROWS FUNCTIONS
// Deixam mais curta as function. introduzidas no ES6(ECMAScript 2015)
function arcos() {
    // Sintaxe Básica:
    const nomeDaFuncao = (parametros) => {
        // corpo da função 
    };

    // Sintaxe Concisa:
    // if(only line code and return one value) you can hide a keys and word "return":
    const soma = (a, b) => a + b;

    // if(AND only param) you can hide ()
    const quadrado = x => x * x;

    // if(!param) param is empty
    const logMensagem = () => console.log('Olá, mundo!');

    // THIS 
    //  na arrow são herdados do cntxt inserido, pode causar problemas em métodos de objetos, 
    //  pois this pode não se referir ao objeto esperado. útil em callbacks e funções que são
    //  passadas como argumentos.
    // Considere o seguinte código que usa uma função tradicional:
    function Pessoa() {
        this.idade = 0;
        setInterval(
            function crescer() {
                this.idade++;
                // Aqui, `this` não se refere ao objeto Pessoa   
            }, 1000);
    }
    // this dentro de crescer não se refere ao objeto Pessoa, mas isso pode ser corrigido usando uma arrow function:
    function Pessoa() {
        this.idade = 0; setInterval(() => {
            this.idade++; // Aqui, `this` se refere ao objeto Pessoa  
        }, 1000);
    }
    // Arrows & Funções Tradicionais:
    //      Alguns casos não podem substituir functions tradiconais pois não têm seu próprio this,
    //      arguments, super ou new.target e não podem ser usadas como construtores.
    // Quando Usar Arrow Functions:
    //  	callbacks, anônimas, em métodos de array como map, filter, funções que passam funções,
    //  	Quando o comportamento léxico do this é desejado.
    // Quando Evitar Arrow Functions
    //  	Métodos de objeto que você espera usar this para acessar o próprio objeto.
    //  	Funções que você planeja usar como construtores(com a palavra - chave new).
    //  	função com nome para melhorar a legibilidade ou para fins de depuração.
}

// cmd = command prompt
// pwd = print working directory

// Path Absloute e Relative
// absolute path: caminho completo do arquivo, começa com a raiz do sistema de arquivos.
// relative path: caminho relativo ao arquivo atual, começa com o diretório atual.

// xplicar a função seu input e output

// Construa a funcionalidade de ler o conteúdo de um arquivo de imagem selecionado pelo usuário e exibi - lo na página.Para isso, você pode seguir os seguintes passos:
// arquivo "scripts.js":
// ·	Crie uma função chamada "lerConteudoDoArquivo" que recebe um arquivo como parâmetro e retorna uma Promise.
// ·	Dentro da função, crie um leitor de arquivos FileReader e defina os eventos "onload" e "onerror".
// ·	No evento "onload", resolva a Promise com um objeto contendo a URL e o nome do arquivo.
// ·	No evento "onerror", rejeite a Promise com uma mensagem de erro.
// ·	Leia o conteúdo do arquivo como uma URL data.
// ·	Selecione os elementos HTML da imagem principal e do nome da imagem.
// ·	Adicione um evento "change" ao input de upload de arquivos.
// ·	Dentro do evento, verifique se um arquivo foi selecionado.
// ·	Se sim, chame a função "lerConteudoDoArquivo" passando o arquivo selecionado.
// ·	No retorno da Promise, atualize o src da imagem principal e o texto do nome da imagem.
// ·	Em caso de erro, exiba uma mensagem de erro no console.
// Ver opinião do instrutor
// Opinião do instrutor

// Para desenvolver essa funcionalidade, vamos iniciar com a função lerConteudoDoArquivo, que será responsável por ler o conteúdo de um arquivo selecionado pelo usuário e retornar uma Promise que será resolvida com os dados da leitura ou rejeitada em caso de erro.
//     function lerConteudoDoArquivo(arquivo) {
//         return new Promise((resolve, reject) => {         // Cria um novo leitor de arquivo         const leitor = new FileReader();          // Define o que acontece quando a leitura é completada com sucesso         leitor.onload = () => {             // Resolve a Promise com um objeto contendo a URL e o nome do arquivo             resolve({ url: leitor.result, nome: arquivo.name });         };          // Define o que acontece em caso de erro na leitura do arquivo         leitor.onerror = () => {             // Rejeita a Promise com uma mensagem de erro personalizada             reject(`Erro na leitura do arquivo ${arquivo.name}`);         };          // Inicia a leitura do arquivo como uma URL data (base64)         leitor.readAsDataURL(arquivo);     }); } 
//             Promise: A função retorna uma Promise que pode ser resolvida(resolve) quando a leitura do arquivo é concluída com sucesso ou rejeitada(reject) se ocorrer algum erro durante a leitura.
//                 FileReader: É utilizado para ler o conteúdo de arquivos selecionados pelo usuário.
// Event Handlers: onload é acionado quando a leitura é bem - sucedida, enquanto onerror é acionado se ocorrer algum erro durante a leitura.
//                 readAsDataURL: Inicia a leitura do arquivo como uma URL de dados(data URL), que é uma representação base64 do conteúdo do arquivo.
// Em seguida, vamos construir um ouvinte para quando acontecer alguma mudança no input de upload.Esse ouvinte que chamará a funcionalidade de leitura do arquivo.
//                 Seleciona elementos HTML da páginaconst imagemPrincipal = document.querySelector(".main-imagem"); const nomeDaImagem = document.querySelector(".container-imagem-nome p"); const inputUpload = document.getElementById("input-upload");  // Adiciona um ouvinte de evento para o input de upload de arquivo inputUpload.addEventListener("change", async (evento) => {     // Obtém o arquivo selecionado pelo usuário     const arquivo = evento.target.files[0];      // Verifica se um arquivo foi selecionado     if (arquivo) {         try {             // Aguarda a leitura do conteúdo do arquivo             const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);              // Atualiza a imagem principal com a URL do arquivo             imagemPrincipal.src = conteudoDoArquivo.url;              // Atualiza o nome da imagem na página             nomeDaImagem.textContent = conteudoDoArquivo.nome;         } catch (erro) {             // Em caso de erro na leitura do arquivo, exibe uma mensagem de erro no console             console.error("Erro na leitura do arquivo:", erro);         }     } }); 
//                 querySelector: Seleciona elementos HTML na página usando seletores de classe(".main-imagem" e ".container-imagem-nome p").
//                     inputUpload.addEventListener: Adiciona um ouvinte de evento para o input de upload de arquivo(inputUpload).O evento change é acionado quando o usuário seleciona um arquivo.
// Evento change: Quando o evento é acionado, o código dentro da função assíncrona(async (evento) => { ... }) é executado.
// Obtendo o Arquivo: evento.target.files[0] obtém o arquivo selecionado pelo usuário no input de upload.
// Await e try...catch: await lerConteudoDoArquivo(arquivo) espera pela conclusão da função lerConteudoDoArquivo e captura qualquer erro usando try...catch.
// Atualização da Página: Se a leitura for bem - sucedida, imagemPrincipal.src é atualizado com a URL do arquivo e nomeDaImagem.textContent é atualizado com o nome do arquivo.
// Este fluxo permite que o usuário selecione um arquivo, veja uma pré - visualização da imagem e saiba o nome do arquivo carregado, usando assincronicidade e promessas para gerenciar operações de leitura de arquivo de forma eficiente e responsiva na página web.
// variavel.replace() usada para fazer substituições de string da mais complexas a mais simples podendo ser útil para criar mascara.Primeiro recebe como parâmetro o que deseja ser retirado e depois o que irá substituir.É possível criar uma lista de palavras com palavrão e depois substituir por * ou outra coisa.O problema é que ele substitui apenas a primeira palavra para resolver esse problema temos que usar regex semelhante a seguinte forma “/palavra/g” o ‘g’ serve para indica que a variavel é global





// Async Await
// na tag input é possivel validar o tipo de arquivo usando atributo accept
// promise (Promesa)


// JSON
// Não é js por mais que se assemelhei ao um object js
// Tds keys são as duplas only ("") e não pode haver virgula no final
// lida apenas com dados sem comentarios e funções, ele só aceita dados primitivos
// substitui o xml
// Necessario tratar os valores quando exportados
function jsonEjs() {
    const objetoOriginal = { chave: 'valor' };
    const copiaProfunda = JSON.parse(JSON.stringify(objetoOriginal));// clonagem profunda
    // json.parse converte de string para objeto
    // json.stringify converte de objeto para string
    copiaProfunda.chave = 'novoValor';
    console.log(objetoOriginal.chave); // Saída: valor

}

// IMPORT E EXPORT
function ImpExp() {
    // Há dois jeito CJS(Commom javascript) ou ESM(EcmaScript Modules)
    // Modulos serve para esconder detalhes da implementação tornando
    // mais organizado (Fragmentar o problema)

    // CJS(Commom javascript)
    //   baseado na require cria alterações do objeto padrão global exports ao inves de usar metodos para isso
    //   objeto global exports é sempre definido internamente pelo Node.js. Assim, quando queremos exportar
    //   vários módulos, atribuímos estes módulos como propriedades do objeto exports:
    //      exports.soma = function(num1, num2) { return num1 + num2;}
    //        Or:
    //      module.exports = soma;
    //   Agora para import:
    //   const soma = require('./operacoes.js');
    // arquivo 'operacoes.js'
    // Usando desestruturação de OBJs
    module.exports = {
        soma(num1, num2) { return num1 + num2; },
        multiplica(num1, num2) { return num1 * num2; },
        subtrai(num1, num2) { return num1 - num2; }
    };
    // arquivo 'index.js'
    const { soma, multiplica } = require('./operacoes.js');
    //obj completo e usa tds metodos
    const operacoes = require('./operacoes.js');
    const numerosSomados = operacoes.soma(4, 2) //6

    //import no inicio e export antes da declaração de funções or etc

    // ESM(EcmaScript Modules)
    // usa import e export como navegadores utilizam empacotadores para otimizar
    // o serviço no node é necessario a fragmentação do code acessados apenas
    // pelo proprio arquivo sendo privados a não ser que sejam explicitamente
    // exportados e importados em outro arquivo/módulo. Para export (export default validaCartao;) 
    // para usa-la import validaCartao from 'validacoes/validacaoCartao.js';
    // Exportar only necessario (import { body } from 'express-validator';)
    // Pode se dizer que é um sistema de segurança pois limita o acesso de arquivos, fun, class e etc
    // deve conter a extensao no caminho != de cjs

    //     Importante: Para utilizar o ESM em aplicações 
    //     Node.js, é necessário adicionar a propriedade 
    //     type: module no arquivo package.json, conforme

    // exportação: arquivo 'operacoes.js'
    // export function soma(num1, num2) {return num1 + num2;}
    // export function multiplica(num1, num2) {return num1 * num2;}
    // importação: arquivo 'index.js'
    // import { soma, multiplica } from './operacoes.js';

    // USE desestruturação
    // export { soma, multiplica, subtrai };
    // import { soma, multiplica, subtrai } from './operacoes.js';

    // DEFAULT para especificar
    // export default validaCartao;

    // Enquanto a exportação com export só pode ser usada em funções
    // nomeadas, a exportação padrão com export default pode ser feita
    // em funções anônimas e também em objetos literais

    // forma abreviada de importar varios modulos (desde que não sejam default)
    // import * as operacoes from './operacoes.js';

    // Extensão .mjs (módulo javascript) não a efeito pratico
    // Extensão .cjs (commonjs) não a efeito pratico
    // não misturar as duas juntas

}

function exportarMaisTarde() {
    // API (Application Programming Interface)
    // LIda com dado fazendo solicitação de informações. http é um exemplo.

    // API SOAP (Simple Object Access Protocol)
    // protocolo de comunicação entre sistemas que utiliza XML para troca de mensagens.
    // definada em Envelope com elementos raiz header(opcional) e body, cabeçalho transmiti
    // informações relaconadas a autenticacao e segurança, id de transações e outros detalhes.
    // normalmente possuem sistemas dde segurança rigidos oferece suporte a ws-security. 
    // Exemplo: SOAP transações financeiras, reserva de viagens, serviços de saúde, integração
    // de sistemas empresariais e etc.

    // API REST (Representational State Transfer)
    // é um estilo de arquitetura para desenvolvimento de aplicações web. normalmente usa
    // json e seus protocolos padrão, deve estar alinhado com 
    // 1.interface uniforme http com uris e crud
    // 2.separação cliente server um independente do outro
    // 3.sem estado definido cada solicitação precisa ter as informações necessárias para
    // o processamento. 
    // 4.capacidade de cache tanto server como client
    // 5.arquitetura de sistema em camadas cada camada com funções especificas
    // 6.codigo sob demanda(opcional)permite ao servidor enviar código executável (como
    // applets Java ou scripts JavaScript) para ser executado pelo cliente, estendendo
    // as capacidades do cliente de forma dinâmica

    // REST x SOAP
    // - SOAP é um protocolo, enquanto o REST é um padrão de arquitetura;
    // - SOAP é independente de linguagem, transporte e até plataforma, 
    // enquanto o REST requer o uso do protocolo HTTP;
    // - SOAP é uma abordagem muito presente ainda em sistemas legados, enquanto
    // REST surgiu posteriormente e costuma ser vista como uma solução mais
    // eficiente em questão de performance nos casos bases em web;
    // - Para contextos mais leves como IoT (Internet das coisas), desenvolvimento
    // de aplicações serverless e mobile é recomendado o REST, para sistemas que
    // requerem mais segurança e muitas necessidades empresariais é recomendado o SOAP;
    // - O formato dos dados do SOAP é somente por meio de XML, enquanto o REST oferece
    // suporte a XML, JSON, HTML e texto simples.

    // GraphQL
    // lp de consulta para APIs otimizado para comunicação de requisição e resposta. Funciona numa
    // camada intermediária entre o cliente e o servidor, onde entrega e solicita apenas o necessario.
    // compátivel com todas lp usadas no mercado.

    // Webhooks
    // são notificações enviadas por um servidor para um cliente quando ocorre um evento.
    // normalmente são usados para atualizar ou notificar aplicações em tempo real(usa http).
    //  O processo de webhook envolve 3 partes principais:
    //      provedor: a aplicação que enviará as notificações
    //      consumidor: a aplicação que receberá as notificações
    //      próprio webhook: ponto de integração entre os dois sistemas
    // webhooks são definidos como APIs reversas, pois permitem que um servidor envie dados quando
    // necessário, em vez de o cliente enviar uma solicitação e aguardar ou verificar periodicamente.

    // Políticas de APIs
    //      Privada, Parceiro(uber) somente com permissão para uso & pública.



    // HTTP:
    // protocolo de rede que faz solicitações de arquivos. estabelece contato com sevrer e recaminha uma requissição onde pode vriar conforme o metodo
    // essa interação ocorre por meio do TCP (Transmission Control Protocol), que garante uma comunicação confiável e orientada à conexão.
    // cada requissição é de forma independente sem informações das anteriores. Para agilizar os mecanismos tem os cookies e ssesssões. Protocolo
    // famoso API. 
    //      Proxies
    //          Representantes atuam como intermediarios entre cliente e server lidando com tráfego de dados entre eles, exemplo forward proxy
    //          cliente e o servidor, agindo em nome dos clientes para buscar recursos dos servidores; e o reverse proxy, posicionado entre 
    //          clientes e servidores, mas operando em nome dos servidores para receber solicitações dos clientes. Alem de otimizar e melhorar 
    //          a eficiencia utilizam mecanismo de cache local. Tem beneficios de segurança permitindo filtragem, controle e anonimato web. 
    //          Adicionalmente, proxies podem realizar balanceamento de carga entre servidores, acelerar o carregamento de páginas por meio 
    //          da compressão de dados, e fornecer logging e monitoramento para análise de padrões de uso e garantia de conformidade 
    //          com políticas de segurança.
    // 
    //      Métods http get, post, put e delete cada um com suas funções.
    //      URI (Uniform Resource Identifier) Os recursos na web são identificados por URLs (Uniform Resource Locators) ou URIs. 
    //          Uma URI é uma sequência de caracteres que identifica um nome ou um recurso na web.
    //      headers contem informações add sobre as requisições ou resposta.
    //      hipermídia arquivos que o http suporta permitindo a transmissão de diversos dados online
    //      
    //      Request-Response requisição feita do clint para server para recurso ou ação.
    //      request line, status line etc.
    //      
    //      get solicitações especificas mais comum controle de cache e autenticação
    //      head semelhante ao get mas usado para informações sobre recurso do cabeçalho da resposta sem o corpo util para metadados
    //          sem carregar o recurso completo.
    //      post usado em form e recurso no server
    //      put para enviar dados, criar, atualizar um recurso especifico na URI, substituindo completamente o recurso
    //      delete remoção de recurso se tornando inacessivel
    //      trace diagnóstico semelhante ao debug, permite que o cliente veja as alterações que foram feita no caminho até o server
    //      options para obter as opções de comunicação permitidas para um recurso ou servidor. Isso pode incluir métodos permitidos
    //          cabeçalhos aceitáveis, entre outras informações relevantes.
    //      connect para estabelecer conexão de tunel com sever seguras atraves do proxy http com ssl/tls normalmente
    //
    //      http x https
    //      htpp não usa criptocrafia diferente do outro que usa o ssl/tls

}