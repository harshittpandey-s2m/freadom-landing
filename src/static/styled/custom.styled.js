import styled from "styled-components"

export const secondary = "#ff7d0d";
export const border = '#eee';
export const textColor = "#84817a";
export const borderDark = '#d1ccc0';
export const success ='#26de81';
export const error = '#eb4d4b';


export const ThemeButton = styled.button`
  border: none;
  border-radius: ${props=>props.primary?'100px':'0'};
  border-color: ${props => (props.primary ? "white" : `${secondary}`)};
  padding: 6px 20px;
  background: ${props => (props.primary ? `${secondary}` : "transparent")};
  color: ${props => (props.primary ? "white" : `${secondary}`)};
  font-size: 15px;
  cursor: pointer;
  outline: none;
`;
export const Heading=styled.div`
  font-size:${props=>props.fontSize?props.fontSize:"var(--xlg-font-size)"};
  color:${props=>props.color?props.color:'#000'};
  font-weight:${props=>props.weight?props.weight:'600'};
  display:flex;
  text-align:left;
  `;

export const SubHeading=styled.div`
font-size:${props=>props.fontSize?props.fontSize:"var(--lg-font-size)"};
  color:${props=>props.color?props.color:'#000'};
  font-weight:${props=>props.primary?'bold':'500'};
  display:flex;
  text-align:left;`;

export const ImageContainer=styled.img`
  height: auto;
    width: 100%;
    max-width: 100%;
    object-fit: cover;
    object-position: center;`;

export const ImageParentContainer=styled.div`
width:${props=>props.width};
opacity:${props=>props.opacity?props.opacity:'1'}
height:${props=>props.height}`;

export const ComponentContainer=styled.div`
   padding:40px;
   `;
