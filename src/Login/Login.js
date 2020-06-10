import React from "react";
import "./Login.css";
import LogoText from "../Img/logo_text.png";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userIdInput: "",
      userPwInput: "",
      able:""
    };
  }

  inputId = e => {
    e.preventDefault();
    this.setState({userIdInput: e.target.value});
  };

  inputPw = e => {
    e.preventDefault();
    this.setState({userPwInput: e.target.value});
  };
  
  clickHandler = e => {
    e.preventDefault();
    console.log("id: ",this.state.userIdInput);
    console.log("pw: ",this.state.userPwInput);
  };

  render() {
    return (
      <div className="asd">
        <div className="main_container">
          <div className="logo_img_container">
            <img className="logo_img" src={LogoText} alt="dmkalmksa" />
          </div>
          <form className="login_form" action="index.html" method="post">
            <div className="input_container">
              <input
                onInput={this.inputId}
                className="input_id"
                type="text"
                name="user_id"
                placeholder="전화번호,사용자 이름 또는 이메일"
              />
              <input
                onInput={this.inputPw}
                className="input_pw"
                type="text"
                name="user_password"
                placeholder="비밀번호"
              />
            </div>
            <div className="btn_container" >

            <input
            onClick={this.clickHandler}
            className={
                this.state.userIdInput.includes('@')&& this.state.userPwInput.length>4
                ?"active_login_btn"
                :"login_btn"
            }
            type="button"
            name="login_btn"
            value="로그인"
            disabled={
                this.state.userIdInput.includes('@')&& this.state.userPwInput.length>4
                ?false
                :true
            }
          />
            </div>
            <div id="forgot_pw_container">
              <a href="true" className="forgot_pw">
                비밀번호를 잊으셨나요?
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default Login;


// this.state.userIdInput.includes('@')&& this.state.userPwInput.length>4