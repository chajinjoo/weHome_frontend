import React from "react";
import "./Modal.scss";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, close }) => {
  return (
    <>
      {isOpen ? (
        <>
          <div className="modal_overlay" onClick={close} />
          <div className="modal_box">
            {/* <p className="title">모달모달</p> */}
            <div className="button-wrap">
              <Link to="/mypage">
                <button className="modal_btn" onClick={close}>
                  마이페이지
                </button>
              </Link>
              <button className="modal_btn" onClick={close}>
                나의쇼핑
              </button>
              <button className="modal_btn" onClick={close}>
                이벤트
              </button>
              <button className="modal_btn" onClick={close}>
                전문가신청
              </button>
              <button className="modal_btn" onClick={close}>
                판매자신청
              </button>
              <Link to="/login">
                <button className="modal_btn" onClick={close}>
                  로그아웃
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
export default Modal;
