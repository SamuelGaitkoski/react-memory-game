// aqui em helpers (ou util), vamos criar a função que vai formatar o tempo de segundos para minutos também, para pegar o timeElapsed da forma como ele está e formatar no formato 00:00.
// essa função formatTimeElapsed vai receber o timeElapsed, que é do tipo number, e vai ter um retorno de string ((timeElapsed: number): string), como a função vai ter um retorno só, não precisamos botar o tipo de retorno dessa função. Chamamos o timeElapsed de seconds, que é o que recebemos.
export const formatTimeElapsed = (seconds: number) => {
    // dos segundos pegamos a quantidade de minutos, Math.floor para pegar só o que for inteiro disso, nada de numero quebrado para minutes.
    let minutes = Math.floor(seconds / 60);
    // para pegar os segundos, precisamos diminuir os segundos dos minutos, dai por exemplo 70 segundos vão ficar 70 segundos menos (minutos * 60), dai pegamos os segundos e diminuimos dos próprios minutos vezes 60: seconds = seconds - (minutes * 60), ou podemos fazer da forma com está abaixo, -=.
    seconds -= (minutes * 60);

    // precisamos transformar isso em string, para poder exibir, mas minutos e segundos quando forem menor que 10, precisam ter um 0 do lado esquerdo.
    let secString = `${seconds < 10 ? '0' + seconds : seconds}`;
    let minString = `${minutes < 10 ? '0' + minutes : minutes}`;

    // retornamos dai isso com tudo formatado direitinho.
    return `${minString}:${secString}`;
    // agora temos uma função que pega o que temos em segundos e formata para minutos e segundos.
}