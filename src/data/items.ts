// esse array de items, vai catalogar as opções de itens disponíveis.
// estamos fazendo esse array em um arquivo separado pois vamos usar ele em alguns lugares do sistema.
// dentro do array, cada item vai ser um objeto, pois vamos ter mais de uma informação para cada item.
// vamos ter que importar todos icones dos itens aqui.
// agora temos nosso arquivo com os 6 items que temos para exibir.
// logo, quando formos montar nosso grid, vamos ver quantos itens temos para exibir, dai vamos ter que criar o dobro de caixas para exibir, como temos 6 itens, vamos saber que temos 6 itens baseado nisso, e dai criaremos 12 grids.
// temos a lista dos itens disponíveis que temos, e vamos usá-la para criar nosso grid.

import android from '../svgs/android.svg';
import caminhao from '../svgs/caminhao.svg';
import disney from '../svgs/disney.svg';
import estrela from '../svgs/estrela.svg';
import gasolina from '../svgs/gasolina.svg';
import moto from '../svgs/moto.svg';

export const items = [
    {
        name: 'android',
        icon: android
    },
    {
        name: 'caminhao',
        icon: caminhao
    },
    {
        name: 'disney',
        icon: disney
    },
    {
        name: 'estrela',
        icon: estrela
    },
    {
        name: 'gasolina',
        icon: gasolina
    },
    {
        name: 'moto',
        icon: moto
    }
];