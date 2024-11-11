import 'dart:io';

void main() {

  print('Hello mother fuck, My name is David !, What is your name?');

  var name = stdin.readLineSync();

  print("Go run $name, you're a fucking idiot!");
  print("What fuck you're doing here? G-O R-U-N-N-I-N-G!");
  print("how many kilometers mother fuck!?");
  int km = 2 * (int.parse(stdin.readLineSync()!));
  print("I heard $km your stupid!? yes or no?");
  bool question = stdin.readLineSync()!.toLowerCase() == 'yes';

}


// // Variáveis primitivas
// int numeroInteiro = 10;
// double numeroDecimal = 3.14;
// String texto = "Este é um texto.";
// bool isAtivo = true;

// // Variáveis compostas
// List<String> nomes = ["Ana", "João", "Maria"];
// Map<String, String> agenda = {"Ana": "1234-5678", "João": "9876-5432"};
// Set<int> numerosUnicos = {1, 2, 3, 4, 3}; // O número 3 só aparece uma vez

// // Acessando valores
// print("Número inteiro: $numeroInteiro");
// print("Número decimal: $numeroDecimal");
// print("Texto: $texto");
// print("Ativo: $isAtivo");

// print("Primeiro nome da lista: ${nomes[0]}");
// print("Telefone da Ana: ${agenda['Ana']}");
// print("Números únicos no conjunto: $numerosUnicos");