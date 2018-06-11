import React, {Component} from 'react';
import {
    QuestionDescription,
    QuestionItemHeader, QuestionListContainer, QuestionListItem, QuestionListedContainer,
    QuestionPanelContainer, ReadMoreButton, QuestionSubHeading
} from './QuestionPanelList.styled';
import {Heading,ThemeButton, SubHeading} from "static/styled/custom.styled";


export default class QuestionPanelList extends Component
{

    constructor(props)
    {
        super();
        this.state=({
            selectedIndex:-1,
            enableReadMore:false,
        })
    }


    handleReadMoreBtn=()=>{
        this.setState({
            enableReadMore:!this.state.enableReadMore,
        })
    }


    handleSelectedIndex=(index)=>{
        if(this.state.selectedIndex===index)
            this.setState({
                selectedIndex:-1,
            })
        else
        this.setState({
            selectedIndex:index,
        })
    };

    render(){
        let questionListData=[{
            question:"Why do I need Freadom? What is the advantage of using it?",
            answer:"Why do I need Freadom? What is the advantage of using it? \n For ‘YOU’, the parent, we have developed a unique mobile app, called FREADOM, which can be downloaded from the iPhone app store or the Android play store. It is an app designed to help you raise a happy reader at home. On the App, you can:\n" +
            "READ STORIES: Curated feed of stories based on child’s reading level and interest powered by a recommendation engine \n" +
            "LOG YOUR READING: Keep a track of your daily reading with smart logs and time tracking \n" +
            "DO: 10 minutes activity packs & monthly reading challenges sorted by interests and mood \n" +
            "NEWS FREADS: Grade level appropriate, bite sized news stories, that are inspirational & aspirational, along with a flash quiz \n" +
            "COMPETE: Earn badges, freado points and maintain your streak with your peers at school and the Freadom universe. The top performers will get a certificate at the end but for us all children are winners. \n" +
            "Get ready for a year full of reading adventures!"
        },
            {
                question:'How can I install Freadom',
                answer:'Steps to download and link ‘WOW Code’:\n' +
                'Download the ‘FREADOM’ app from Google Play Store or Apple App Store:\n' +
                'Android: bit.ly/getfreadom\n' +
                'Apple: bit.ly/getfreadomios\n' +
                'After you download it, click on ‘Explore’ located at the bottom of the first screen.\n' +
                'Slide through the cards and read the articles regarding why reading is important.\n',
            },
            {
                question:'What is WOW code?',
                answer:'',
            },
            {
                question:'How do I link the WOW Code?',
                answer:'',
            },
            {
                question:'I have forgotten password. How do I login?',
                answer:'',
            },
        ];

        return(
          <QuestionPanelContainer>
              <Heading fontSize="24px">
                  People frequently ask
              </Heading>

              <QuestionListContainer >
                  <QuestionListItem style={window.outerWidth>567?{borderBottom:'1px solid rgba(0,0,0,0.3)'}:{}} >
                      <QuestionItemHeader onClick={()=>this.handleSelectedIndex(1)} active={this.state.selectedIndex===1}>
                          <QuestionSubHeading primary fontSize="18px">
                              Why do I need Freadom? What is the advantage of using it?
                          </QuestionSubHeading>
                          <i className="fa fa-angle-down"/>
                      </QuestionItemHeader>

                      <QuestionDescription active={this.state.selectedIndex===1}>
                          <div>For ‘YOU’, the parent, we have developed a unique mobile app, called FREADOM, which can be downloaded from the iPhone app store or the Android play store. It is an app designed to help you raise a happy reader at home. On the App, you can:</div>
                          <div> READ STORIES: Curated feed of stories based on child’s reading level and interest powered by a recommendation engine </div>
                              <div> LOG YOUR READING: Keep a track of your daily reading with smart logs and time tracking </div>
                              <div> DO: 10 minutes activity packs & monthly reading challenges sorted by interests and mood </div>
                              <div> NEWS FREADS: Grade level appropriate, bite sized news stories, that are inspirational & aspirational, along with a flash quiz </div>
                              <div> COMPETE: Earn badges, freado points and maintain your streak with your peers at school and the Freadom universe. The top performers will get a certificate at the end but for us all children are winners. </div>
                              <div> Get ready for a year full of reading adventures!".</div>


                      </QuestionDescription>
                  </QuestionListItem>
                  {window.outerWidth<=567?<ReadMoreButton primary onClick={this.handleReadMoreBtn} > Read More </ReadMoreButton>:<div>
                  <QuestionListItem style={{borderBottom:'1px solid rgba(0,0,0,0.3)'}} >
                      <QuestionItemHeader onClick={()=>this.handleSelectedIndex(2)} active={this.state.selectedIndex===2}>
                          <QuestionSubHeading primary fontSize="18px">
                              How can I Install Freadom?
                          </QuestionSubHeading>
                          <i className="fa fa-angle-down"/>
                      </QuestionItemHeader>
                      <QuestionDescription active={this.state.selectedIndex===2}>
                          <div> Steps to download and link ‘WOW Code’: </div>
                          <QuestionListedContainer type="disc">
                              <li> Download the ‘FREADOM’ app from Google Play Store or Apple App Store: </li>
                              <li> Android:<a href="//bit.ly/getfreadom" target="_blank"> bit.ly/getfreadom </a></li>
                              <li>Apple: <a href="//bit.ly/getfreadomios" target="_blank">bit.ly/getfreadomios </a></li>
                              <li>After you download it, click on ‘Explore’ located at the bottom of the first screen. </li>
                              <li>Slide through the cards and read the articles regarding why reading is important </li>
                              <li>Once you are done with them, you can click on ‘Next’ to proceed further.</li>
                              <li>For registering your child on the app, fill in the details and select the grade that your child is in.</li>
                          </QuestionListedContainer>
                          <div> Now you’re all set to make reading fun for your child. Enjoy! </div>



                      </QuestionDescription>
                  </QuestionListItem>

                  <QuestionListItem style={{borderBottom:'1px solid rgba(0,0,0,0.3)'}} >
                      <QuestionItemHeader onClick={()=>this.handleSelectedIndex(3)} active={this.state.selectedIndex===3}>
                          <QuestionSubHeading primary fontSize="18px">
                              What is WOW code?
                          </QuestionSubHeading>
                          <i className="fa fa-angle-down"/>
                      </QuestionItemHeader>
                      <QuestionDescription active={this.state.selectedIndex===3}>
                          WOW Code is a 6 digit alphanumeric code shared by the school to link the child on the app to the school enrolled in the Wings of Words program.
                          You do not need a WOW code to sign up on the app. You can proceed without the code too. However, if your child's school is partnered with us, ask for the WOW code provided to them so that your child could be linked to the school. You will also be able to unlock more activities with the freados that you earn.
                      </QuestionDescription>
                  </QuestionListItem>

                  <QuestionListItem style={{borderBottom:'1px solid rgba(0,0,0,0.3)'}} >
                      <QuestionItemHeader onClick={()=>this.handleSelectedIndex(4)} active={this.state.selectedIndex===4}>
                          <QuestionSubHeading primary fontSize="18px">
                              How do I link the 'WOW Code'?
                          </QuestionSubHeading>
                          <i className="fa fa-angle-down"/>
                      </QuestionItemHeader>
                      <QuestionDescription active={this.state.selectedIndex===4}>
                          <QuestionListedContainer type="disc">
                              <li> Enter the WOW Code that you have received from your child’s school to link him/her on the app and also win extra points.</li>
                              <li>WOW Code is a unique 6 digit alphanumeric code that you would have received from the school for your child.</li>
                              <li>Click on ‘Submit’ and go to finishing your child’s profile.</li>
                              <li>Now, you have to register yourself as a parent. Fill in the details that you see on the screen and click ‘Submit’.</li>
                              <li>In case you forget to enter the WOW Code earlier during registration, you have the option of doing it later too.</li>
                              <li>On your homepage, you can see a panel that says ‘Link WOW Code’ at the top.</li>
                              <li>Click on it. A pop-up will appear.</li>
                              <li>Enter the code in the space provided on the pop-up.</li>
                              <li>Click ‘Submit’. </li>
                          </QuestionListedContainer>
                      </QuestionDescription>
                  </QuestionListItem>


                  <QuestionListItem style={{borderBottom:'1px solid rgba(0,0,0,0.3)'}} >
                      <QuestionItemHeader onClick={()=>this.handleSelectedIndex(5)} active={this.state.selectedIndex===5}>
                          <SubHeading primary fontSize="18px">
                              I have forgotten password. How do I login?
                          </SubHeading>
                          <i className="fa fa-angle-down"/>
                      </QuestionItemHeader>
                      <QuestionDescription active={this.state.selectedIndex===5}>
                      <div>
                          This shouldn't be an issue. When you click on LOGIN, we have an option for 'Forgot Password'.
                          <div>Please click on that. You will receive an OTP on your mobile for verification. Post that you will be able to set a new password yourself.</div>
                      </div>
                          <div>
                              In case you aren't able to do so, please do reach out. I will reset it for you and/or guide you through the process.
                          </div>
                      </QuestionDescription>
                  </QuestionListItem>


                  <QuestionListItem style={{borderBottom:'1px solid rgba(0,0,0,0.3)'}} >
                      <QuestionItemHeader onClick={()=>this.handleSelectedIndex(6)} active={this.state.selectedIndex===6}>
                          <SubHeading primary fontSize="18px">
                              Can I download Freadom app on two different mobile phones?
                          </SubHeading>
                          <i className="fa fa-angle-down"/>
                      </QuestionItemHeader>
                      <QuestionDescription active={this.state.selectedIndex===6}>
                          <div>
                              Yes, you can.</div>
                          <div>A parent can download Freadom in as many phones as they want. However, they should use the same account to 'Sign In' on all the phones.</div>
                          <div>
                              If the parent has more than one child, they can add more than one child on the app too.
                          </div>
                      </QuestionDescription>
                  </QuestionListItem>


                  <QuestionListItem style={{borderBottom:'1px solid rgba(0,0,0,0.3)'}} >
                      <QuestionItemHeader onClick={()=>this.handleSelectedIndex(7)} active={this.state.selectedIndex===7}>
                          <SubHeading primary fontSize="18px">
                              Can I do the same activity again and again?
                          </SubHeading>
                          <i className="fa fa-angle-down"/>
                      </QuestionItemHeader>
                      <QuestionDescription active={this.state.selectedIndex===7}>
                          <div>
                              Yes, but you cannot take the quiz again. You will also not be awarded the Freado points more than once for each activity.
                          </div>
                      </QuestionDescription>
                  </QuestionListItem>


                  <QuestionListItem style={{borderBottom:'1px solid rgba(0,0,0,0.3)'}} >
                      <QuestionItemHeader onClick={()=>this.handleSelectedIndex(8)} active={this.state.selectedIndex===8}>
                          <SubHeading primary fontSize="18px">
                              How often are the reading challenges uploaded?
                          </SubHeading>
                          <i className="fa fa-angle-down"/>
                      </QuestionItemHeader>
                      <QuestionDescription active={this.state.selectedIndex===8}>
                          <div>
                              Reading challenges are uploaded every month. Its ideal to do 2-4 activities every week and 1 reading challenge a month.</div>
                      </QuestionDescription>
                  </QuestionListItem>

                  <QuestionListItem style={{borderBottom:'1px solid rgba(0,0,0,0.3)'}} >
                      <QuestionItemHeader onClick={()=>this.handleSelectedIndex(9)} active={this.state.selectedIndex===9}>
                          <SubHeading primary fontSize="18px">
                              How do I use the Freadom app? Is there any guide available? Can I get any help to know more about the app?
                          </SubHeading>
                          <i className="fa fa-angle-down"/>
                      </QuestionItemHeader>
                      <QuestionDescription active={this.state.selectedIndex===9}>
                          <div>
                              I  have a guide explaining how to download the app, steps to link the WOW code, and how to use it. It will also help you with all the sections in the app and how to make the best out of it for your child. You can view the guide here:
                          </div>
                          <div> Freadom App Guide: <a href="//bit.ly/freadomguide" target="_blank"> bit.ly/freadomguide </a></div>
                          <br/>
                          <div> You can also contact our helpline number: +91 90770 77777 ;</div>
                          <div>For email queries, send us a mail at: go@getfreadom.com</div>
                      </QuestionDescription>
                  </QuestionListItem>

                  <QuestionListItem style={{borderBottom:'1px solid rgba(0,0,0,0.3)'}} >
                      <QuestionItemHeader onClick={()=>this.handleSelectedIndex(10)} active={this.state.selectedIndex===10}>
                          <SubHeading primary fontSize="18px">
                              Is there a platform on which parents can communicate with you directly?
                          </SubHeading>
                          <i className="fa fa-angle-down"/>
                      </QuestionItemHeader>
                      <QuestionDescription active={this.state.selectedIndex===10}>
                          <div>
                              Yes! We have a beloved parent community on Facebook where ‘Freaders’ can interact and share their experiences and related stuff around reading. We recommend all young parents to be a part of it. You can Join it using the following link:
                          </div>
                          <div><a href="https://www.facebook.com/groups/freaders/" target="_blank">https://www.facebook.com/groups/freaders/ </a></div>
                      </QuestionDescription>
                  </QuestionListItem>

                  <QuestionListItem style={{borderBottom:'1px solid rgba(0,0,0,0.3)'}} >
                      <QuestionItemHeader onClick={()=>this.handleSelectedIndex(11)} active={this.state.selectedIndex===11}>
                          <SubHeading primary fontSize="18px">
                              Can Freadom be downloaded on the laptop?
                          </SubHeading>
                          <i className="fa fa-angle-down"/>
                      </QuestionItemHeader>
                      <QuestionDescription active={this.state.selectedIndex===11}>
                          <div>
                              No, the app cannot be loaded on the laptop. Currently, Freadom is a mobile only application available for both Android & iOS Phones.It works on Tabs & Ipad. </div>
                      </QuestionDescription>
                  </QuestionListItem>


                  <QuestionListItem style={{borderBottom:'1px solid rgba(0,0,0,0.3)'}} >
                      <QuestionItemHeader onClick={()=>this.handleSelectedIndex(12)} active={this.state.selectedIndex===12}>
                          <SubHeading primary fontSize="18px">
                              If the app is uploaded on a certain phone can it be deleted and uploaded on another number?
                          </SubHeading>
                          <i className="fa fa-angle-down"/>
                      </QuestionItemHeader>
                      <QuestionDescription active={this.state.selectedIndex===12}>
                          <div>
                              Your child’s Freadom account is independent of the phone on which it is. Once you have signed up as a parent using a particular phone number / email id & password, you can use the same phone number / email id & password combination to login to Freadom from any phone. You do not need to delete the earlier number and upload a new one. You just need to sign in with the earlier number / email id on the new phone.</div>
                      </QuestionDescription>
                  </QuestionListItem>


                  <QuestionListItem>
                      <QuestionItemHeader onClick={()=>this.handleSelectedIndex(13)} active={this.state.selectedIndex===13}>
                          <SubHeading primary fontSize="18px">
                              How can I share an experience on Freadom?
                          </SubHeading>
                          <i className="fa fa-angle-down"/>
                      </QuestionItemHeader>
                      <QuestionDescription active={this.state.selectedIndex===13}>
                          <div>
                              After completing any activity, there is a button that pops to share experience your via photo, video, audio & text. Please choose the best option and it would be published and shared with other parents and children on Freadom.
                          </div>
                      </QuestionDescription>
                  </QuestionListItem> </div>}





              </QuestionListContainer>
          </QuestionPanelContainer>
        )
    }
}
