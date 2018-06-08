import React, {Component} from 'react';
import {
    EmailInputContainer, QueryInputParentContainer, QueryLabelContainer,
    QueryRightContainer, QueryThemeButton, QueryOptionItem, QueryOptionsParentContainer
} from './QueryInputContainer.styled';
import swal from "sweetalert2"
export default class QueryInputContainer extends Component
{

    constructor(props)
    {
        super();
        this.state=({
            emailId:''
        })
    }

    handleEmailBtn=(evt)=>{

        //console.log("hello");
        if(evt.key==='Enter') {

            let exp=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
            if(this.state.emailId!=='' && exp.test(this.state.emailId))
            {
                window._scq.push(["identify", {
                    email: this.state.emailId,tags: ["Freadom Landing Page Signup"],
                    success:swal('','Thanks for joining Freadom community!','success')}
                ]);

                this.setState({emaildId:'',})}
            else
            {
                swal("",'You entered wrong email format','warning')
            }
        }
    };


    handleEmailIdChange=(evt)=>{


        this.setState({
            emailId:evt.target.value,
        })
    };


    handlePhoneBtn=(evt)=>{
        // let settings = {
        //     "async": true,
        //     "crossDomain": true,
        //     "url": "https://control.msg91.com/api/postsms.php",
        //     "method": "POST",
        //     "headers": {
        //         "content-type": "application/xml"
        //     },
        //     "data":
        //         "<MESSAGE> " +
        //         "<AUTHKEY>Authentication Key</AUTHKEY> " +
        //         "<SENDER>SenderID</SENDER> " +
        //         "<ROUTE>Template</ROUTE> <CAMPAIGN>XML API</CAMPAIGN> " +
        //         "<COUNTRY>country code</COUNTRY> " +
        //         "<SMS TEXT=\"message1\" >" +
        //         " <ADDRESS TO=\"number1\"/> " +
        //         "</MESSAGE>"
        // }
        //
        // $.ajax(settings).done(function (response) {
        //     console.log(response);
        // });
    };



    handleJoinBtn=()=>{
        let exp=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if(this.state.emailId!=='' && exp.test(this.state.emailId))
        {
        window._scq.push(["identify", {
            email: this.state.emailId,tags: ["Freadom Landing Page Signup"],
            success:swal('','Thanks for joining Freadom community!','success')}
            ]);

        this.setState({emaildId:'',})}
        else
        {
            swal("",'You entered wrong email format','warning')
        }
    };

    componentDidMount()
    {
        console.log(window.outerWidth);
    }
    render(){

        return(
          <QueryInputParentContainer>
              <QueryOptionsParentContainer>
                  <QueryOptionItem primary>
            <QueryLabelContainer>
                <div>Stay on top!</div>
            </QueryLabelContainer>
              <QueryRightContainer>
              <EmailInputContainer>
                  <input type="email" placeholder="Enter your Email here" value={this.state.emailId} onChange={this.handleEmailIdChange} onKeyPress={this.handleEmailBtn}/>
                  <QueryThemeButton primary onClick={this.handleJoinBtn}>
                      Join us
                  </QueryThemeButton>
              </EmailInputContainer>

              </QueryRightContainer>
                  </QueryOptionItem>
                  {/*<span/>*/}
                  {/*<QueryOptionItem>*/}
                  {/*<QueryLabelContainer>*/}
                      {/*<div>Download our app via SMS</div>*/}
                  {/*</QueryLabelContainer>*/}
                  {/*<QueryRightContainer>*/}
                      {/*<EmailInputContainer>*/}
                          {/*<input type="text" placeholder="Enter your mobile number here" onKeyPress={this.handlePhoneBtn}/>*/}
                           {/*<QueryThemeButton primary>*/}
                               {/*Give me the link*/}
                           {/*</QueryThemeButton>*/}
                      {/*</EmailInputContainer>*/}

                  {/*</QueryRightContainer>*/}
                  {/*</QueryOptionItem>*/}
              </QueryOptionsParentContainer>

          </QueryInputParentContainer>
        )
    }
}
