import styled from "styled-components";

// para recebermos um item aqui dentro, no typescript, precisamos vir um div, e criamos uma prop para essa div, que vamos chamar de ContainerProps, que vai receber nossas props. Dai definimos que o Container vai receber a prop showBackground que é um boolean, agora podemos usar essa prop e usar ela. Dai recebemos o props e se o props.showBackground for true, exibimos um background, se for false exibimos outra cor.
type ContainerProps = {
    showBackground: boolean;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.showBackground ? '#1550FF' : '#E2E3E3'};
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

// aqui recebemos a prop opacity que criamos no index.tsx, para o Icon. prop opacity vai ser opcional.
type IconProps = {
    opacity?: number;
}

// quando o componente Icon tiver definido e passado a prop opacity, usamos a opacidade passada na prop, caso contrário usamos a opacidade como 1. Podemos usar dessa maneira nesse caso: ${props => props.opacity ? props.opacity : 1}, pois quando temos aquele item, usamos ele, quando não tivermos usamos outra coisa, podemos usar da seguinte forma: ${props => props.opacity ?? 1}, pois dai, quando tiver a prop opacity definida para o Icon, usamos ela, caso contrário, usamos o 1 como opacidade para o Icon.
export const Icon = styled.img<IconProps>`
    width: 40px;
    height: 40px;
    opacity: ${props => props.opacity ?? 1};
`;