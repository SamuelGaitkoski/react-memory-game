// importando nossa estilização aqui, fazendo * as C, para nos referirmos aos componentes estilizados como C.
import * as C from './styles';

// vamos criar nosso componente aqui.
// esse componente vai exibir um título e uma informação. Essas duas informações vão ser dinâmicas, o componente é genérica e vamos passar por props essas informações de título e informação para o componente, props que são label e value, dai criamos o type para as props que o componente vai receber. Label vai ser o títlo e value a informação. o label do componente vai exibir a label passada por prop e o value vai exibir o value passado por prop.
type Props = {
    label: string;
    value: string
}

export const InfoItem = ({ label, value }: Props) => {
    return (
        <C.Container>
            <C.Label>{label}</C.Label>
            <C.Value>{value}</C.Value>
        </C.Container>
    );
}