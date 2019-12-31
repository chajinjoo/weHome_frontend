import React from "react";
import "./MainDealInfo.scss";
import fetchAPI from "../../../../Utils/fetch";
import star from "../../../../Images/star.png";
import halfstar from "../../../../Images/starhalf.png";
import emptybookmark from "../../../../Images/emptybookmark.png";
import fillbookmark from "../../../../Images/fillbookmark.png";
import share from "../../../../Images/share.png";
import store from "../../../../Images/store.png";

class MainDealInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: {}
    };
  }

  componentDidMount() {
    fetchAPI("http://localhost:3000/data/dealmain.json").then(res => {
      this.setState({
        productInfo: res
      });
    });
  }

  render() {
    if (!this.state.productInfo.dealInfo) return <></>;
    const {
      subtitle,
      maintitle,
      reviewNum,
      bookmarkNum,
      shareNum,
      discount,
      originPrice,
      discountPrice
    } = this.state.productInfo.dealInfo;
    return (
      <div className="product_info">
        <div className="info_subtitle">
          <a href="/">{subtitle}</a>
        </div>
        <div className="info_maintitle">
          <span className="info_main_title">{maintitle}</span>
        </div>
        <div className="info_pricebox">
          <div className="starbox">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={halfstar} alt="star" />
            <span className="review_num">{reviewNum}개 리뷰</span>
          </div>
          <div className="bookshare_box">
            <div className="bookbox">
              <div
                style={{
                  backgroundImage: `url(${emptybookmark})`
                }}
              ></div>
              <span>{bookmarkNum}</span>
            </div>
            <div className="bookbox">
              <div
                style={{
                  backgroundImage: `url(${share})`
                }}
              ></div>
              <span>{shareNum}</span>
            </div>
          </div>
          <div className="info_price">
            <span className="discount">
              {discount}
              <span>%</span>
            </span>
            <div className="price">
              <p className="one">
                <del>{originPrice}원</del>
              </p>
              <div className="two">
                {discountPrice}
                <span>원</span>
                <div>
                  <span>최저가</span>
                </div>
              </div>
            </div>
          </div>
          <div className="point">
            <p>
              <span>329P</span> 적립해드립니다.
            </p>
          </div>
        </div>
        <div className="delivery_info">
          <p>일반택배</p>
          <p>
            3,000원 <span>(50,000원 이상 구매시 무료배송)</span>
          </p>
          <p className="delivery_condition">
            조건에 따라 추가비용 발생 가능 (상품 상세 정보 참고)
          </p>
        </div>
        <div className="store_info_box">
          <div
            className="store_info"
            style={{
              backgroundImage: `url(${store})`
            }}
          ></div>
          마틸다 브랜드홈
        </div>
        <div></div>
      </div>
    );
  }
}

export default MainDealInfo;
