import React from "react";
import "./MainDealSelect.scss";
import fetchAPI from "../../../../Utils/fetch";
import DealSelector from "../../../../Component/DealPage/DealSelectOption/DealSelector";
import DealCart from "./DealCart/DealCart";

class MainDealSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectProduct: [],
      colorSelcet: [],
      productPrice: []
      // countNum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  }

  componentDidMount() {
    fetchAPI("http://localhost:3000/data/dealselect.json").then(res => {
      // console.log(res);
      this.setState({
        selectProduct: res
      });
    });
  }

  handleChoose = e => {
    const a = this.state.selectProduct;
    let bb = [];
    let pp = [];
    for (let i = 1; i < a.length; i++) {
      for (let j = 0; j < a[i].optionList.length; j++) {
        if (e.target.value === a[i].optionList[j].Name) {
          bb = a[i].optionList[j];
          pp = parseFloat(a[i].optionList[j].price);
        }
      }
    }
    this.setState({
      colorSelcet: this.state.colorSelcet.concat(bb),
      productPrice: this.state.productPrice.concat(pp)
    });
  };

  handleRemove = index => {
    const { colorSelcet, productPrice } = this.state;

    const Arr = colorSelcet;
    const Arr2 = productPrice;
    const newArr = Arr.filter(el => Arr.indexOf(el) !== index);
    const newArr2 = Arr2.filter(el => Arr2.indexOf(el) != index);
    this.setState({
      colorSelcet: newArr,
      productPrice: newArr2
    });
  };

  render() {
    if (!this.state.selectProduct) return <></>;
    console.log(this.state.productPrice);
    console.log(this.state.colorSelcet);
    let maxPrice = 0;
    for (let i = 0; i < this.state.productPrice.length; i++) {
      maxPrice += parseFloat(this.state.productPrice[i]);
    }

    // const options = this.state.countNum.map((el, index) => (
    //   <option key={index}>{el}</option>
    // ));

    const selector = this.state.colorSelcet.map((el, index) => (
      <div value={el} key={index} className="user_select_box">
        <div className="user_select">
          <p>{el.Name}</p>
          <button onClick={() => this.handleRemove(index)}>X</button>
        </div>
        <div className="user_select_numbox">
          {/* <select className="user_select_num">{options}</select> */}
          <p>{parseFloat(el.price * 4)}원</p>
        </div>
      </div>
    ));

    const selects = this.state.selectProduct.map((el, index) => (
      <select className="info_box" key={index} onChange={this.handleChoose}>
        <DealSelector data={el} value={el.optionList.Name} />
      </select>
    ));
    // console.log(this.state.selectProduct[0]);
    return (
      <div className="info_select">
        <div>{selects}</div>
        {selector}
        <div className="select_confirm">
          <p>주문금액</p>
          <p>{maxPrice}원</p>
        </div>
        <DealCart />
      </div>
    );
  }
}

export default MainDealSelect;
