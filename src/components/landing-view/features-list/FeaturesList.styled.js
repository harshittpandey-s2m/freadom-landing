import styled from "styled-components";
import {ImageContainer} from "static/styled/custom.styled";

export const FeatureListParentContainer=styled.div`
    background-color:#f3f2f7;
    width:100%;
    
`;

export const FeatureListContainer=styled.div`
padding:40px 120px;
@media (max-width:1024px)
{
   padding:40px 80px;
   margin-top:-100px;
}

@media (max-width:767px)
{
   padding:40px 60px;
}

@media (max-width:567px)
{
  margin-top:-120px;
  padding:28px;
  }
`;

export const FeatureItem=styled.div`
width:100%;
display:flex;
padding-bottom:60px;
flex-flow:row wrap;
align-items:center;
justify-content:space-between;
 @media (max-width: 768px) {
  
   padding-bottom:0px;
   
  }
       `;

export const FeatureItemDataContainer=styled.div`
   width:${props=>props.primary?'46%':'35%'};
   
   @media (max-width: 768px) {
   margin:40px 0px;
   width:100%; 
  }
   `;

export const FeatureItemRightContainer=FeatureItemDataContainer.extend`
    width:50%;
  
  
    @media (max-width: 768px) {
     margin:30px 0;
   width:100%; 
  }
    
    `;

export const FeatureItemImageContainer=styled.img`
  height:380px;
  width:100%;
   object-fit:contain;
     object-position:center;
  max-width:100%;
   @media (max-width: 768px) {
     height:340px;
    
   width:100%; 
   
  }
    `;

export const FeatureItemLeftContainer=FeatureItemDataContainer.extend`
padding:40px 40px 0px;
   position:relative;
    height:180px;
    cursor:default;
     border-radius: 20px;
     display:flex;
     justify-content:flex-start;
     flex-flow:column nowrap;
     
  background-color: #ff943e;
  width:auto;
  margin:80px 0;
  box-shadow: 0 12px 24px 0 rgba(191, 111, 47, 0.21);
  @media (max-width:1024px)
  {
    padding: 40px;
    padding-bottom: 0px;
    }
    @media (max-width:768px)
  {
  width:auto;
  }
  @media (max-width:567px)
  {
  padding:30px;
  height:150px;
 }

  `;

export const FeatureBackgroundImage=ImageContainer.extend`
   position:absolute;
   bottom:0;
   width:160px;
   height:160px;
   right:-14px;
   `;

export const FeatureHeadingContainer=styled.p`
     
     width:180px;
     font-size: 28px;
     display:block;
     text-align:left;
  font-weight: 500;
  line-height: 1.3;
  margin:0px
  margin-bottom:12px;
  letter-spacing: -0.8px;
  color: #fff;
  
  img
  {
  width:24px;
  height:20px;
  
  }
  
  @media (max-width:767px)
  {
  width:200px;}
  }
 
  
  `;
export const FeatureDescription=styled.div`
text-align:left;
color:white;
font-size:18px;
@media (max-width:567px) {
    font-size:16px;
}

  `;

