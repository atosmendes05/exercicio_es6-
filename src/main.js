
const alunos = [
    {nome:'atos',nota:6},
    {nome:'geovanna',nota:7},
    {nome:'maria',nota:5},
    {nome:'neto',nota:6},
    {nome:'gabriel',nota:5}
]


const media = () => {
    let i = 0

    while(i < alunos.length){
        if(alunos[i].nota >= 6){
            console.log(`aluno ${alunos[i].nome} com a nota ${alunos[i].nota} foi aprovado`)
        }
        i = i + 1
    }
}

media()