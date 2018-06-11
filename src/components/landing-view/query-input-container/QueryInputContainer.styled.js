import styled from "styled-components";
import {ThemeButton} from "static/styled/custom.styled";


export const QueryOptionItem=styled.div`
width:46%;

@media (max-width:767px)
{
width:100%;
margin-top:36px;
border:none;
}
`;

export const QueryOptionsParentContainer=styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
   flex-flow:row wrap;
   span
   {
   width:auto;
   height:113px;
   border-right:1px solid rgba(151,151,151,0.3);
   }
   @media (max-width:767px)
   {
   span
   {
   width:0;
   height:0;
   border:0;
   }
   }
   
   `;
export const QueryInputParentContainer=styled.div`
margin-top:400px;
padding:30px 50px 30px 50px;

   border-radius: 24px;
  -webkit-backdrop-filter: blur(27.6px);
  backdrop-filter: blur(27.6px);
  background-color: rgba(0, 0, 0, 0.26);
  margin-bottom:60px;
 
 @media (max-width:768px)
 {
 padding:30px;
 margin-top:480px;
 }
`;

export const QueryRightContainer=styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
flex-flow:row wrap;
width:100%;
@media (max-width:768px)
{
 width:100%;}
`;
export const EmailInputContainer=styled.div`
  display:flex;
  height:60px;
 width:100%;
 justify-content:space-between;
  align-items:center;
  position:relative;
  object-fit: contain;
  -webkit-backdrop-filter: blur(27.6px);
  backdrop-filter: blur(27.6px);
  background-color: rgba(0, 0, 0, 0.26);
   border-radius: 20px;
   @media (max-width:1024px)
{
width:80%;

}
  @media (max-width: 767px) {
   
   width:100%;
   }
 
 
 
  input
  {
  width:100%;
 
   outline:none;
   color:white;
  border-radius:20px;
  height:100%;
  margin-right:10px;
  font-size:var(--xlg-font-size);
  background:transparent;
  border:none;
  padding-left:24px;
  ::placeholder
  {
  color:rgba(250, 251, 253,0.6);
  font-size:var(--lg-font-size);
  }
  }
  
  span
  {
 margin:4px;
  position:absolute;
  top:0;
  right:0;
  width:32px;
  height:32px;
  
  
  img
  {
      height: auto;
    width: 100%;
    max-width: 100%;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
  }
  }
  `;

export const QueryLabelContainer=styled.div`


text-align:left;

font-size:26px;
 line-height: 1.53;
  letter-spacing: 1px;
  color: #ffffff;
  padding:0;
 padding-bottom:14px;
 
   @media (max-width: 768px) {
    font-size:20px;
    
   
  }`;

export const QueryThemeButton=ThemeButton.extend`
height:38px;
padding:0;
width:200px;
margin-right:14px;
font-size:14px;

`;


