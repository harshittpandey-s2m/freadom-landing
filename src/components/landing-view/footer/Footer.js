import React, {Component} from 'react';
import {
    FooterContainer, FooterLeftContainer, FooterRightContainer,
    MotoDetailsContainer, DownloadContainer, FooterMainContainer, FooterMenuContainer, AddressDetailsContainer,
    IconItem, IconListContainer
} from './Footer.styled';
import {Link} from "react-router-dom";
import {ImageContainer,ImageParentContainer,Heading} from "static/styled/custom.styled";

export default class Footer extends Component
{
    render(){
        return(
          <FooterContainer>
                <FooterLeftContainer>
                    <ImageParentContainer width="150px" height="50px">
                    <ImageContainer src={require("static/img/company-logo.png")}/>
                    </ImageParentContainer>
                    <MotoDetailsContainer primary>
                        Creating a nation of 10 million readers by 2022. We aim to impact the way in which children  learn to read in English.
                    </MotoDetailsContainer>
                    <Heading color='white' weight="500"> Download Here</Heading>
                    <DownloadContainer>
                        <a href="//bit.ly/getfreadomios" target="_blank">
                        <ImageParentContainer width="120px" height="50px" style={{marginRight:'10px'}}>
                            <ImageContainer src={require("static/img/app-store.png")}/>
                        </ImageParentContainer>
                        </a>
                        <a href="//bit.ly/getfreadom" target="_blank">
                        <ImageParentContainer width="120px" height="50px">
                            <ImageContainer src={require("static/img/google-play.png")}/>
                        </ImageParentContainer>
                        </a>
                    </DownloadContainer>
                </FooterLeftContainer>
              <FooterRightContainer>
                  <FooterMainContainer>
                    <FooterMenuContainer>
                        <div> <a href="http://stones2milestones.com/"> About Us </a></div>
                        <div> <a href="mailto:go@getfreadom.com"> Contact us </a> </div>
                        <div><a href="https://getfreadom.com/terms-privacy"> Terms & Privacy </a></div>
                    </FooterMenuContainer>
                            <AddressDetailsContainer>
                                <MotoDetailsContainer>
                                    <span> <img src={require("static/img/location.png")} alt="location"/> </span>
                                    419, Tower A, Spaze ITech Park, Sohna Road,  Sector 49, Gurgaon - 122018, Haryana
                                </MotoDetailsContainer>
                                <MotoDetailsContainer>
                                    <span> <img src={require("static/img/phone-icon.png")} alt="phoneIcon"/> </span>
                                    +91 90770 77777
                                </MotoDetailsContainer>
                            </AddressDetailsContainer>
                  </FooterMainContainer>
                  <IconListContainer>
                      <IconItem>
                          <i className="fa fa-facebook"/>
                      </IconItem>
                      <IconItem>
                          <i className="fa fa-twitter"/>
                      </IconItem>
                      <IconItem>
                          <i className="fa fa-linkedin"/>
                      </IconItem>
                      <IconItem>
                          <i className="fa fa-instagram"/>
                      </IconItem>
                  </IconListContainer>
              </FooterRightContainer>
          </FooterContainer>
        )
    }
}
