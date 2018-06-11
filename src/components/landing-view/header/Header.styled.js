import styled from "styled-components";
import {ThemeButton} from "static/styled/custom.styled";

export const HeaderParentContainer=styled.div`
display:flex;
justify-content:space-between;
align-items:center;

`;

export const HeaderLeftContainer=styled.div`
       height:54px;
        margin-left:20px;
       width:200px;
      img
      {
    height: auto;
    width: 100%;
    max-width: 100%;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
      
      }
      @media (max-width:567px)
      {
      width:180px;
      margin-left:0px;
      }
      
      `

;

export const HeaderRightContainer=styled.div`
     display:flex;
     justify-content:flex-end;
     align-items:center;
     flex:1;
     
     `;

export const HeaderThemeButton=ThemeButton.extend`
 @media (max-width:567px)
 {
 display:none;
 padding:6px 10px;
 }`;

