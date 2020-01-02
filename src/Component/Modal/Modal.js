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
              <Link to="/signup">
                <button className="modal_btn" onClick={close}>
                  회원가입
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
