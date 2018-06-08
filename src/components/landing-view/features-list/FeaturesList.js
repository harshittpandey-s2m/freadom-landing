import React, {Component} from 'react';
import {
    FeatureBackgroundImage, FeatureHeadingContainer, FeatureDescription,
    FeatureItem, FeatureItemDataContainer, FeatureItemLeftContainer, FeatureListContainer,
    FeatureListParentContainer, FeatureItemRightContainer, FeatureItemImageContainer
} from "./FeaturesList.styled";
import {ImageContainer} from "static/styled/custom.styled";
import { Parallax } from 'react-scroll-parallax';
export default class FeaturesList extends Component
{
    render(){

        let featureList=[
            {
               name:'READ STORIES',
               description:'Curated feed of stories based on child’s reading level and interest powered by a recommendation engine',
               backgroundImage:'open-book-trans',
               image:'open-book-white',
                mobImage:'mob-stories',
            },
            {
                name:'LOG YOUR READINGS',
                description:'Keep a track of your daily reading with smart logs and time tracking',
                backgroundImage:'log-reading-trans',
                image:'log-reading-white',
                mobImage:"mob-reading",
            },
            {
                name:'DO ACTIVITIES',
                description:'10 minutes activity packs & monthly reading challenges sorted by interests and mood'

                ,
                backgroundImage:'do-activity-trans',
                image:'do-activity-white',
                mobImage:"mob-stories",
            },
            {
                name:'NEWS FREADS',
                description:'Grade level appropriate bite sized news stories that are inspirational & aspirational along with a flash quiz',
                backgroundImage:'log-reading-trans',
                image:'fread-white',
                mobImage:"mob-news",
            },
            {
                name:'COMPLETE CHALLENGES',
                description:'Earn badges, freado points and maintain your streak with your peers at school and the freadom universe',
                backgroundImage:'do-activity-trans',
                image:'tropy-white',
                mobImage:"mob-challenges",
            },

        ];


        return(
          <FeatureListParentContainer>

                <FeatureListContainer>
                    {featureList.map((feature,index)=>(index%2===0?
                        <FeatureItem key={index} style={{position:'relative'}}>
                            <Parallax offsetYMax={40} offsetYMin={-50}>
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
                        <FeatureItemRightContainer>
                            <FeatureItemImageContainer src={require("static/img/"+feature.mobImage+".png")} height="300"/>
                        </FeatureItemRightContainer>

                    </FeatureItem>:
                        <FeatureItem key={index} style={{position:'relative'}}>

                            <FeatureItemRightContainer>
                                <FeatureItemImageContainer src={require("static/img/"+feature.mobImage+".png")} height="300"/>
                            </FeatureItemRightContainer>

                            <Parallax offsetYMax={45} offsetYMin={-45} style={{width:'46%'}}>
                                <FeatureItemLeftContainer>
                                    <FeatureBackgroundImage src={require("static/img/"+feature.backgroundImage+".png")} alt="background"/>
                                    <FeatureHeadingContainer>
                                        <img src={require("static/img/"+feature.image+".png")} alt="feature-left"/>
                                        {'  ' +feature.name}
                                    </FeatureHeadingContainer>
                                    <FeatureDescription>
                                        Keep a track of your daily reading with smart logs and time tracking
                                    </FeatureDescription>
                                </FeatureItemLeftContainer>
                            </Parallax>
                        </FeatureItem>))}
                </FeatureListContainer>
          </FeatureListParentContainer>
        )
    }
}
