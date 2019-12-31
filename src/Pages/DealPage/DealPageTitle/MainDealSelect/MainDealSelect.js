import React from "react";
import "./MainDealSelect.scss";
import fetchAPI from "../../../../Utils/fetch";
import DealOption from "../../../../Component/DealPage/DealSelectOption/DealOption";
import DealSelector from "../../../../Component/DealPage/DealSelectOption/DealSelector";

class MainDealSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectProduct: [],
      selectCliked: true
    };
  }

  componentDidMount() {
    fetchAPI("http://localhost:3000/data/dealselect2.json").then(res => {
      console.log(res);
      this.setState({
        selectProduct: res
      });
    });
  }

  handleChoose = e => {
    console.dir(e.target);
  };

  render() {
    if (!this.state.selectProduct) return <></>;

    const selects = this.state.selectProduct.map((el, index) => (
      <select key={index} onChange={this.handleChoose}>
        <DealSelector data={el} onChange={this.handleChoose} />
      </select>
    ));

    return (
      <div className="info_select">
        <div>{selects}</div>
        <div className="select_confirm">
          <p>주문금액</p>
          <p>0원</p>
        </div>
        <div className="select_buy">
          <button className="maybe_buy">장바구니</button>
          <button>바로구매</button>
        </div>
      </div>
    );
  }
}

export default MainDealSelect;
