// importando o styles para cá
import * as C from './styles';

// nosso componente Button
// vamos fazer o botão o mais adaptável possível, com props, caso precisassemos utilizar esse componente em outro lugar.
// vamos criar props para exibir o texto (label) do botão, ícone (icon) para exibir o ícone caso o mesmo for passado, que pode ser a url de um ícone, externa ou interna, ou pode ser um ícone importado também, um svg, então botamos o type dele como any, que no typescript tentamos evitar o any, mas podemos usar ele, pois ele recebe qualquer coisa dai, vamos ter a prop onClick também, que vai ser uma função de click que vamos mandar, que vai ser de um elemento de uma div.
// icon é opcional, pode ser mandado ou não.
type Props = {
    label: string;
    icon?: any;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}
// quando clicarmos no container, que vai ser o botão em si, em uma div, vamos executar a função onClick que for passada para o componente. Icon vai ser uma imagem.
// se o icone existir, botamos o IconArea com o icone dai, caso contrário não vai botar icone nenhum, pois não tem nenhum icone para colocar, dai nosso button vai ter só o label.
export const Button = ({ label, icon, onClick }: Props) => {

    return (
        <C.Container onClick={onClick}>
            {icon &&
                <C.IconArea>
                    <C.Icon src={icon} />
                </C.IconArea>
            }
            <C.Label>{label}</C.Label>
        </C.Container>
    );
}