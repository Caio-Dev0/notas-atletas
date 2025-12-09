let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];
function calcularNotas(){
  let notas = atletas.map(a => a.notas.slice())
  let notasOrdenadas = notas.map(a => a.sort((a, b) => a - b))
  let novasNotas = notasOrdenadas.map(a => a.slice(1, 4))
  let notasCalculadas = novasNotas.map(a => a.reduce((a, b) => a + b, 0))
  let notasMedias = notasCalculadas.map(a => a / novasNotas[0].length)

  for(i = 0; i < atletas.length; i++){
    console.log(`Atleta: ${JSON.stringify(atletas[i].nome)}
    Notas obtidas: ${JSON.stringify(atletas[i].notas)}
    Media obtida: ${JSON.stringify(notasMedias[i])}`)
  }
}

calcularNotas()
