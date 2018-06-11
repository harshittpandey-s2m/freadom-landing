import styled from "styled-components";
import {ImageParentContainer} from "static/styled/custom.styled"
export const ReadingListParentContainer=styled.div`
margin-top:400px;
    padding:30px;
    border-radius: 20px;
background: linear-gradient(32deg, rgb(41, 22, 55) 90%,rgb(255, 255, 255) 100%);
  margin-bottom:100px;
`;

export const ReadingItemList=styled.div`
 padding:40px 10px;
 
 padding-bottom:20px;
 display:flex;
 flex-flow:row wrap;
 justify-content:space-between;
 align-items:center;
 
`;
export const ReadingItem=styled.div`
width:20%
  @media (max-width: 1024px) {
   margin-top:30px;
   width:40%;
  }
   @media (max-width: 567px) {
   
   width:100%;
   display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
`;

export const ReadingImagesContainer=styled.div`
    position:relative;
    width:80px;
    height:80px;
    
    `;

export const ReadingSubImage=ImageParentContainer.extend`
  position:absolute;
  bottom:8px;
  left:0;
  `;

export const ReadingDescription=styled.div`
    font-size:${props=>props.primary?'18px':'16px'};
    height:${props=>props.primary?'auto':'130px'};
    text-align:left;
    color:${props=>props.primary?'white':"rgba(255,255,255,0.5)"};
    margin-top:${props=>props.primary?'20px':'10px'};
    span
    {
    color:#fa8724;
    }
    
    @media (max-width:567px) {
    text-align:center;
    }`;
