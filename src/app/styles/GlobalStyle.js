import { createGlobalStyle } from 'styled-components';
import colors from '../constants/colors';

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        outline:0;
        font-family: 'Cairo', sans-serif;
        font-family: 'Roboto', sans-serif;
    }
    /* ::-webkit-scrollbar{
        width: 1.6rem;
    }
    ::-webkit-scrollbar-track{
        background-color:#e9ecef;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: .8rem;
        background-color: #ced4da;
    } */
    html{
        font-size: 62.5% ; // 62.5% = (10/16)*100 [target/browser fontsize]*100
        height: 100rem;//temprory;
        scroll-behavior: smooth;
    }
    body{
        overflow-x:hidden;
        background: ${colors.green50};
        font-family: 'Roboto', sans-serif;

    }
    a{
        text-decoration:none;
        text-underline: none;
        color: blue;
        text-transform:capitalize;
    }
    ul{
        list-style:none;
    }
    button{
        outline: 0;
        border:0;
        padding: 1rem;
        background:red;
        color:white;
        border-radius: .4rem
    }
    img{
        width:100%;
        height:100%;
    }
`;
export default GlobalStyle;