// CONCEITUANDO O JS
// Criada  a partir do CMM feita pela cepewwave mas decidirão mudar o nome para ScriptEase que
// despertou interesse da netscape que estava numa briga com a microsoft.Em 1945  a linguagem mudou
// para Mocha de liveScript a netscape estava em negociação com a SUN Microsystem que estava fazendo
// o java então a netscape SUN fizeram uma jogada de marketing de fundir o nome das 2 linguagens
// elas são semelhante porque foram baseadas em C.
// Tipagem dinâmica fraca
// Client Side e Server
// Há mais vulnerabilidade por estar do lado do cliente, ainda mais quando se trata de validações


// exibe uma mensagem no console semelhante ao echo
// console.log("; Não é obrigatório no JS, mas seja consistente ou use ou não use.");

// Undefined X Null
// Undefined é quando a var não foi declarada e null é um valor atribuido e intencional
// NaN Not a Number é um valor que não é um número
// é possivel declarar numeros octo e hexadecimal
// VAR é de escopo global, let e const são de escopo local
function testeDeEscopo(){
    if (true){
        var testeGlobal = "Global";
        let testeLocal = "Local";
        let testeNull = null;
        let testeUndefined = undefined;
    }
    console.log(typeof testeGlobal);
    console.log(typeof testeLocal);
    console.log(typeof testeNull);
    console.log(typeof testeUndefined);
}

// Operador ternário 
// pode substituir if else em caso simples
function opTernario(){
    let num = 10;
    //primeiro condição, segundo caso for verdadeira, terceiro caso for falsa
    let result = num > 5? "Maior que 5" : "Menor que 5";
    console.log(result);
}

//Funções
function funcoesGenericas(parametro){
    //Variaveis para teste
    let seq = 183872394238;
    let palavra = "DNA";
    let frase = "Apenas os mortos verão o fim da guerra";

    // Parse (conversão)
    console.log(parseFloat(seq));
    console.log(parseInt(palavra));//NaN
    console.log(seq.toString());
// é usado para conversão
}



// Tipos primitivos são sempre passados como um valor, enquanto tipos não primitivos sempre são passados por referência.
// Objetos JS
// Quando criamos um objeto dentro do JavaScript ocorre a reserva de um espaço na memória local que chamamos de heap.Ao fazer isso, o que o JavaScript guarda na nova variável não é o valor do Objeto que criamos, mas sim o endereço de memória onde os valores estão salvos.Dessa forma, ao declararmos uma variável que armazena informações dentro do heap, o que estamos fazendo é "alugar" um espaço da memória, o qual funções podem acessar.Isso torna as operações muito mais eficientes, mas tem um problema: quaisquer alterações no conteúdo armazenado pelos objetos não primitivos afetam todas as variáveis que o referenciam.Como essas variáveis são links para espaços na memória, dizemos que elas são um "tipo de referência" enquanto que os tipos primitivos são "um tipo de valor".Notação de objeto javascript é um formato de transferência de dados usado em chamadas AJAX entre o navegador é um servidor.Por mais que seu nome tenha javascript ele é mais restrito que um obj.Javascript enquanto num obj.Javascript ele teria as propriedades no JSON ele tem apenas os valores.O JSON não pode ter funções, comentários e todo texto sempre tem aspas duplas e elas sempre têm prioridade.
//     Heap
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
// Splice() recebe a posição e quantidade de itens desejados
// Push() add na última posição do array

// Unshift() add no começo do array

// Pop() remove o último item do array

// Shift() remove o primeiro item de um array

// Sort() ordena em ordem alfabética

// Reverse() reverte o array


// Seletores

//     querySelectorAll() semelhante ao querySelector porém seleciona todos elementos em vez de apenas o primeiro.Caso não tenha nada ele 

// Selecionar filhos para isso basta usa um dos query selector passando o pai depois o filho como argumento

// Erro querySelector ao passar para parâmetro o elemento que deseja seleciona as vezes no query selector pode ocorrer erro eu consegui resolver criando uma variável com o valor para ser passo para o querySelector em vez de passar direto.

//     Strings

// Toda string é uma array de caracteres
// Interpolação funciona nas versões mais nova dentro de ‘ ‘ basta utilizar ${ variável }, substituindo a concatenação por “” + “”
// variavel.replace() usada para fazer substituições de string da mais complexas a mais simples podendo ser útil para criar mascara.Primeiro recebe como parâmetro o que deseja ser retirado e depois o que irá substituir.É possível criar uma lista de palavras com palavrão e depois substituir por * ou outra coisa.O problema é que ele substitui apenas a primeira palavra para resolver esse problema temos que usar regex semelhante a seguinte forma “/palavra/g” o ‘g’ serve para indica que a variavel é global

// toString() retorna como texto

// Join() retorna com valor de dentro das aspas separando cada item

// indexOf() retorna a primeira posição do parâmetro, presente na variável

// lastIndexOf() retorna a última posição do parâmetro, presente na variável

// Slice() recebe como parâmetro a posição inicial e a última que deseja ser retornada é semelhante a substring

// toLowerCase() deixa todas as letras minúsculas e o toUpperCase() deixa em letras maiúsculas 


// DOM Document Object Model
// Através dele é possível alterar tudo no html ele é responsável por interpretar, alterar e organizar todos elementos HTML
// Window & DOM: dom tem como limite do documento da página e window janela do Browser
function funcoesDOM(){
    //usam document pois é arquivo raiz e const pois n havera alterações nelas
    const identificacao = document.getElementById("");
    const classe = document.getElementsByClassName("");// retorna uma array
    const tagName =document.getElementsByTagName("");// retorna uma array
    const selecionarPrimeiro = document.querySelector(""); // seleciona primeiro elem.
    const selecionarVarios = document.querySelectorAll("div p"); // job nodelist != arrays.

}


//     seletor.style.proriedade

// Quando se refere a eventos pode chamar uma função no evento que está na TAG ou seleciona o elemento e utilizar.onclick = funcao;

// Validation

// Validity() retorna verdadeiro ou falso

// PatternMismatch verifica pattern

// SetCustomValidity personaliza a resposta para o usuário

// Template string ou Template literals
// Substitui a concatenação de texto e variáveis usando ${ variável } para representar a variável e trocando o "" por '' apenas isso não é necessário colocar +.


//     Events

// onchaged para quando houver alteração elemento

// onclick para quando clicarem no elemento

// onmouseover quando o mouse estiver em cima do elemento onmouseout quando o mouse não estiver em cima do elemento
// De vez add propriedades em eventos add classes com essas propriedades

// onmousedown
// onmouseup
// onfocus





// Ao utilizar o get do dom basta colocar[] com o número desejado para seleciona - lo.

// innerText seleciona apenas o texto já o innerHTML seleciona os textos e tags html

// É possível declara os eventos por javascript selecionando o elemento e usando a função addEventListener('event', 'function') passando por parâmetro o evento e depois a função sem o parêntese


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

// Para importar basta usar import { Class } from “caminho / arquivo.js”

// Package.js a tag script tem a função de inicializar todas instruções nela quando usado o comando npm start


//     ForEach & map 
// O método forEach() executa uma dada função em cada elemento de um array.O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.


// armazenamento de informações(cachê)
// window.localStorage.setItem('key', 'value') tem armazenamento local quando queremos pegar esse item usamos get no lugar do set para pegar o item é apenas necessário a key.Já window.sessionStorage.setItem serve para apenas uma sessão. 


// Tagged Template String ou Template Literals
// Introduzido no ES6 onde possibilita criar cadeias de carácter usando interpolação antes era usado “” e + mas deixa o codigo confuso quando muito grande.É uma chamada de função onde os argumentos são derivados de uma template literal seus valores desses argumentos incluem um Template Object(que nada mais é do que o objeto representativo das Template Literals) e os valores produzidos após avaliação das expressões embutidos em uma Template Literals(${}).A tag nada mais é do que a própria função que será chamada através da utilização da Template Literals.Vamos ao exemplo para ficar mais claro.
// Estamos mais acostumados a ver chamadas de funções dessa forma:
// minhaFunction = (texto) => {
//     console.log(texto);
// }

// minhaFunction( ‘texto como parâmetro’);
// Porém, utilizando Tagged Template Literals, nossa chamada para a função seria executada da seguinte maneira:
// minhaFunction`texto como parâmetro`;
// aturalmente pensamos que as duas chamadas são equivalentes, porém isso NÃO é verdade.
// O que ocorre é que quando utilizamos Template Literals para realizar a chamada de uma função, o parâmetro pode ser passado de duas formas.
// Quando nossa Template Literals é composta apenas de uma string, sem a necessidade de se avaliar valores de variáveis interpoladas, nosso parâmetro é um array, veja abaixo:
// //As duas chamadas abaixo são equivalentes!

// minhaFunction([‘texto como parâmetro’]);
// minhaFunction`texto como parâmetro`;
// Repare que recebemos o parâmetro sendo um array, de fato, isso não é algo trivial, mas calma!
// Tem explicação!
// Lembra lá em cima no começo do texto quando relembramos Template Literals(Template Strings) ?
//     Uma dos poderes desse Template Literals é a capacidade de interpolar os valores de variáveis e é justamente por isso que recebemos um array como parâmetro.
// Vamos ao exemplo, reescrevendo nossa função:
// minhaFunction = (arrayDeStrings, palavra) => {
//     console.log(`${arrayDeStrings[0]}${palavra}${arrayDeStrings[1]}`);
// }

// const palavra = 'alura';

// minhaFunction`Eu estudo na ${palavra} todos os dias`;
// Quando utilizamos a notação ${ } no meio de uma sentença, nossa string é quebrada ao meio, vamos ver como seria uma função semelhante utilizando a notação que conhecemos.
//     minhaFunction = (arrayDeStrings, palavra) => {
//         console.log(`${arrayDeStrings[0]}${palavra}${arrayDeStrings[1]}`);
//     }

// const palavra = 'alura';

// minhaFunction(['Eu estudo na ', ' todos os dias'], palavra);
// Veja agora que na verdade, temos um Array de cadeias de caracteres e essas cadeias são determinadas pelo posicionamento da nossa interpolação!
// Analogamente, todos os valores interpolados são passados um a um após o Array, respeitando a ordem em que aparecem na Template Literals, veja o exemplo abaixo:
// minhaFunction = (arrayDeStrings, palavra, periodo) => {
//     console.log(`${arrayDeStrings[0]}${palavra}${arrayDeStrings[1]}${periodo}`);
// }

// const palavra = 'alura';
// const periodo = 'semana';

// // As duas chamadas são equivalentes!

// minhaFunction`Eu estudo na ${palavra} todos os dias da ${periodo}`;

// minhaFunction([‘Eu estudo na ' ,' todos os dias da '], palavra, periodo);

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

// // carrega e executa outro script em paralelo, com callback
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


// Arrow fun
// Fun anomima

// DocString comentário usado para e



//     3Para saber mais: arrow functions
// Próxima Questão
// ·	
// Arrow functions, ou funções seta, são uma maneira mais curta e concisa de escrever funções em JavaScript.Elas foram introduzidas no ES6(ECMAScript 2015) e rapidamente se tornaram populares entre os desenvolvedores devido à sua sintaxe simplificada e ao comportamento diferenciado do this.Vamos mergulhar no mundo das arrow functions para entender como elas funcionam e como podem ser aplicadas em diferentes contextos.
// Uma arrow function é expressa através de uma "seta"(=> ).A sintaxe básica é a seguinte:
//     const nomeDaFuncao = (parametros) => {   // corpo da função }; Copiar código
// Por exemplo, uma função que soma dois números pode ser escrita como:
//         const soma = (a, b) => { return a + b; }; Copiar código
// Sintaxe Concisa
// Uma das grandes vantagens das arrow functions é a possibilidade de escrever funções de maneira mais concisa.Se a função tiver apenas uma linha de código que retorna um valor, você pode omitir as chaves { } e a palavra - chave return:
//         const soma = (a, b) => a + b; Copiar código
//         Parâmetros
// Se a função tiver apenas um parâmetro, você pode omitir os parênteses:
//         const quadrado = x => x * x; Copiar código
// Funções sem Parâmetros
// Se a função não tiver parâmetros, você deve usar parênteses vazios:
//         const logMensagem = () => console.log('Olá, mundo!'); Copiar código
// Arrow Functions e o this
// Um dos aspectos mais importantes das arrow functions é como elas lidam com o this.Diferentemente das funções tradicionais, o valor de this dentro de uma arrow function é determinado pelo contexto onde a função foi criada, e não onde ela é chamada.Isso é particularmente útil em callbacks e funções que são passadas como argumentos.
// Exemplo Prático
// Considere o seguinte código que usa uma função tradicional:
//         function Pessoa() {
//             this.idade = 0; setInterval(function crescer() {
//                 this.idade++; // Aqui, `this` não se refere ao objeto Pessoa   }, 1000); } Copiar código
// Neste caso, this dentro de crescer não se refere ao objeto Pessoa, mas isso pode ser corrigido usando uma arrow function:
//                     function Pessoa() {
//                     this.idade = 0; setInterval(() => {
//                         this.idade++; // Aqui, `this` se refere ao objeto Pessoa   }, 1000); } Copiar código
// Comparação com Funções Tradicionais
//                         Enquanto as arrow functions são úteis em muitos casos, elas não são uma substituição completa para as funções tradicionais.Por exemplo, arrow functions não têm seu próprio this, arguments, super ou new.target e não podem ser usadas como construtores.
// Quando Usar Arrow Functions
// ·	Em callbacks ou funções passadas como argumentos.
// ·	Quando você precisa de uma função anônima(por exemplo, em métodos de array como map, filter, reduce).
// ·	Quando o comportamento léxico do this é desejado.
// Quando Evitar Arrow Functions
// ·	Métodos de objeto que você espera usar this para acessar o próprio objeto.
// ·	Funções que você planeja usar como construtores(com a palavra - chave new).
// ·	Quando você precisa de uma função com nome para melhorar a legibilidade ou para fins de depuração.
//         Resumindo
// As arrow functions são uma adição poderosa ao JavaScript, oferecendo uma sintaxe mais limpa e um comportamento de this mais previsível.Elas são especialmente úteis em contextos onde o this precisa ser preservado, como em callbacks e funções passadas como argumentos.No entanto, é importante entender suas limitações e saber quando é mais apropriado usar funções tradicionais.Com a prática, você se tornará confortável em decidir qual tipo de função usar em diferentes situações.




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
//         return new Promise((resolve, reject) => {         // Cria um novo leitor de arquivo         const leitor = new FileReader();          // Define o que acontece quando a leitura é completada com sucesso         leitor.onload = () => {             // Resolve a Promise com um objeto contendo a URL e o nome do arquivo             resolve({ url: leitor.result, nome: arquivo.name });         };          // Define o que acontece em caso de erro na leitura do arquivo         leitor.onerror = () => {             // Rejeita a Promise com uma mensagem de erro personalizada             reject(`Erro na leitura do arquivo ${arquivo.name}`);         };          // Inicia a leitura do arquivo como uma URL data (base64)         leitor.readAsDataURL(arquivo);     }); } Copiar código
//             Promise: A função retorna uma Promise que pode ser resolvida(resolve) quando a leitura do arquivo é concluída com sucesso ou rejeitada(reject) se ocorrer algum erro durante a leitura.
//                 FileReader: É utilizado para ler o conteúdo de arquivos selecionados pelo usuário.
// Event Handlers: onload é acionado quando a leitura é bem - sucedida, enquanto onerror é acionado se ocorrer algum erro durante a leitura.
//                 readAsDataURL: Inicia a leitura do arquivo como uma URL de dados(data URL), que é uma representação base64 do conteúdo do arquivo.
// Em seguida, vamos construir um ouvinte para quando acontecer alguma mudança no input de upload.Esse ouvinte que chamará a funcionalidade de leitura do arquivo.
//                 // Seleciona elementos HTML da páginaconst imagemPrincipal = document.querySelector(".main-imagem"); const nomeDaImagem = document.querySelector(".container-imagem-nome p"); const inputUpload = document.getElementById("input-upload");  // Adiciona um ouvinte de evento para o input de upload de arquivo inputUpload.addEventListener("change", async (evento) => {     // Obtém o arquivo selecionado pelo usuário     const arquivo = evento.target.files[0];      // Verifica se um arquivo foi selecionado     if (arquivo) {         try {             // Aguarda a leitura do conteúdo do arquivo             const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);              // Atualiza a imagem principal com a URL do arquivo             imagemPrincipal.src = conteudoDoArquivo.url;              // Atualiza o nome da imagem na página             nomeDaImagem.textContent = conteudoDoArquivo.nome;         } catch (erro) {             // Em caso de erro na leitura do arquivo, exibe uma mensagem de erro no console             console.error("Erro na leitura do arquivo:", erro);         }     } }); Copiar código
//                 querySelector: Seleciona elementos HTML na página usando seletores de classe(".main-imagem" e ".container-imagem-nome p").
//                     inputUpload.addEventListener: Adiciona um ouvinte de evento para o input de upload de arquivo(inputUpload).O evento change é acionado quando o usuário seleciona um arquivo.
// Evento change: Quando o evento é acionado, o código dentro da função assíncrona(async (evento) => { ... }) é executado.
// Obtendo o Arquivo: evento.target.files[0] obtém o arquivo selecionado pelo usuário no input de upload.
// Await e try...catch: await lerConteudoDoArquivo(arquivo) espera pela conclusão da função lerConteudoDoArquivo e captura qualquer erro usando try...catch.
// Atualização da Página: Se a leitura for bem - sucedida, imagemPrincipal.src é atualizado com a URL do arquivo e nomeDaImagem.textContent é atualizado com o nome do arquivo.
// Este fluxo permite que o usuário selecione um arquivo, veja uma pré - visualização da imagem e saiba o nome do arquivo carregado, usando assincronicidade e promessas para gerenciar operações de leitura de arquivo de forma eficiente e responsiva na página web.

const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
const bonusAnual = 3000;

const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;
console.log(resultado);