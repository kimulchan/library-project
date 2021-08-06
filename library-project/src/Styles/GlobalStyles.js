import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles= createGlobalStyle`
    ${reset}
    *{
        list-style: none;
        box-sizing: border-box;
     
    }
    a{
        text-decoration:none;
        color:black;
    }
    div{
        font-family:"Brush Script MT";
    }
    button{
        display:flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        outline:none;
        border-radius: 3px;

    };
    input{
        display:flex;
        align-items: center;
        justify-content: center;

    }

`

export default GlobalStyles;