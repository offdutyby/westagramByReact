import React from "react";
import "./Login.css";
import LogoText from "../Img/logo_text.png";


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            userIdInput: "",
            userPwInput: "",
            able: "",
        };
    }

    inputId = (e) => {
        e.preventDefault();
        this.setState({ userIdInput: e.target.value });
    };

    inputPw = (e) => {
        e.preventDefault();
        this.setState({ userPwInput: e.target.value });
    };

    clickHandler = (e) => {
        e.preventDefault();
        console.log("id: ", this.state.userIdInput);
        console.log("pw: ", this.state.userPwInput);
    };

    render() {
        return (
            <div className="login_all_container">
                <div className="login_article_center">
                    <div className="login_article">
                        <img className="logo_img" src={LogoText} alt="dmkalmksa" />
                        <div className="login_input_container">
                            <input
                                onInput={this.inputId}
                                className="login_input_id"
                                type="text"
                                name="user_id"
                                placeholder="전화번호,사용자 이름 또는 이메일"
                            />
                            <input onInput={this.inputPw} className="login_input_pw" type="text" name="user_password" placeholder="비밀번호" />
                        </div>
                        <button
                            onClick={this.clickHandler}
                            className={
                                this.state.userIdInput.includes("@") && this.state.userPwInput.length > 4 ? "active_login_btn" : "login_input_btn"
                            }
                            type="button"
                            name="login_btn"
                            disabled={this.state.userIdInput.includes("@") && this.state.userPwInput.length > 4 ? false : true}
                        >
                            로그인
                        </button>

                        <div className="login_or_line">
                            <div className="row_line"></div>
                            <div className="or">또는</div>
                            <div className="row_line"></div>
                        </div>
                        <div className="login_facebook_container">
                            <img
                                className="login_facebook_logo"
                                src="https://boatingindustry.com/wp-content/uploads/2020/03/Facebook-Logo.png"
                                alt=""
                            />
                            <a className="login_facebook_link" href="true">
                                Facebook으로 로그인
                            </a>
                        </div>
                        <div class="forgot_pw_container">
                            <a href="true" className="forgot_pw">
                                비밀번호를 잊으셨나요?
                            </a>
                        </div>
                    </div>

                    <div className="login_sign_up">
                        <span>계정이 없으신가요?</span>
                        <a className="sign_up" href="/">
                            가입하기
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
