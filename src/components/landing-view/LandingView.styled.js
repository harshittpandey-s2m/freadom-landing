import styled from "styled-components";
import freadomimage from "static/img/freadom_top.jpg";
import freadomMiddleimage from "static/img/freadom_middle.jpg";
import freadomBottomimage from "static/img/freadom_footer.png";

export const FreadomBodyContainer=styled.div`

        padding:42px;
        height: auto;
   padding:42px;
    
    background-size:cover;
    padding-bottom:0px;
    background-repeat:no-repeat;
    max-width: 100%;
       @media (max-width: 1023px) {
  background-position:center;
  }   
  @media (max-width: 768px) {
   padding:28px;
  }
   @media (max-width: 567px) {
   padding:20px;
  }
  
        `;
export const FreadomTopContainer=FreadomBodyContainer.extend`
   
    background-image:url(${freadomimage});
   @media (max-width:567px)
   {
   background: linear-gradient(to bottom, rgba(20,9,33,1) 0%, rgba(20,9,33,1) 8%, rgba(20,9,33,1) 14%, rgba(20,9,33,1) 24%, rgba(24,10,38,1) 30%, rgba(41,16,58,1) 57%, rgba(41,16,58,1) 71%);
   background-image: url(${freadomimage});
   background-size: contain;
    background-position: 100% calc(100% - 40px);
    background-repeat:no-repeat;
    }
    
     @media (max-width:425px)
   {
   background-size: contain;
    background-position: 100% calc(100% - 100px);
    }
     @media (max-width:320px)
   {
   background-size: contain;
    background-position: 100% calc(100% - 100px);
    }
`;

export const FreadomMiddleContainer=FreadomBodyContainer.extend`
 height: auto;
   
    margin-top:-360px;
    
  
    background-image:url(${freadomMiddleimage})
   
`;

export const FreadomBottomContainer=FreadomBodyContainer.extend`
 height: auto;
   
    margin-top:-420px;
    padding-top:120px;
   padding-bottom:40px;
    background-image:url(${freadomBottomimage});
   @media (max-width:767px)
   {
   margin-top:-480px;}
`;
