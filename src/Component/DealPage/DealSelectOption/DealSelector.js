import React from "react";

function DealSelector(props) {
  const { data } = props;

  const options = data.optionList.map((el, index) => (
    <option key={el.id}>
      0{el.id}.{el.Name}({el.price}원)
    </option>
  ));
  return (
    <>
      <option>{data.optionTitle}</option>
      {options}
    </>
  );
}

export default DealSelector;
