# weHome Project

- 코딩 1개월차 wecode 5기 수강생들의 2주 클론 프로젝트입니다.
- 프론트엔드 3명, 백엔드 1명의 팀으로 구성

# 목표

- 오늘의 집의 회원가입, 로그인, 메인페이지, 집들이, 딜 페이지 구현.
- 실제 Back-End API를 통해 Data를 **POST/GET** 해보기.
- 회원가입과 로그인 기능을 통해 **access_token**을 실제로 주고받기

# 사용된 기술

- Front-End: **HTML**, **Sass**, **ReactJS**
- Back-End: **Python**, **Django**, **MySQL** ([Back-End Repository 주소](https://github.com/wecode-bootcamp-korea/weHome_backend))

# 기능

### 회원가입 / 로그인

- 회원가입 및 로그인(Bcrypt 암호화 및 JWT Access Token 전송)
- 아이디/이메일/패스워드 등의 회원가입정책에 따른 입력값의 유효성 체크
- 회원가입 입력사항을 백엔드 API로 전달(fetch)
- 회원가입 성공 후 로그인페이지로 페이지 전환(React Router)
- 로그인 성공 시 백엔드로 부터 전달받은 JWT Token을 localstorage에 저장

### 메인페이지

- carousel / slider 을 이용해 사이드 이벤트 배너 구현
- transform 을 이용하여 타이틀, 오늘의 스토리, 딜 section Image 줌 이벤트 구현

### 마이페이지

- 벡엔드 API에 해당 유저가 좋아요한 콘텐츠를 FETCH를 통해 전달받음
- 전달받은 데이터를 MAP함수를 이용해서 화면에 나타냄

### 집들이

- Toggle을 이용한 버튼 이벤트 구현
- 집들이 페이지 댓글기능 pagination 구현

### 제품상세페이지

- onMouseover 이벤트 구현
- 제품 상세 옵션 선택 기능 구현

# 데모영상

[![Watch the video](https://i9.ytimg.com/vi/_wOrX7pm26Q/mq1.jpg?sqp=CIqdx_AF&rs=AOn4CLAywGZ_rvWFggVWy0Q7eDpo26AD_w)](https://youtube.be/watch?v=_wOrX7pm26Q)
