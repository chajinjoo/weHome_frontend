import React from "react";

export default function CartModal({ isopen, isclose }) {
  return (
    <div onClick={isclose} className={isopen ? "overlay" : "noOverlay"}>
      <div className={isopen ? "modal_cart" : "nomodal_cart"}>
        <p>장바구니에 상품을 담았습니다</p>
        <div>
          <button onClick={isclose}>장바구니 보러가기</button>
          <button onClick={isclose}>확인</button>
        </div>
      </div>
    </div>
  );
}
