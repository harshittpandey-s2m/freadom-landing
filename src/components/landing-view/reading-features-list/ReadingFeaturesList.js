import React, {Component} from 'react';
import {ReadingDescription, ReadingImagesContainer, ReadingItem, ReadingItemList,
    ReadingListParentContainer, ReadingSubImage
} from './ReadingFeaturesList.styled';
import {Heading,ImageParentContainer,ImageContainer} from "static/styled/custom.styled";


export default class ReadingFeaturesList extends Component
{
    render(){
        return(
          <ReadingListParentContainer>
                <Heading color="#fff" fontSize="30px">
                    Why Freadom?
                </Heading>
              <ReadingItemList>
                  <ReadingItem>
                      <ReadingImagesContainer>
                  <ImageParentContainer width="80px" height="80px" opacity="0.1">
                      <ImageContainer src={require("static/img/book-icon.png")} />
                  </ImageParentContainer>
                  <ReadingSubImage width="50px" height="50px">
                      <ImageContainer src={require("static/img/book-icon.png")}/>
                  </ReadingSubImage>
                      </ReadingImagesContainer>
                      <ReadingDescription primary >
                          Reading is the root of all <span> academic achievement </span>
                      </ReadingDescription>
                      <ReadingDescription>
                          There is a strong, proven connection between reading and academic achievement; avid readers have a 14.4% advantage in vocabulary, 9.9% in mathematics, and 8.6% in spelling.
                      </ReadingDescription>
                  </ReadingItem>

                  <ReadingItem>
                      <ReadingImagesContainer>
                          <ImageParentContainer width="80px" height="80px" opacity="0.1">
                              <ImageContainer src={require("static/img/eye-icon.png")} />
                          </ImageParentContainer>
                          <ReadingSubImage width="50px" height="50px">
                              <ImageContainer src={require("static/img/eye-icon.png")}/>
                          </ReadingSubImage>
                      </ReadingImagesContainer>
                      <ReadingDescription primary >
                          Reading builds global <span> perspectives </span>
                      </ReadingDescription>
                      <ReadingDescription>
                          It enables us to see the connections in the world, get curious and build bridges between communities.
                      </ReadingDescription>
                  </ReadingItem>

                  <ReadingItem>
                      <ReadingImagesContainer>
                          <ImageParentContainer width="80px" height="80px" opacity="0.1">
                              <ImageContainer src={require("static/img/face-icon.png")} />
                          </ImageParentContainer>
                          <ReadingSubImage width="50px" height="50px">
                              <ImageContainer src={require("static/img/face-icon.png")}/>
                          </ReadingSubImage>
                      </ReadingImagesContainer>
                      <ReadingDescription primary >
                          <span> Good readers </span> make great leaders
                      </ReadingDescription>
                      <ReadingDescription>
                          The one habit successful people have in common is that of reading. Research proves they manage better teams, earn more and are eternal learners.
                      </ReadingDescription>

                  </ReadingItem>

                  <ReadingItem>
                      <ReadingImagesContainer>
                          <ImageParentContainer width="80px" height="80px" opacity="0.1">
                              <ImageContainer src={require("static/img/user-heart.png")} />
                          </ImageParentContainer>
                          <ReadingSubImage width="50px" height="50px">
                              <ImageContainer src={require("static/img/user-heart.png")}/>
                          </ReadingSubImage>
                      </ReadingImagesContainer>
                      <ReadingDescription primary >
                          Reading makes us kinder,<span> better people </span>
                      </ReadingDescription>
                      <ReadingDescription>
                          Reading helps us look beyond ourselves and exercise empathy. The power of reading is truly transformational.
                      </ReadingDescription>
                  </ReadingItem>


              </ReadingItemList>
          </ReadingListParentContainer>
        )
    }
}
