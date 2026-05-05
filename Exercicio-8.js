import React from "react";
import styled, { ThemeProvider } from "styled-components/native";

const theme = {
  colors: {
    background: "#11111a",
    surface: "#1c1c2b",
    primary: "#8a2be2",
    textMain: "#e6e6fa",
    textSub: "#a0a0b5",
    border: "#4b0082",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.spacing.large};
  justify-content: center;
`;

const H1 = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.large};
  text-align: center;
  letter-spacing: 2px;
`;

const H2 = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textMain};
  margin-bottom: ${(props) => props.theme.spacing.small};
`;

const Body = styled.Text`
  font-size: 15px;
  color: ${(props) => props.theme.colors.textMain};
  line-height: 22px;
  margin-bottom: ${(props) => props.theme.spacing.medium};
`;

const Caption = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.colors.textSub};
  font-style: italic;
`;

const Card = styled.View`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 10px;
  padding: ${(props) => props.$spacing || props.theme.spacing.medium};
  margin-bottom: ${(props) => props.theme.spacing.large};
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
`;

const StyledPressable = styled.Pressable`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.medium};
  border-radius: 6px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Button = ({ children }) => (
  <StyledPressable style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}>
    <ButtonText>{children}</ButtonText>
  </StyledPressable>
);

export default function ReZeroDesignSystem() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <H1>Registros Mortais</H1>

        <Card $spacing="24px">
          <H2>A Mansão Roswaal</H2>
          <Body>
            Os corredores escuros parecem intermináveis, mas o tilintar de uma
            corrente de ferro indica que a paz da manhã chegou ao fim. Cada
            porta na biblioteca proibida guarda um novo mistério inexplorado.
          </Body>
          <Caption>O contrato com o grande espírito deve ser honrado.</Caption>
        </Card>

        <Card $spacing="16px">
          <H2>O Miasma</H2>
          <Body>
            Um peso invisível preenche a atmosfera e oprime a respiração. As
            sombras se contorcem e a neblina engole a floresta aos poucos. Algo
            terrível acabou de despertar e fixou seus olhos na vila.
          </Body>
          <Button>Encarar a Provação</Button>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
