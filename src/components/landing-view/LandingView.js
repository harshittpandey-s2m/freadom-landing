import React, {Component} from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import FeaturesList from "./features-list/FeaturesList";
import QuestionPanelList from "./question-panel-list/QuestionPanelList";
import QueryInputContainer from "./query-input-container/QueryInputContainer";
import MainContentContainer from "./main-content-container/MainContentContainer";
import ReadingFeaturesList from "./reading-features-list/ReadingFeaturesList";
import {FreadomBottomContainer, FreadomMiddleContainer,
    FreadomTopContainer
} from "./LandingView.styled";

export default class LandingView extends Component
{
    render(){
        return(
            <div>
         <FreadomTopContainer>
             <Header/>
             <MainContentContainer/>
         </FreadomTopContainer>

             <FeaturesList/>

                    <FreadomMiddleContainer>
             <ReadingFeaturesList/>
             <QuestionPanelList/>
                    </FreadomMiddleContainer>
                <FreadomBottomContainer>
                    <QueryInputContainer/>
             <Footer/>
                </FreadomBottomContainer>

            </div>
        )
    }
}
