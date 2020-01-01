import React from "react";
import CartModal from "./CartModal";
import "./DealCart.scss";

class DealCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }

  handleModal = () => {
    this.setState({
      isClicked: true
    });
  };

  handleGoodbye = () => {
    this.setState({
      isClicked: false
    });
  };

  render() {
    return (
      <>
        <div className="select_buy">
          <button className="maybe_buy" onClick={this.handleModal}>
            장바구니
          </button>
          <button>바로구매</button>
        </div>
        <CartModal isopen={this.state.isClicked} isclose={this.handleGoodbye} />
      </>
    );
  }
}

export default DealCart;
