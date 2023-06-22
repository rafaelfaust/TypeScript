const nome: string = "Rafael"

const idade: number = 41

const masculino: boolean = true

let idades: number [] = [1, 4, 34, 41]
//let idades: array<number>[] = [1, 4, 34, 41]

let nomes: string [] = ["Henrique", "Joaquim", "Maíra", "Rafael"]

let obj: any = {x:0}

function imprimirCoordenadas(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x)
  console.log("The coordinate's y value is " + pt.y)
}

imprimirCoordenadas({ x: 3, y: 7 })