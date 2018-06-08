import styled from "styled-components";

export const FooterContainer=styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
   flex-flow:row wrap;
   margin-top:30px;
`;

export const FooterLeftContainer=styled.div`
    display:flex;
    width:30%;
    align-items:flex-start;
    flex-flow:column wrap;
    
    
   @media (max-width: 1024px) {
    width:40%;
  }
   @media (max-width: 767px) {
    width:100%;
  }
  `;

export const FooterRightContainer=FooterLeftContainer.extend`
@media (max-width:767px)
{
 margin-top:20px;
 }
`
   ;

export const MotoDetailsContainer=styled.div`
      padding:${props=>props.primary?'10px 0px':'0px'};
      line-height: 1.7;
      text-align:left;
      font-size:var(--md-font-size);
  letter-spacing: normal;
  color: #9c88a8;
  
  img
  {
  width:14px;
  height:14px;
 }
  `;


export const DownloadContainer=styled.div`
  padding:10px 0px;
  
      display:flex;
      justify-content:flex-start;
      align-items:center;
      flex-flow:row wrap;
      div
      {
      cursor:pointer;}
`;

export const FooterMainContainer=styled.div`
    display:flex;
    justify-content:space-between;
   `;
export const FooterMenuContainer=styled.div`
  display:flex;
  flex-flow:column wrap;
  div
  {
   text-align:left;
   cursor:pointer
  width:100%;
  font-size:var(--md-font-size);
   line-height: 1.7;
  color:white;
  }
  a, a:active, a:visited {
  color:white;
  }
  a:hover {
  color:white;
  font-weight:600;
  }
  `;

export const AddressDetailsContainer=styled.div`
width:50%;
   display:flex;
   
    flex-flow:column wrap`;

export const IconListContainer=styled.div`
margin-top:10px;
display:flex;
width:100%;
align-items:center;
flex-flow:row wrap;
@media (max-width:767px)
{
 justify-content:center;}

`;

export const IconItem=styled.div`
   border-radius:100px;
   background-color:white;
   margin-right:20px;
   display:flex;
   align-items:center;
   justify-content:center;
   width:36px;
   height:36px;
   i
   {
   font-size:var(--xlg-font-size);
   color:#3d3460;
   }
   `;