//nome

console.log(process.argv)

const argv = process.argv.slice(2)

console.log(argv)

const nome = argv[0].split('=')[1]
console.log(nome)

const idade = argv[1].split('=')[1]
console.log(idade)