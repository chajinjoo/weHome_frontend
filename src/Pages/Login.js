import React, { Component } from "react";
import "./Login.scss";
import login_logo from "../Images/login_logo.png";
import fb from "../Images/facebook.png";
import kakao from "../Images/kaka.png";
import naver from "../Images/naver.png";
import { API_URL, TOKEN } from "../Config/constants";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  handlePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleSubmit = e => {
    console.log(`EMAIL:${this.state.email}\nPW:${this.state.password}`);
    e.preventDefault();
    const login_info = {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(`${API_URL}/user/auth`, login_info)
      .then(res => {
        return res.json();
      })
      .then(json => {
        const token = json.access_token;

        window.localStorage.setItem(TOKEN, token);

        this.props.history.push("/main");
        alert("로그인 성공");
      })
      .catch(err => {
        console.log(err.response);
        alert("로그인실패");
      });
  };

  render() {
    return (
      <>
        <div className="login_main">
          <div className="contents">
            <div>
              <img className="login_logo" src={login_logo} alt="login_logo" />
            </div>
            <div className="input_area">
              <form onSubmit={this.handleSubmit}>
                <div className="text_area">
                  <input
                    className="email_text"
                    placeholder="이메일"
                    value={this.state.email}
                    onChange={this.handleEmail}
                  />
                </div>
                <div className="pwd_area">
                  <input
                    className="password"
                    placeholder="비밀번호"
                    value={this.state.password}
                    onChange={this.handlePassword}
                    type="password"
                  />
                </div>
                <div className="login_area">
                  <button type="submit" className="login_btn">
                    <strong>로그인</strong>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="join_area">
            <span className="pwd_reset">비밀번호 재설정</span>
            <span className="join">회원가입</span>
          </div>

          <div className="other_area">
            <span className="other">SNS계정으로 간편 로그인/회원가입</span>
            <div>
              <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=185853321610795&kid_directed_site=0&app_id=185853321610795&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.6%2Fdialog%2Foauth%3Fclient_id%3D185853321610795%26redirect_uri%3Dhttps%253A%252F%252Fohou.se%252Fusers%252Fauth%252Ffacebook%252Fcallback%26response_type%3Dcode%26scope%3Demail%26state%3Dba13a8d2ceb7b6ad8db8bd75f3c50ef1775d2908b46f5a44%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Db61f088f-3098-4c21-855d-cd20b599e59a&cancel_url=https%3A%2F%2Fohou.se%2Fusers%2Fauth%2Ffacebook%2Fcallback%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3Dba13a8d2ceb7b6ad8db8bd75f3c50ef1775d2908b46f5a44%23_%3D_&display=page&locale=ko_KR&pl_dbl=0">
                <img className="other_logo" src={fb} alt="fb" />
              </a>
              <a href="https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fredirect_uri%3Dkakaojs%26response_type%3Dcode%26state%3Djrwq7lkl2ujfgiu375dwtu%26proxy%3DeasyXDM_Kakao_bftqbcgz43_provider%26ka%3Dsdk%252F1.36.1%2520os%252Fjavascript%2520lang%252Fko-KR%2520device%252FMacIntel%2520origin%252Fhttps%25253A%25252F%25252Fohou.se%26origin%3Dhttps%253A%252F%252Fohou.se%26client_id%3D3019c756ec77dd7e0a24e56d9d784f77">
                <img className="other_logo" src={kakao} alt="kakao" />
              </a>
              <a href="https://nid.naver.com/oauth2.0/authorize?client_id=OwxOJX0gYfOostweRfGd&redirect_uri=https%3A%2F%2Fohou.se%2Fusers%2Fauth%2Fnaver%2Fcallback&response_type=code&state=cd183a8b4cc07e280efbb938ba55c07fded4e3b4f0b9ab56">
                <img className="other_logo" src={naver} alt="naver" />
              </a>
            </div>
            <div className="etc"></div>
          </div>

          <div className="guest_area">
            <span className="guest">비회원 주문 조회하기</span>
          </div>
          <div className="footer">
            <span className="bottom_src">
              ©Bucketplace Inc. All Rights Reserved
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
