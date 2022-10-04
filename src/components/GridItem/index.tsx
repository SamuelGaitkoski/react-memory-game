import { GridItemType } from '../../types/GridItemType';
import * as C from './styles';
import b7Svg from '../../svgs/b7.svg';
import { items } from '../../data/items';

// item vai ser um GridItemType, só um item do tipo GridItemType. onClick vai ser uma função que não retorna nada (void).
type Props = {
    item: GridItemType,
    onClick: () => void
}

// botamos o onClick, a prop no Container, quando ele for clicado, vai executar a função passada na prop que o componente vai receber.
// se o item está para exibir, ele recebe o item, se não estiver para exibir, vai exibir a logo padrão que é o b7.svg, dentro de svgs.
// se a propriedade permanentShown do item estiver como false e o item.shown também estiver como false, então o item não é exibido, então mostramos o ícone padrão da b7.
// agora vamos fazer as condições para exibir aquele item.
// se o permanentShown estiver como true ele exibe, se o shown estiver como true ele exibe também, então se qualquer desses 2 estiver como true nos exibimos, e claro, se nosso item tiver algo para exibir, se tiver um item para exibir. Esse icone vai vir da lista de items, dai vamos pegar o item.item, do item clicado, pegando o item da lista, pois o item.item é o indice da lista de itens. Então vamos pegar o item.item da nossa lista de items, pegando o icone desse item. Sempre vamos ter um item, então teremos um item nulo aqui, então é mais uma proteção aqui, pois item pode ser nulo e não tem como ser um item nulo de um array.
// Temos que saber quando nosso Container, caixa do item, vai exibir um background ou outro background, que vai ser um quando o componente não está sendo exibido e outro quando está sendo exibido, então vamos nosso Container vai receber uma prop, prop que será recebida no nosso styled componentes, styles.ts, que vai ser a prop showBackground, que vai receber um true ou false, para mostrar um ou outro background, o showBackground vai receber se item.permanentShown ou item.shown como true, dai o item está sendo exibido.
// Quando estiver exibindo o ícone da b7 nos items, não queremos que ele exiba com esse preto forte, queremos que ele exiba com uma opacidade que queremos, que é de 10% da cor preto que está, dai passamos uma prop para o nosso Icon, que é opacity, dai passamos .1
export const GridItem = ({ item, onClick }: Props) => {
    return (
        <C.Container 
            showBackground={item.permanentShown || item.shown}
            onClick={onClick}
        >
            {item.permanentShown === false && item.shown === false &&
                <C.Icon src={b7Svg} alt="" opacity={.1} />
            }
            {(item.permanentShown || item.shown) && item.item !== null &&
                <C.Icon src={items[item.item].icon} alt="" />
            }
        </C.Container>
    );
}