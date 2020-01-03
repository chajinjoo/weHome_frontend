import React from "react";
import Logo from "../Images/logo.png";
import Logo1 from "../Images/facebook.png";
import Logo2 from "../Images/kaka.png";
import Logo3 from "../Images/naver.png";
import "./signup.scss";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      nickname: "",
      pw: "",
      re_pw: "",
      emailCheck: "",
      nicknameCheck: "",
      pwCheck: "",
      emailTag: "",
      message: "",
      agreeAll: false,
      box: true
    };
  }

  inputemail = e => {
    // console.log(e.target.value);
    this.setState({
      email: e.target.value
    });
  };

  handleEmailSelect = e => {
    console.log(e.target.value);
    this.setState({
      emailTag: e.target.value
    });
  };

  handlePassword = e => {
    console.log(e.target.value);
    this.setState({
      pw: e.target.value
    });
    console.log(this.state.pw);
  };
  /*handlePasword = e =>{

    this.setState({
      if (pw: e.target.value === "default")
       return 
    })
  }
  */

  //   handleapassnecessary = e => {
  //     this.setState({
  //       necessary: e.target.value
  //  if( necessary.length != 0)

  //     });
  // };
  handlePasswordCheck = e => {
    console.log(e.target.value);
    this.setState({
      re_pw: e.target.value
    });
  };

  handleNickname = e => {
    this.setState({
      nicknameCheck: e.target.value
    });
  };
  // if (e.target.value.length < 1) {
  //   alert("2자 이상 입력해주세요");
  // }

  handleAgreeAll = () => {
    this.setState({
      agreeAll: !this.state.agreeAll
    });
  };

  handleAgreebox = () => {
    this.setState({
      box: this.state.box
    });
  };

  handleSignup = () => {
    console.log(
      `email:${this.state.email + "@" + this.state.emailTag}, pw:${
        this.state.pw
      },${this.state.nicknameCheck}`
    );
    fetch("http://10.58.1.56:8000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email + "@" + this.state.emailTag,
        password: this.state.pw,
        name: this.state.nicknameCheck
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res) {
          console.log("ok");
          this.props.history.push("/login");
        } else {
          console.log("no");
        }
      });
  };

  render() {
    // console.log(this.state.email);
    return (
      <div className="main SignUpMain">
        <img className="mainlogo" src={Logo} alt="로고"></img>
        <div className="secondmain">
          <h1 className="signuptitle">회원가입</h1>
          <div className="signupwrap">
            <p className="signuptitle2">SNS계정으로 간편하게 회원가입</p>
            <div className="signupwarp2">
              <div className="logo facebook">
                <img className="logo1_1" src={Logo1} alt="로고1"></img>
              </div>
              <div className="logo kakao">
                <img className="logo2_1" src={Logo2} alt="로고2"></img>
              </div>
              <div className="logo naver">
                <img className="logo3_1" src={Logo3} alt="로고3"></img>
              </div>
            </div>
          </div>
          <div className="form">
            <div className="signuptopwrap">
              <div className="signuptop">이메일</div>
              <div className="email"></div>
              <div className="emailbody">
                <span className="emailinput">
                  <input
                    onChange={this.inputemail}
                    type="text"
                    className="emailleft"
                    placeholder="이메일"
                    size="1"
                    // value
                  ></input>
                </span>
                <span className="emailcenter">@</span>
                <select
                  onChange={this.handleEmailSelect}
                  className="emailright"
                >
                  <option selected vlaue disabled>
                    선택해주세요
                  </option>
                  <option>naver.com</option>
                  <option value="hanmail.net">hanmail.net</option>
                  <option value="daum.net">daum.net</option>
                  <option value="gmail.com">gamil.com</option>
                  <option value="nate.com">nate.com</option>
                  <option value="hotmail.com">hotmail.com</option>
                  <option value="outlook.com">outlook.com</option>
                  <option value="icloud.com">icloud.com</option>
                  <option value="_manual">직접입력</option>
                </select>
                <div
                  className={
                    this.state.email.length < 8 && this.state.email.length > 3
                      ? "nonpassnecessary"
                      : "passnecessary"
                  }
                >
                  필수 입력 항목입니다
                </div>
              </div>
            </div>
            <div className="passwordwrap">
              <div className="passwordonly"> 비밀번호</div>
              <div className="passwordtext">
                8자이상 영문 대 소문자,숫자,특수문자를 사용하세요.
              </div>
              <input
                onChange={this.handlePassword}
                type="password"
                className="passwordtext input"
              ></input>
              <div
                className={
                  this.state.pw.length < 8 && this.state.pw.length > 1
                    ? "nonpassnecessary"
                    : "passnecessary"
                }
              >
                필수 입력 항목입니다
              </div>
            </div>
            <div className="passwordresetwrap">
              <div className="passwordreset">비밀번호 확인 </div>
              <input
                onChange={this.handlePasswordCheck}
                type="text"
                className="input"
              ></input>
              <div
                className={
                  this.state.re_pw.length < 8 && this.state.re_pw.length > 1
                    ? "nonpassnecessary"
                    : "passnecessary"
                }
              >
                {" "}
                필수 입력 항목입니다
              </div>
            </div>
            <div className="nicknamewrap">
              <div className="nickname">별명</div>
              <div className="nicknametext">
                다른 유저와 겹치지 않는 별명을 입력해주세요.(2~15자)
              </div>

              <input
                onChange={this.handleNickname}
                type="text"
                className="input"
              ></input>
              <div
                className={
                  this.state.nicknameCheck.length < 2 &&
                  this.state.nicknameCheck.length > 0
                    ? "nonpassnecessary"
                    : "passnecessary"
                }
              >
                2자 이상 입력해주세요
              </div>
            </div>
            <div className="aceesswrap">
              <div className=" access">약관 동의</div>
              <div className="access_all">
                <div className="checkboxs">
                  <input type="checkbox" className="inbox"></input>
                  <span className="accesstop">전체동의</span>
                </div>
                <div className="checkboxwrap">
                  <div className="checkbox1">
                    <input
                      type="checkbox"
                      checked={this.state.agreeAll}
                      onChange={this.handleAgreeAll}
                      className="inbox"
                    ></input>
                    <span className="sidebox">만 14세 이상입니다.</span>
                    <span className="righttext">(필수)</span>
                  </div>
                  <div className="checkbox2">
                    <input
                      type="checkbox"
                      onChange={e => {
                        console.log(e);
                      }}
                      className="inbox"
                    ></input>
                    <a className="checkbox2-1" href="https://ohou.se/usepolicy">
                      이용약관
                    </a>
                    <span className="righttext">(필수)</span>
                  </div>
                  <div className="checkbox3">
                    <input type="checkbox" className="inbox"></input>
                    <a
                      className="checkbox3-1         "
                      href="https://ohou.se/privacy"
                    >
                      개인정보취급방침
                    </a>
                    <span className="righttext">(필수)</span>
                  </div>

                  <div className="checkbox4">
                    <input type="checkbox" className="inbox"></input>
                    <span className="sidebox4">
                      이벤트,프로모션 알림 메일 및 SMS 수신
                    </span>
                    <span className="choice">(선택)</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={this.handleSignup}
              className="bottom"
              type="submit"
            >
              회원가입하기
            </button>
          </div>
          <p className="already">
            이미 아이디가 있으신가요?
            <a href="https://ohou.se/users/sign_in" className="login">
              로그인
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Signup;
