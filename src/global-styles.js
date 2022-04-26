import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
    --primary: #645cff;
    --mainBorder: 1px solid red;
    --white: #ffff;
    }
 
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f2f4f8;
    }

    .btn{
        background-color: #645cff;
        color: #fff;
        border-radius: .25rem;
        cursor: pointer;
        text-transform: capitalize;
        padding: .25rem;
        display: block;
        width: 200px;
        margin: 1rem;
    }
`;

export default GlobalStyles;
