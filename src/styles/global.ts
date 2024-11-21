import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    
}

:focus{
      outline:0;
      box-shadow: 0 0 0 2px ${(props) => props.theme["blue"]};
    }

    body{
        background-color: ${(props) => props.theme["base-background"]};
        color: ${(props) => props.theme["base-text"]};
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button{
        font: 400 1rem Nunito, san-serif;
    }
`;

export const Container = styled.main`
    width: 864px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
`;