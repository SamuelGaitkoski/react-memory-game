// importamos a biblioteca styled-components
import styled from "styled-components";

// criamos nosso componente Container, que é uma div, Container vai ser nossa div geral.
// vamos fazer a responsividade de como está já.
// cada componente tem que ter seu próprio @media dai.
// @media com max-with 750px é o breakpoint do nosso sistema, então de 750px de largura pra baixo, vamos modificar o layout, mexer nos componentes que precisarmos. 750px para baixo é para tablet/celular.
export const Container = styled.div`
    width: 100%;
    max-width: 750px;
    margin: auto;
    display: flex;
    padding: 50px 0;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

// align items center centraliza as informações
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;

    @media (max-width: 750px) {
        margin-bottom: 50px;
        align-items: center;
    }
`;

// display block para que nada fique ao lado da logo.
export const LogoLink = styled.a`
    display: block
`;

// justify content space-around para ficarem bem organizados na tela, com espaços iguais entre eles.
// text-align center para todos textos que tiverem dentro desse info area fiquem centralizados.
export const InfoArea = styled.div`
    width: 100%;
    margin: 10px 0;

    @media (max-width: 750px) {
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
`;

// flex 1 para ocupar todo o espaço disponível
// flex-end para essa div ser jogada para a direita.
// justify content center para centralizar horizontalmente o conteúdo, no meio da tela.
export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 750px) {
        justify-content: center;
        margin: 0 20px;
    }
`;

// o nosso Grid vai ter o display grid, e vai ter 4 itens um ao lado do outro, então usamos o repeat 4 1fr, para criar 4 colunas, e teremos um gap de 10px, um espaço de 10px entre eles.
// grid vai ser dinamico, com tamanho fixo. Cada item do grid, vai ter um tamanho dinamico, depende do espaço disponivel para ele, mas o grid como um todo vai ter um tamanho fixo, para podermos posicionar ele, e ele não cobrir todo o espaço disponível, dai quando estiver no celular podemos mudar o tamanho dele.
// no nosso próprio grid, quando a tela estiver com largura máxima de 750px, vamos dar um grid-template-column dando um repeat(3, 1fr), dai nosso grid vai ficar com 3 colunas dai, para ficar melhor para visualizar em um tablet ou celular.
export const Grid = styled.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media (max-width: 750px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;