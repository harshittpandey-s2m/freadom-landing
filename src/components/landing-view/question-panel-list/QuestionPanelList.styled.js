import styled from "styled-components";
import {ThemeButton, SubHeading} from "static/styled/custom.styled"
export const QuestionPanelContainer=styled.div`

padding:30px 40px;
 border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0 92px 84px -70px rgba(0, 0, 0, 0.18);
  padding-bottom:420px;
  @media (max-width:767px)
  {
  padding-bottom:480px;
  }
`;

export const QuestionListedContainer=styled.ul`
  width:100%;
  padding:0;
  padding-left:16px;
  margin:0;
   li
   {
   }
   `;

export const ReadMoreButton=ThemeButton.extend`
display:none;
  @media (max-width:567px)
  {
  
   width:180px;
   display:flex;
   font-weight:500;
   font-size:16px;
   text-align:center;
   justify-content:center;}
   `;

export const QuestionListContainer=styled.div`
     display:flex;
     justify-content:space-between;
     align-items:center;
     padding-top:14px;
  //   transition: all 0.3s ease-in-out;
  // transform: ${props=>props.active?"scaleY(0)":"scaleY(1)"};
  // height: ${props=>props.active?'100%':'0'};
     flex-flow:column nowrap;
      overflow:hidden;
     `;

export const QuestionListItem=styled.div`
   width:100%;
   outine:none;
   padding:20px 0px;
  background-color:white;
  a
  {
  color:blue;
  }
  a:active {
    color:blue;
 }

   `;

export const QuestionItemHeader=styled.div`
width:100%;
cursor:pointer;
display:flex;
outline:none;
background-color:transparent;
padding-bottom:${props=>props.active?'10px':'0'};
transition :all 0.1s;

justify-content:space-between;
i 
{
    font-size:24px;
    color:rgba(23, 14, 34,0.3);
}
`;

export const QuestionDescription=styled.div`
padding:0;
margin:0;
font-size:var(--md-font-size);
text-align:left;
line-height: 1.83;

color: #606191;
 overflow: hidden;
  transition: all 0.02s ease-in-out;
  transform: ${props=>props.active?"transformY(100%)":"transformY(0)"};
  height: ${props=>props.active?'100%':'0'};
 `;

export const QuestionSubHeading=SubHeading.extend`
   @media (max-width:450px)
   {
   
   font-size:15px;
   }
   `;


