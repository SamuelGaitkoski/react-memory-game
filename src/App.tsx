import { useEffect, useState } from 'react';
// vamos importar nosso styled, nosso arquivo de estilo, dai importamos tudo, chamando tudo de C, do arquivo App.styles.ts, agora tudo que criarmos no App.styles.ts, aqui no App podemos usar por C.Container por exemplo.
import * as C from './App.styles';

// importando a logo de src/assets
import logoImage from './assets/devmemory_logo.png';
// importando o icon de restart do jogo
import RestartIcon from './svgs/restart.svg';

// importando nosso componente InfoItem aqui
import { InfoItem } from './components/InfoItem';
// importando o componente Button aqui
import { Button } from './components/Button';
import { GridItem } from './components/GridItem';

import { GridItemType } from './types/GridItemType';
// importando nossos items
import { items } from './data/items';
import { formatTimeElapsed } from './helpers/formatTimeElapsed';

// Introdução ao Projeto
// vamos criar nosso projeto do jogo da memória
// temos um tempo rolando, quantidade de movimentos, botão para reiniciar, quando clicamos nos botões iguais, acertamos, ele sempre conta os movimentos, dai quando terminarmos todos as figuras com pares, para o tempo e os movimentos. Para reiniciar tudo apertamos no botão e o tempo e tudo reinicia.
// projeto também é responsivo.
// as imagens para o projeto estão dentro de src, e são as pastas assets e svgs

// Criando a estrutura 1
// criando a estrutura base do nosso projeto.
// para a estilização desse projeto vamos usar a biblioteca styled components, para instalar ela damos npm install styled-components, para funcionar com o typescript damos npm install -D @types/styled-components, para instalar os types também.
// excluímos os arquivos App.test.tsx, App.css.
// excluímos tudo que tinha no App.tsx.
// do lado esquerdo do nosso projeto vamos ter as informações do mesmo, e do lado direito temos o grid com os botões e o jogo em si, teremos essa divisão clara entre esquerda e direita.
// as estilizações do nosso componente App estarão em src/App.styles.ts.
// dentro da do Container, que é a nossa div geral, vamos fazer a divisão entre esquerda (área das informações) e direita (área do grid/jogo).

// Criando a estrutura 2
// agora vamos criar a estilização dos componentes da nossa estrutura

// Criando o componente InfoItem
// vamos criar a parte das informações que vão ser exibidas, que são o tempo e a quantidade de movimentos feitos no jogo.
// QUANDO USAMOS UMA SEQUENCIA DE CODIGOS EM MAIS DE UM LUGAR, É INTERESSANTE COMPONENTIZAR ISSO, TRANSFORMAR ISSO EM UM COMPONENTE, pois dai podemos exibir quantas informações quisermos, todas elas com o mesmo layout, pois teremos um componente para isso, e é o que faremos aqui, criando a pasta componentes, a pasta InfoItem, com o nome do nosso componente, e dentro dessa pasta vamos criar 2 arquivos, index.tsx e styles.ts, um de estilização e o componente de fato, dai nosso componente fica dentro dessa pasta, e tudo relacionado a ele também.

// Criando o botão
// Vamos concluir o botão, que é o que falta na parte esquerda do sistema
// É BOM COMPONENTIZAR ITENS ESPECÍFICOS E ÚNICOS, ENTÃO PODEMOS COMPONENTIZAR ESSE BOTÃO, QUE TEM ÍCONE, ETC, ESSE BOTÃO DEMANDA VÁRIOS FATORES PARA FUNCIONAR CORRETAMENTE.
// Vamos criar o componente do botão em componentes/button/index.tsx e styles.ts

// Fazendo os itens do jogo
// vamos focar na parte da direita agora, em montar o nosso grid dinamicamente, pois em cada jogo os itens tem que ficar em posições aleatórias, então temos que montar o nosso jogo de forma aleatória.
// temos que fazer a base do grid antes de mostra-lo na tela.
// temos que ter uma lista em algum lugar, lista das opções disponíveis que temos, que podemos ver as imagens dos svgs, temos 6 opções, precisamos de uma lista com 6 opções, então, como é um jogo da memória e cada item são exibidos 2 vezes na grid, precisamos ter uma lista com 12 caixinhas sendo exibidas.
// em src, vamos criar uma pasta data, de dados, e vamos criar um arquivo Items.ts, que vai ser um arquivo simples, que vai catalogar as opções disponíveis de items que temos para exibir.

// Criando o Grid 1
// já temos a lista de items que temos que exibir, agora vamos criar o nosso grid de fato.
// nosso GridArea é o lado direito, vamos criar nosso grid dentro do Grid.
// a função resetAndCreateGrid vai ter a lógica do nosso grid, e vai criar o grid, e ela será executada quando clicarmos no botão Reiniciar, e também quando a tela carregar, essa função também vai ser executada, pois vai limpar tudo que tiver e iniciar nosso jogo, então, para isso usaremos o useEffect, pois assim que iniciarmos nossa aplicação, vamos rodar a função resetAndCreateGrid, que vai criar toda a estrutura do nosso jogo.
// que informações precisamos armazenar para que nosso jogo funcione, ja vamos importar o useState.
// precisamos saber se o jogo está ocorrendo ou não, então vamos criar o state playing.
// precisamos também da quantidade de segundos que passaram do nosso jogo, o tempo decorrido, então criamos a state timeElapsed, que vai ser do tipo number e vamos contar em segundos.
// estamos fazendo essa logica do que precisamos armazenar, porque antes de criarmos noss grid, vamos resetar, e então precisamos saber o que resetar, então temos que zerar todas as informações para então criarmos nosso grid.
// precisamos ter a quantidade de movimentos feitos até o momento, então criamos a state moveCount, que vai ser do tipo number e terá valor inicial 0.
// precisamos ter a quantidade de itens que estão sendo mostrados naquela jogada, quando mostrarmos a segunda carta, verificamos se elas são a mesma, se sim deixamos elas mostrando, se não viramos elas novamente, então vamos criar o shownCount, quantas exibições fizemos naquele momento.
// Precisamos ter um array com os grid, com os itens que estão na nossa tabela, as coisas não vão ficar exclusivas com o que está aparecendo na tela, no react precisamos ter tudo na memória, pois o resultado do que está na memória é exibido em tela. Contamos o tempo, movimentos, grid na memória, e pegamos o que está sendo contado na memória para exibir na tela.
// a state gridItems vai ser nosso grid de fato, cada um dos 12 itens, o que é cada um, quem está sendo exibido e quem não está. Agora como a state é do tipo array/lista, precisamos criar um type, para identificar de que coisa é essa lista, lista de que, vamos criar a pasta types, em GridItemType.ts, para identificar o tipo de um cada item dessa lista, o type de um item do grid, dai vamos usar o type GridItemType, que é um array de GridItemType, que é a lista dos items do nosso grid, e vai começar vazia.

// Criando o Grid 2
// agora que foram criados todos os states com as informações do nosso jogo, vamos ir para a função que vai resetar e criar o nosso grid.

// Criando o Grid 3
// vamos fazer o passo 2.2 agora, que é preencher o nosso grid que está vazio até então.

// Exibindo Grid na tela 1
// vamos exibir o nosso grid, após termos montado ele, vamos tornar visual tudo que está na memória.
// vamos no nosso componente C.Grid.
// Vamos criar um componente para cada componente do nosso grid, mas antes disso vamos criar o processo para exibir, que é um map no gridItems, para exibir o que estiver no array de items, no gridItems.

// Exibindo Grid na tela 2
// agora vamos tornar nossos items visualmente interessantes, vamos estilizar nossos items.

// Agora temos que fazer a lógica do nosso jogo funcionar, quando clicar em cada item da grid exibir eles, fazer o timer funcionar, fazer contar os movimentos.

// Fazendo timer funcionar
// vamos fazer o nosso tempo funcionar
// para isso temos que fazer 2 coisas diferentes. temos que fazer com que a nossa timeElapsed conte, comece a contabilizar. O próximo passo é exibir de forma certa e formatada o nosso tempo na tela.
// para fazermos o nosso timeElapsed funcionar corretamente, vamos ter que criar um timer, para contar os segundos. Vamos ter que fazer um timer para que a cada um segundo aumentemos 1 no nosso timeElapsed, para ficar incrementando essa variável timeElapsed. Para iniciarmos um timer, vamos ter que usar o useEffect

// Fazendo clique no grid
// agora vamos fazer o processo de abrir nossos items no nosso grid. 
// para isso vamos fazer 2 coisas juntas, vamos fazer o processo de abrir as caixas dos items do grid, e também fazer a contagem de items que estão sendo exibidos no grid.
// quando clicamos no item, ele roda o handleItemClick, e manda o index de qual item estamos clicando.

// agora, ja que temos 2 items sendo exibidos, temos que verificar se esses items são iguais, se sim mantemos eles, transformamos eles em permanent, e zeramos a contagem no nosso shownCount, para podermos clicar em outros items. Se os 2 items clicados não forem iguais, tiramos eles do shown, e zeramos o shownCount novamente para podermos ir para outra jogada, selecionar outros 2 items. Agora entramos em uma etapa de verificação do nosso jogo. Vamos agora para lógica mesmo do jogo da memória.

// Verificando movimentos 1
// agora vamos fazer as devidas verificações dos movimentos que estamos fazendo, adentrar na lógica do nosso jogo.
// vamps ter que criar uma função para que sempre que fizermos alguma modificação no nosso grid, por exemplo, quando selecionarmos 2 items no grid, temos que verificar se os 2 items são iguais, porque se forem iguais, temos que transformar eles em permanente, e se forem diferentes, temos que voltar eles para a posição original, e zerar a nossa contagem do nosso shownCount, isso nos dois casos. Bem como aumentar um movimento, mas isso faremos depois.
// temos que fazer uma função de verificação, logo um useEffect.

// Verificando movimentos 2
// vamos para a verificação 2 agora, quando os 2 items selecionados das grid não forem iguais.

// Jogo pronto. Se quisermos adicionar mais items no nosso grid, ou menos. Como nosso jogo está todo automatizado, simplesmente vamos em src/data/items.ts e adicionamos ou removemos items, e automaticamente ele vai dobrar o grid, de acordo com a quantidade de items que temos para exibir, e de acordo com a nossa opção para exibir.

// nosso jogo também está responsivo.

// Jogando projeto no github
// criamos nosso repositório no github
// git add .
// git commit -m "adding files to repo"
// git remote add origin https://github.com/SamuelGaitkoski/react-memory-game.git
// git branch -M main
// se dermos git branch podemos ver a branch que estamos, o git branch -M main muda a branch da master para a main
// git push -u origin main

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => {
    resetAndCreateGrid()
  }, []);

  // nosso useEffect vai criar um setInterval, vamos botar um return para que quando sair da memória, atualizemos, ou qualquer outra coisa aconteça na nossa aplicação ele zere esse timer, o return do useEffect serve para isso, dai usamos o clearInterval mandando nosso timer para ele zerar o nosso timer.
  // para o setInterval vamos passar uma função, que vai executar algo de 1000ms em 1000ms, de 1 em 1 segundo, dai vamos basicamente aumentar o tempo, setTimeElapsed(timeElapsed + 1), mas quando o jogo não estiver mais rolando, isso não vai parar de contar, então temos que fazer uma verificação, se playing estiver como true, aumentamos o tempo, quando playing estiver como false, não contamos mais nosso tempo, isso até nos permitiria criar um botão de pause, para setar o playing como false e parar de contar. O nosso useEffect vai ficar observando as variaveis que estamos usando, que é playing e timeElapsed, conforme o playinh e o timeElapsed for mudando, ele vai setando nosso setInterval e mudando o tempo. Dentro do useEffect usamos algumas variaveis e o correto é identificarmos elas para o useEffect ficar observando.
  // Esse é o passo 1, para começarmos a contar o nosso timeElapsed.
  useEffect(() => {
    const timer = setInterval(() => {
      if(playing) {
        setTimeElapsed(timeElapsed + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  // quem vamos monitorar aqui? o shownCount e o nosso grid, sempre que o nosso shownCount ou o nosso grid modificar, verificamos, executamos o que estiver dentro do useEffect no caso.
  // verify if opened are equal
  // em qual momento verificamos? Não quando tivermos um item aberto só, mas quando shownCount for 2
  useEffect(() => {
    // se shownCount for igual a 2, ai verificamos, caso contrário ignoramos, só verificamos quando tivermos 2 items sendo exibidos na rodada.
    if(shownCount === 2) {
      // agora temos que pegar os items que estão com a propriedade shown true, que são os 2 items da rodada que estão sendo exibidos e precisamos verificar se são iguais ou não. O shown é o da rodada.
      // agora vamos pegar os items que estão com o shown true.
      // vamos pegar o nosso grid e dar um filter nele, para pegarmos um array só com os items que estão com o shown true. Dai nossa variavel opened vai receber um array com os items que estão com o shown true, que terão que ser 2.
      let opened = gridItems.filter(item => item.shown === true);
      // dai verificamos se os items que ele achou com shown true são somente 2.
      if(opened.length === 2) {
        // agora temos tudo que precisamos para fazermos as devidas verificações.
        // verificação 1: se os items são iguais, tornalos permanentes (if both are equal, make every "shown" permanent).
        // se a propriedade item dos items do array opened forem iguais.
        if(opened[0].item === opened[1].item) {
          // tornamos os items permanent, com permanentShown true, e botamos o shown deles como false.
          // sempre que formos fazer alterações no nosso grid usamos o tmpGrid, fazendo um clone do grid para modifica-lo.
          // clonamos a grid com os itens aqui fora para podemos aproveitar tanto no if quanto no else, pois nos 2 casos, tanto quanto os 2 items selecionados forem iguais quanto quando eles forem diferentes, temos que mexer nos items da lista de items (gridItems), então precisamos clonar a lista, para que o react entenda que modificamos a mesma, que no caso, é a modificação nos itens da mesma.
          let tmpGrid = [...gridItems];

          // dai vamos percorrer (fazer um loop) nos 2 items, e se o shown deles for true, vamos alterar o permanentShown deles para true, e vamos setar o shown deles para false.
          // i nesse caso é cada item dentro da lista tmpGrid, com todos os items mas com os 2 items exibindo que estão com o shown true.
          // se os items são iguais, tornar todos eles, todos os items que estão com shown true para permanentShow true e shown false.
          for (let i in tmpGrid) {
            if(tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false;
            }
          }
          // dai retornamos nossa lista, setamos ela para o setGridItems atualizar os items que foram iguais e estão com permanentShown true agora, e setar eles para shown false também.
          setGridItems(tmpGrid);
          // agora zeramos os items que estão sendo exibidos, porque já tornamos eles permanentShown, e o shown vai servir para verificar os próximos items da próxima rodada que for iniciada.
          setShownCount(0);
          // no final retornamos a lista modificada da forma como foi necessária e setamos o shownCount, que é a contagem da rodada, 0.
        } else {
          // quando os items não são iguais, que é quando eles caem aqui no else, temos que deixar os items mostrando por um tempo, temos que fazer um setTimeOut, para que não seja muito rápido e possamos ver que eles não são iguais, pois isso está ocorrendo muito rápido.
          // esse for vai ficar dentro de um setTimeOut, então quando clicarmos nos 2 items selecionados, ele vai verificar, vai ficar 1 segundo mostrando os items selecionados, que são diferentes, e depois ele faz a correção, que é botar eles para shown false, não exibindo mais eles.

          // se os items forem iguais, ele vai ficar no if e já vai transformar para permanentShown true instantaneamente, mas quando errarmos temos que poder ver por um tempinho que erramos. Por isso o setTimeOut. Agora ele espera um segundo antes de esconder os items da grid diferentes.
          setTimeout(() => {
            // clone da lista dos items da grid (gridItems)
            let tmpGrid = [...gridItems];

            // verificação 2: se os 2 items selecionados da grid não são iguais, eles são diferentes, então vamos fechar eles.
            // if they are NOT equal, close all "shown".
            // Vamos setar o shown dos items para false, para que eles não estejam mais sendo exibidos, pois eles são diferentes.
            // vamos percorrer a lista clone da lista de items, e vamos setar o shown de todos os itens para false, dai os items selecionados diferentes não vai mais estar sendo exibidos, e está tudo ok.
            for(let i in tmpGrid) {
              tmpGrid[i].shown = false;
            }
            setGridItems(tmpGrid);
            setShownCount(0);
          }, 1000);
        }

        // dai no fim da jogada vamos aumentar nossa contagem de movimentos. Um movimento é quando selecionamos 2 items da grid e da certo ou não da certo, cada fim de jogada é um movimento.
        setMoveCount(moveCount + 1);
      } 
    }
  }, [shownCount, gridItems]);
  // serão observados o shownCount e o gridItems, pois quando os mesmos forem alterados, o que está dentro dess useEffect acima será executado.

  // precisamos verificar quando todos os items da grid estão sendo exibidos, pois dai o jogo acaba, então, quando todos os items estiverem com o permanentShown como true, o jogo deve acabar, pois todos os items estão sendo exibidos.
  // para isso vamos usar o useEffect.
  // verify if game is over.
  useEffect(() => {
    // quando o jogo pode acabar, quando o moveCount é maior que 0, pois alguma jogada tem que ter sido feita. E também, o jogo acaba quando os items do array de items, todos os items da grid, estão como o permanentShown true.
    // tem uma função de array chamada every, então podemos fazer um gridItems.every, então vamos criar uma condicional dentro dele, que será executada para cada item dentro do nosso array, e se todos os items do array de items satisfazerem nossa condicional, o every retorna true, every de todos. Se o every der true, significa que todos os items do nosso grid estão sendo exibidos e estão com permanentShown true. Logo, acabou o jogo, não tem mais onde clicar, então damos um setPlaying false, porque dai nosso tempo para de funcionar, automaticamente nosso items param de funcionar, não tem mais como clicar nos items. E então, a única coisa que estará funcionando é o botão de reiniciar, para reiniciar o jogo.
    if(moveCount && gridItems.every(item => item.permanentShown === true)) {
      setPlaying(false);
    }
  }, [moveCount, gridItems]);
  // quando o moveCount ou o gridItems for modificado, vamos rodar o que estiver dentro do useEffect para verificar se o jogo acabou.

  const resetAndCreateGrid = () => {
    // passo 1 - Resetar o jogo
    // para resetar o jogo temos que limpar todas as informações, então vamos resetar todas nossas states/nosso jogo dai.
    setTimeElapsed(0);
    setPlaying(false);
    setMoveCount(0);
    setShownCount(0);

    // passo 2 - criar o grid e começar o jogo. Após resetarmos nosso jogo, em algum momento vamos começar nosso jogo, então damos um setPlaying(true), mas, já demos um setPlaying(false) acima, para resetar o jogo, isso em uma mesma função, NO REACT NÃO FAZ O MENOR SENTIDO TROCARMOS O MESMO STATE 2 VEZES EM UMA EXECUÇÃO SÓ, ele não vai botar false depois botar true, pois o react espera a execução da função toda terminar, dai ve o que mudou nas states e muda tudo de uma vez, então jogar false e true na mesma execução, ele não vai funcionar essas duas rodadas, então removemos o setPlaying(false) la em cima, e damos um setPlaying(true) abaixo, pois vamos ter que começar o jogo, e essa função reseta o grid, cria ele e começa o jogo, não precisamos pausar para começar novamente depois, se ja estava true continua, se não tava vai para true agora. O mesmo vai ser feito com o setGridItems, vamos tirar o set dele com o array vazio acima, pois aqui vamos criar o grid, não faz sentido zerar o array para depois preencher ele com algo, deixamos o setGridItems para ser feito no final. O restante das informações, tempo, quantidade de movimentos, quantidade de itens sendo exibidos naquela jogada também, só mantemos dai.


    // passo 2.1 - criar um grid vazio.
    // precisamos criar os 12 items específicos do nosso grid, os 12 slots vazios do grid, dai depois preenchemos eles de forma aleatória. Vamos ter que preencher 2 vezes, primeiro os 6, e depois os 6 novamente, pois temos que ter 2 vezes cada item.
    // vamos fazer um loop for, de i = 0 até 12, de 12 items.
    // nosso grid, vamos ter que criar primeiro um array, vamos preencher esse array, e depois jogamos ele no gridItems, então vamos criar um array vazio, tmpGrid, que vai ser um array do tipo GridItemType, e vai começar vazio.
    let tmpGrid: GridItemType[] = [];
    // aqui, para griarmos um array com a quantidade de items que precisamos, vamos verificar a quantidade de items que temos, dai multiplicamos por 2, que será dai a quantidade de items que vamos precisar ter no nosso grid, vamos subsituir o 12, do i < 12 por isso, para deixar isso dinamico.
    for(let i = 0; i < (items.length * 2); i++) {
      // tmpGrid.push para iniciar a criação do nosso array, e para colocar algo dentro do array, onde cada item que mandarmos para o array tem que ter item, shown, permanentShown. Como estamos criando o item vazio, vamos ter item null, shown false, não está sendo exibido, e permanentShown false também. Então começamos a criar nosso grid vazio.
      tmpGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      });
    }

    // passo 2.2 - preencher o grid
    // primeiro temos que importar nossos itens aqui, itens que estão em data/items.ts.
    // Aqui vamos fazer para preencher o nosso grid com os items aleatoriamente.
    // agora vamos preencher nosso grid que até então está vazio, para exibir algo agora, precisamos exibir com items aleatórios daquela lista que temos, os nossos grids aqui, para isso, temos 6, e temos que preencher 12, pois cada item tem que estar 2 vezes no grid, então faremos um loop dentro de um loop. Criaremos um for que vai executar 2 vezes, na primeira vez vamos preencher todos os 6 items, vamos fazer um outro loop com 6 vezes, preenchendo os 6 items em cantos aleatórios do nosso grid, depois rodamos novamente, preenchendo os outros 6 em cantos aleatórios novamente. Então preenchemos os 6 em cantos aleatórios, depois preenchemos os outros 6 em cantos aleatórios novamente, dai vamos validar para não repetir items ou preencher items em posições já ocupadas.
    // roda isso 2 vezes, para preencher todos os items no nosso grid.
    for(let w = 0; w < 2; w++) {
      // aqui ele preenche de fato, nesse for abaixo, pois roda 6 vezes, para preencher nossos 6 items no nosso grid, depois ele roda novamente, para espalhar novamente no nosso grid.
      for(let i = 0; i < items.length; i++) {
        // aqui vamos pegar uma posição específica, levando em consideração a quantidade de items que temos.
        // vamos atribuir a pos, um numero aleatorio que vamos gerar, de 1 a 12 (items.length * 2), numero aleatorio que vai ser arredondado para baixo. Assim geramos uma posição até o item 12, agora preenchemos essa posição com o item que queremos exibir aqui.
        // vamos criar o pos começando como -1, pois 0 ja é uma posição do nosso grid.
        let pos = -1;
        // enquanto pos for menor que 0, ou então aquele item da posição do array tmpGrid for diferente de nulo, vai continuar gerando um numero aleatorio.
        // pos < 0 só vai ser satisfeita uma vez.
        // o while vai fazer com que ele preencha todas as 12 posições, pois enquanto ele encontrar uma posição que ja tem item, ele vai rodar de novo, gerando outro numero aleatorio e verificando novamente até dar certo.
        while(pos < 0 || tmpGrid[pos].item !== null) {
          // gerar um numero aleatorio para posição.
          pos = Math.floor(Math.random() * (items.length * 2));
          // quando gerar uma posição cujo item no array tmpGrid não está preenchido, está nulo, vai sair desse loop e pos vai ter essa posição com item nulo no array, item que não está preenchido.
          // pos vai ter uma posição que não está preenchida.
          // o primeiro for roda 2 vezes, para preencher os 12 items do array.
        }
        // um problema: Ele pode gerar o mesmo item 2 vezes, gerar uma mesma posição que ja foi gerada anteriormente e preenchida. Apesar de termos 6 itens, pode ocorrer dele gerar a mesma posição e preencher novamente nela, sendo que ela já estava preenchida. Então, após gerar uma posição, temos que verificar se essa posição está preenchida, e só podemos continuar se essa posição não estiver preenchida. Se a posição ja estiver preenchida, temos que gerar outra posição novamente, para preencher novamente quando gerar uma posição que não está preenchida.
        // para verificar se aquela posição está preenchida vemos se naquela posição do array, o item está diferente de nulo, pois se estiver diferente de nulo está preenchida. Dai em vez de ficarmos fazendo if, gerando numero, verificando, se não gerar outra posição, verificar, etc etc, isso não faz sentido.
        // if (tmpGrid[pos].item !== null) {
        //   // dai geramos outra posição.
        //   pos = Math.floor(Math.random() * (items.length * 2));
        // }
        // vamos ter que fazer um while, para ficar rodando enquanto der preenchido, gerando outro numero.

        // naquela posição do array tmpGrid, na propriedade item, vai ser i
        tmpGrid[pos].item = i;
        // não precisamos botar as propriedades shown e permanentShown para false, pois já criamos o array com tudo false, então não precisamos fazer essa modificação, só preenchemos o item que queremos preencher.
        // então ele gera uma posição aleatória em pos, depois preenche essa posição.
      }
    }

    // passo 2.3 - jogar o grid no state, fazer o setGridItems(tmpGrid), botando o array de items na lista de items, array todo preenchido com os items dai, para jogar os items na tela dai.
    setGridItems(tmpGrid);

    // passo 3 - começar o jogo
    setPlaying(true);

    // nossa função está feita, resetando, criando um grid vazio, preencheu nosso grid, botou noss grid preenchido na state e começou o jogo.
  }

  // nessa função, vamos verificar se estamos clicando em um item que não está sendo exibido. Se o item está com o permanentShown, ele já está sendo exibido, dai a função não vai fazer nada. Tem que verificar se o item não está com o permanentShown e se o item não está sendo exibido, se essas duas propriedades tiverem valor false, vai exibir aquele item. E dai também faz a verificação de quantos items já exibimos, porque quando estamos jogando, só podemos exibir 2 items, exibimos 2, dai o sistema verifica se acertamos os 2 items iguais, se acertamos eles se tornam permanentes, se não acertamos eles vão desvirar.
  const handleItemClick = (index: number) => {
    // primeiro vamos verificar se o jogo está rolando, depois, se o index que estamos mandando ele é um index real, se é diferente de nulo, se tem algo para ser exibido. E também se o nosso shownCount tem que ser menor que 2, porque se não verificarmos isso, ele vai conseguir exibir qualquer item que clicarmos e quantos items nos clicarmos, porque a partir de 2 já tem 2 items sendo exibidos, então não podemos exibir um terceiro item, pois dai ficaria errado.
    if(playing && index !== null && shownCount < 2) {
      // agora precisamos fazer modificações no nosso grid, vamos verificar nosso grid, se o item que clicamos não está sendo exibido, está com o permanentShown e com o Shown como false, está desvirado, se estiver desvirado, temos que virar ele, trocar a propriedade shown dentro do item que estamos clicando para true, vamos mudar nosso grid dai.
      // para mudarmos nosso grid e dar certo, geralmente quando temos um array com options, com objetos dentro desse array, e queremos mudar ele, pois ele está no state, criamos um clone desse state, e dai fazemos as devidas modificações, e dai damos um setGridItems no nosso clone, dai o react entende que estamos mandando um item totalmente diferente do item que tinhamos em memória, pois quando criamos um clone estamos criando um outro item na memoria, mesmo sendo um clone, é um clone independente, é um outro item na memória, dai não vai dar problema de não fazer alterações dos items que estamos alterando, porque se não fizermos isso e alterarmos direto o gridItems, o react não interpreta bem as modificações nele, as modificações que ocorrem dentro de objetos do nosso state, que é uma lista de objetos.
      // apos termos feito o nosso clone, vamos fazer as devidas verificações.
      // e tmpGrid[index], que é o item que clicamos, se o permanentShown do item que clicamos, e o shown do item que clicamos estão como false, o item está de costas, não está sendo exibido, dai vamos pegar o shown do item e jogar o mesmo para true, para exibir uma carta, dai mudamos o nosso shownCount para incrementar 1, dando um setShownCount(shownCount + 1); COmo o shownCount estava menor que 2, ele entrou aqui sabendo que podemos exibir uma carta, então tudo ok.
      let tmpGrid = [...gridItems];

      if(tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false) {
        tmpGrid[index].shown = true;
        setShownCount(shownCount + 1);
      }

      // dai apos trocarmos o item para shown true, nos alteramos nosso grid, para exibir o mesmo com as modificações feitas aqui no item.
      setGridItems(tmpGrid);
    }
  }

  // dentro de C.Grid, vamos fazer para exibir os itens que tivermos no array gridItems.
  // agora nosso próximo passo e preencher nosso grid recem montado na tela.
  // dentro do map no gridItems, vamos botar e usar o componente que vamos criar, para cada item da grid, vamos criar esse componente em src/components, na pasta GridItem, criando os arquivos index.tsx e styles.ts. Vamos passar algumas props para o componente GridItem, a key, passando o index, já que estamos usando o map, vamos mandar o item, que são as informações dele, do item, se ele está sendo exibido ou não, se ele deve ser mostrado permanentemente, vamos ter que ter uma função de click, para quando nos clicarmos no componente, função vai ser fora do componente, que é onde nos controlamos o jogo, vamos criar a prop onClick também, que vai executar uma função handleItemClick passando o index, para sabermos qual item foi clicado.
  // temos uma função para formatar o que recebemos em segundos para minutos e segundos, e chamamos essa função no value do label de Tempo do InfoArea, passando o timeElapsed, que são os nossos segundos.

  // para exibir os movimentos a cada jogada, certa ou errada, setamos para o componente InfoItem com label Movimentos, seu value como moveCount.toString(), pois o moveCount vai ter a quantidade de movimentos e toString() para transformar o retorno do moveCount em string, pois o value tem que receber uma string.
  return (
    <C.Container>
        <C.Info>
          <C.LogoLink href="">
            <img src={logoImage} alt="" width="200" />
          </C.LogoLink>

          <C.InfoArea>
            <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
            <InfoItem label="Movimentos" value={moveCount.toString()} />
          </C.InfoArea>

          <Button label="Reiniciar" icon={RestartIcon} onClick={resetAndCreateGrid} />
        </C.Info>
        <C.GridArea>
          <C.Grid>
            {gridItems.map((item, index) => (
              <GridItem 
                key={index}
                item={item}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </C.Grid>
        </C.GridArea>
    </C.Container>
  );
}

export default App;
