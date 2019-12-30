import React from "react";
import "./MainDealSelect.scss";
import fetchAPI from "../../../../Utils/fetch";

class MainDealSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectProduct: {},
      selectCliked: true
    };
  }

  componentDidMount() {
    fetchAPI("http://localhost:3000/data/dealselect.json").then(res => {
      this.setState({
        selectProduct: res
      });
    });
  }
  handleChoose = e => {
    console.log(e.target.value);
  };

  render() {
    if (!this.state.selectProduct.productColor) return <></>;
    const Colors = this.state.selectProduct.productColor.map(color => (
      <option key={color.id}>
        0{color.id}.{color.colorName}({this.state.selectProduct.productPrice})
      </option>
    ));

    const Kinds = this.state.selectProduct.productKinds.map((kind, index) => (
      <option key={index}>
        {kind.kinds}({kind.kindsPrice})
      </option>
    ));

    const Options = this.state.selectProduct.optionProduct.map(
      (option, index) => <option key={index}>{option}</option>
    );

    return (
      <>
        <div className="info_select">
          <div>
            <select onClick={this.handleChoose}>
              <option>---- 컬 러 ----</option>
              {Colors}
            </select>
            <select onClick={this.handleChoose}>
              <option>---- 구 성 ----</option>
              {Kinds}
            </select>
            <select onClick={this.handleChoose}>
              <option>---- 추가상품을 선택해주세요 ----</option>
              {Options}
            </select>
          </div>
          <div className="select_confirm">
            <p>주문금액</p>
            <p>0원</p>
          </div>
          <div className="select_buy">
            <button className="maybe_buy">장바구니</button>
            <button>바로구매</button>
          </div>
        </div>
      </>
    );
  }
}

export default MainDealSelect;
