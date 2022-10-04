// esse vai ser o type de um item do grid.
// ele precisa ter um item, que vai ser o próprio item que vamos exibir no grid.
// a melhor maneira de identificarmos um item é botando a posição do item no array de Items, que é o array de itens que temos para exibir. Quando criarmos nosso grid, criamos ele em 2 processos, criamos um grid sem nada, e depois vamos preencher esse grid com nossas informações, logo, a primeiro momento nosso item não vai ter nada, então vai ser nulo, logo, nosso item vai aceitar ou um numero ou nulo.
// temos o item que vai ser exibido.
// pensando na lógica do próprio jogo, temos que saber quando a carta do item do grid, está sendo exibido ou não está sendo exibido, então podemos ter um dado show, que é um boolean, para saber se ela está sendo exibida ou não.
// quando acertarmos duas cartas, a partir de agora as duas cartas tem que ficar sendo exibidas, não viram novamente, só quando reiniar nosso jogo, pois acertamos, então temos que diferenciar o que está sendo exibido naquela jogada, naquela tentativa, e o que está sendo exibido porque o jogador acertou, dai vai ser uma exibição permanente, dai temos 2 variáveis, uma quando está sendo exibida na tentativa ou não, e outra quando está sendo exibida permanentemente, que é a variável, permanentShown, que é superior ao show, logo, quando formos verificar se a carta está desvirada ou não, primeiro vemos o permanentShown, se ele estiver true então exibe, não importa se está selecionada ou não, se permanentShown for false, não é permanent, vamos verificar se permanent estiver false e shown estiver false, então não exibe, se permanent estiver false e shown estiver true, faz parte da jogada, quer dizer que estamos no meio da jogada para verificar aquela carta.
// só precisamos saber essas informações do item do noss grid, precisamos saber só qual é o item, se ele está sendo exibido e se ele está sendo exibido de forma permanente.
export type GridItemType = {
    item: number | null;
    shown: boolean;
    permanentShown: boolean;
}