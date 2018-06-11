import React, {Component} from 'react';
import {
    FeatureBackgroundImage, FeatureHeadingContainer, FeatureDescription,
    FeatureItem, FeatureItemDataContainer, FeatureItemLeftContainer, FeatureListContainer,
    FeatureListParentContainer, FeatureItemRightContainer, FeatureItemImageContainer, FeatureMobViewImageContainer
} from "./FeaturesList.styled";
import {ImageContainer} from "static/styled/custom.styled";
import { Parallax } from 'react-scroll-parallax';
import {ImageParentContainer} from "../../../static/styled/custom.styled";
export default class FeaturesList extends Component
{
    getOffsetMin=()=>{
        let windowSize=window.outerWidth;
        if(windowSize>1024)
            return -45;
        else if(windowSize>767)
            return -40;
        else if(windowSize>567)
            return -30;
        else
            return 0;

    }

    getOffsetMax=()=>{
        let windowSize=window.outerWidth;
        if(windowSize>1024)
            return 45;
        else if(windowSize>767)
            return 40;
        else if(windowSize>567)
            return 30;
        else
            return 0;

    }
    render(){

        let featureList=[
            {
               name:'READ STORIES',
               description:'Curated feed of stories based on child’s reading level and interest powered by a recommendation engine',
               backgroundImage:'open-book-trans',
               image:'open-book-white',
                mobImage:'mob-stories',
                mobViewImage:'stories-mob-view'
            },
            {
                name:'LOG YOUR READINGS',
                description:'Keep a track of your daily reading with smart logs and time tracking',
                backgroundImage:'log-reading-trans',
                image:'log-reading-white',
                mobImage:"mob-reading",
                mobViewImage:'reading-mob-view'
            },
            {
                name:'DO ACTIVITIES',
                description:'10 minutes activity packs & monthly reading challenges sorted by interests and mood',
                backgroundImage:'do-activity-trans',
                image:'do-activity-white',
                mobImage:"mob-stories",
                mobViewImage:'act-mob-view',
            },
            {
                name:'NEWS FREADS',
                description:'Grade level appropriate bite sized news stories that are inspirational & aspirational along with a flash quiz',
                backgroundImage:'log-reading-trans',
                image:'fread-white',
                mobImage:"mob-news",
                mobViewImage:'freads-mob-view'
            },
            {
                name:'COMPLETE CHALLENGES',
                description:'Earn badges, freado points and maintain your streak with your peers at school and the freadom universe',
                backgroundImage:'do-activity-trans',
                image:'tropy-white',
                mobImage:"mob-challenges",
                mobViewImage:'challenges-mob-view',
            },

        ];


        return(
          <FeatureListParentContainer>

                <FeatureListContainer>
                    {featureList.map((feature,index)=>(
                        <FeatureItem key={index} style={{position:'relative'}} active={index%2===0}>
                            <Parallax offsetYMax={window.outerWidth>767?40:0} offsetYMin={window.outerWidth>767?-40:0}>

                        <FeatureItemLeftContainer>

                              <FeatureBackgroundImage src={require("static/img/"+feature.backgroundImage+".png")} alt="background"/>
                            <FeatureHeadingContainer>
                                <img src={require("static/img/"+feature.image+".png")} alt="feature-left"/>
                                {'  ' +feature.name}
                            </FeatureHeadingContainer>
                            <FeatureDescription>
                                {feature.description}
                            </FeatureDescription>
                        </FeatureItemLeftContainer>
                            </Parallax>
                        <FeatureItemRightContainer primary>
                            <FeatureMobViewImageContainer height={"300px"}>
                                <ImageContainer src={require("static/img/"+feature.mobViewImage+".png")}/>
                            </FeatureMobViewImageContainer>
                            <FeatureItemImageContainer src={require("static/img/"+feature.mobImage+".png")} height="300"/>
                        </FeatureItemRightContainer>

                    </FeatureItem>))}
                </FeatureListContainer>
          </FeatureListParentContainer>
        )
    }
}
