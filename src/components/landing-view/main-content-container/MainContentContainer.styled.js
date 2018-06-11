import styled from "styled-components";
import {Heading, ThemeButton} from"static/styled/custom.styled";


export const DisplayViewContainer=styled.div`
 
 display:flex;
 justify-content:center;
 height:700px;
 @media (max-width:567px)
 {
 height:500px;}
`;
export const ContentContainer=styled.div`
   width:50%;
    display:flex;

 margin-top:24px;
 
 flex-flow:column nowrap;
 
 
 
   @media (max-width: 767px) {
    width:60%;
  }
   @media (max-width: 425px) {
    width:100%;
  }
`;

export const DownloadButtonContainer=styled.div`
display:none;
@media (max-width:567px)
{
margin-top:15px;
display:flex;
justify-content:center;
align-items:center;

}
`;

export const MainHeading=Heading.extend`
line-height: 1.1;
  letter-spacing: -1.8px;
  text-align: center;
font-weight:500;
width:100%;
@media (max-width:1024px)
{
font-size:28px;
}

@media (max-width:1024px)
{
font-size:32px;
}
@media (max-width:567px)
{
font-size:20px;
font-weight: normal;
margin-top:24px;
line-height: 1.3;
  letter-spacing: -0.7px;
}
`;

export const SubContentHeading=Heading.extend`
 line-height: 1.64;
  letter-spacing: normal;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  color: #8e779e;
  
  @media (max-width:567px)
  {
  font-size:16px;
  margin-top:20px;
  line-height: 1.5;
  letter-spacing: normal;
  }
  ;`


