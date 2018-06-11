import React, {Component} from 'react';
import {
    ContentContainer, DisplayViewContainer, DownloadButtonContainer, MainHeading,
    SubContentHeading
} from './MainContentContainer.styled';
import {ThemeButton} from "static/styled/custom.styled";

export default class MainContentContainer extends Component
{
    render(){
        return(
          <DisplayViewContainer>
            <ContentContainer>
                <MainHeading color="#fff" fontSize="40px">
                    Designed to help you raise a happy reader
                </MainHeading>
                <SubContentHeading>
                    Spend 10 minutes with your child anywhere, anytime to nurture their will and skill to read.
                </SubContentHeading>
                <DownloadButtonContainer>
                <ThemeButton primary> Download the App</ThemeButton>
                </DownloadButtonContainer>
            </ContentContainer>
          </DisplayViewContainer>
        )
    }
}
