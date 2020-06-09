import React from 'react';
import './Login.css'
import LogoText from '../Img/logo_text.png';

class Login extends React.Component {
    render(){
        return(<div class="asd">
            <div className='main_container'>
                <div className="logo_img_container">
                    <img className="logo_img" src={LogoText} alt="dmkalmksa" />
                </div>
                <form className="login_form" action="index.html" method="post">
                    <div className="input_container">
                        <input className="input_id" type="text" name="user_id" placeholder="전화번호,사용자 이름 또는 이메일" />
                        <input className="input_pw" type="text" name="user_password" placeholder="비밀번호" />
                    </div>
                    <div className="btn_container">
                        <input className="active_login_btn" type="button" name="login_btn" value="로그인" disabled="" />
                    </div>
                    <div id="forgot_pw_container">
                        <a href className="forgot_pw">비밀번호를 잊으셨나요?</a>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

document.addEventListener('keyup',function(event){
    const closeIdValue = document.getElementsByClassName('input_id')[0].value;
    const closePwValue = document.getElementsByClassName('input_pw')[0].value;
    const closeBtn = document.getElementsByClassName('active_login_btn')[0];

    if(closeIdValue === "" && closePwValue === ""||closeIdValue !== "" && closePwValue === ""||closeIdValue === "" && closePwValue !== ""){
      closeBtn.disabled = true;
      closeBtn.style.backgroundColor = 'rgba(var(--d69,0,149,246),.3)';
    } else if(closeIdValue !== "" && closePwValue !== ""){
      closeBtn.disabled = false;
      closeBtn.style.backgroundColor = '#0095f6';
    }
 return;
})



export default Login