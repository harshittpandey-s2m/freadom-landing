import React, {Component} from 'react';
import {
     ContentContainer, DisplayViewContainer, MainHeading,
    SubContentHeading
} from './MainContentContainer.styled';

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
            </ContentContainer>
          </DisplayViewContainer>
        )
    }
}
