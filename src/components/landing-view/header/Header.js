import React, {Component} from 'react';
import {HeaderLeftContainer, HeaderParentContainer, HeaderRightContainer, HeaderThemeButton} from './Header.styled';
import swal from "sweetalert2";

export default class Header extends Component
{
    getDownloadLink=()=>{
            let userAgent = navigator.userAgent || navigator.vendor || window.opera;

            // Windows Phone must come first because its UA also contains "Android"
            if (/windows phone/i.test(userAgent) || /android/i.test(userAgent)) {
                return "//bit.ly/getfreadom";
            }
            else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                return "//bit.ly/getfreadomios";
            }

            return "//bit.ly/getfreadom";
        };

    handleDownloadBtn=()=>{
        let link=this.getDownloadLink() || "";
       // console.log(link);
        if(link!=="")
        window.open(link, '_blank');
        else
        {
            swal('Oops!','You have browser opened up in your system');
        }
    }
    render(){
        return(
          <HeaderParentContainer>
                <HeaderLeftContainer>
                    <img src={require("static/img/logo.png")} alt="logo"/>
                </HeaderLeftContainer>
                    <HeaderRightContainer>
                        {/*<HeaderThemeButton> Sign in</HeaderThemeButton>*/}
                        <HeaderThemeButton primary  onClick={this.handleDownloadBtn}> Download the App</HeaderThemeButton>
                    </HeaderRightContainer>


          </HeaderParentContainer>
        )
    }
}
