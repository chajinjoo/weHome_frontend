import React from "react";

export default function DealMaxPrice(props) {
  return (
    <div className={props.select_confirm}>
      <p>주문금액</p>
      <p>{props.maxprice}원</p>
    </div>
  );
}
