import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles= createGlobalStyle`
    ${reset}
    *{
        list-style: none;
        box-sizing: border-box;
        font-family:"Brush Script MT";
     
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

    };
    input{
        display:flex;
        align-items: center;
        justify-content: center;
        
        outline:none;

    }

`

export default GlobalStyles;