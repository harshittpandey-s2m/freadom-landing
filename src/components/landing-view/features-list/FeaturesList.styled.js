import styled from "styled-components";
import {ImageContainer,ImageParentContainer} from "static/styled/custom.styled";

export const FeatureListParentContainer=styled.div`
    background-color:#f3f2f7;
    width:100%;
    
`;

export const FeatureListContainer=styled.div`
padding:40px 120px;
@media (max-width:1024px)
{
   padding:40px 80px;
   padding-top:0;
   margin-top:-120px;
}

@media (max-width:767px)
{
   padding:40px 60px;
    padding-top: 0px;
    margin-bottom:60px;
    padding-top: 60px;}

@media (max-width:567px)
{
  
  padding:28px;
  padding-top: 120px;
  }
`;

export const FeatureItem=styled.div`
width:100%;
display:flex;
flex-flow:${props=>props.active?"row wrap":"row-reverse wrap"};
align-items:center;
justify-content:space-between;
 @media (max-width: 767px) {
 
  justify-content:flex-start;
  margin-bottom:240px;
   flex-flow:column-reverse nowrap;
   
  }
   @media (max-width: 567px) 
   {
   margin-bottom:140px;
   }
       `;

export const FeatureItemDataContainer=styled.div`
   width:${props=>props.primary?'46%':'35%'};
   
   @media (max-width: 567px) {
   margin:40px 0px;
   width:100%; 
  }
   `;

export const FeatureItemRightContainer=FeatureItemDataContainer.extend`
    width:50%;
  
  @media (max-width:767px)
  {
  width:100%;
  margin:0;
  margin:-60px 0;}
  
  
  
   
    
    `;

export const FeatureItemImageContainer=styled.img`
  height:380px;
  width:100%;
   object-fit:contain;
     object-position:center;
  max-width:100%;
  
      @media (max-width: 767px) {
     margin:0;
     padding:0;
     display:none;
     height:0;
     
   }
   
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
    padding: 30px;
    padding-bottom: 0px;
    }
    @media (max-width:767px)
  {
  width:auto;
  height:280px;
   margin-top:${props=>props.primary?'-220px':'0'}
  }
  @media (max-width:567px)
  {
  padding:30px;
  height:200px;
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
     font-size: 22px;
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
  display:flex;
  margin-top:100px;
   margin-bottom:10px;
  align-items:center;
  flex-flow:column nowrap;
  font-size:20px;
  line-height: 1.56;
  letter-spacing: -0.5px;
  width:100%;
  img
  {
  width:26px;
  height:26px;
  margin-bottom:10px;
  
  }
  }
  @media (max-width:567px)
  {
  text-align:center;
   margin-top:60px;
  }
  
  `;
export const FeatureDescription=styled.div`
text-align:left;
color:white;
font-size:18px;
@media (max-width:1023px) {
    font-size:16px;
}

@media (max-width:450px) {
    font-size:14px}

  `;

export const FeatureMobViewImageContainer=ImageParentContainer.extend`
display:none;
@media (max-width:767px)
{

z-index:100;
position:relative;
display:flex;
width:80%;
align-items:center;
justify-content:center;
width:100%;

img
{
width:80%;}
  }
  
  @media (max-width:450px)
  {
   height:220px;}
   
    @media (max-width:375px)
  {
   height:160px;}
  `;


