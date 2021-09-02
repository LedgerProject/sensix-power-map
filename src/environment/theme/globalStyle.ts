import { createGlobalStyle } from "styled-components/macro";
import { Colors } from "./colors";

export const GlobalStyle = createGlobalStyle<any>`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;

    }

    h1 {
        color: ${({ theme }) => theme.h1};
        font-family: 'Open-sans', sans-serif;
        font-size: 6rem;
        font-weight: 700;
        line-height: 8.6rem;
    }

    h2 {
        color: ${({ theme }) => theme.h2};
        font-family: 'Open-sans', sans-serif;
        font-size: 4.8rem;
        font-weight: 700;
        line-height: 5.8rem;
    }

    h3 {
        color: ${({ theme }) => theme.h3};
        font-family: 'Open Sans', sans-serif;
        font-size: 3.6rem;
        font-weight: 600;
        line-height: 5rem;
    }

    h4 {
        color: ${({ theme }) => theme.h4};
        font-family: 'Open Sans', sans-serif;
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 3.2rem;
    }

    h5 {
        color: ${({ theme }) => theme.h5};
        font-family: 'Open-sans', sans-serif;
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 3.2rem;
    }

    h6 {
        color: ${({ theme }) => theme.h6};
        font-family: 'Open Sans', sans-serif;
        font-weight:  600;
        font-size: 1.8rem;
    }

    p {
        color: ${({ theme }) => theme.p};
        font-family: 'Open Sans', sans-serif;
        font-size: 1.6rem;
        line-height: 2.4rem;
    }

    a {
        color: ${({ theme }) => theme.a};
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.4rem;
        outline: none;
        text-decoration: none;
        transition: color 0.2s;

        :not(:disabled) {
            :focus,
            :hover {
                color: ${Colors.green700};
            }
        }
    }

    span {
        color: ${({ theme }) => theme.span};
        font-family: 'Open Sans', sans-serif;
        font-size: 1.2rem;
        line-height: 1.6rem;
    }

    text, th, td {
        font-family: 'Open Sans', sans-serif; 
    }

    button {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.6rem;
        font-weight: 600;
    }

    input, textarea {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.6rem;
    }
`;
