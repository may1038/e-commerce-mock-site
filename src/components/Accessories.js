import React, { Component } from "react"

class Accessories extends Component {
  render() {
    return (
      <div>
        <div className="girlsWrapper">
          <div className="outfitOne">
            <div className="outfitsUl">
              <h2>Hat</h2>
              <ul>
                <li>Flat Cap:</li>
                <p>Goorin Bros.</p>
                <li>Material:</li>
                <p>Wool</p>
                <li>Sizes:</li>
                <p>Youth S, Youth M, Youth L</p>
                <li>Price:</li>
                <a className="tag" href="">
                  <p>$70 Dollars</p>
                </a>
              </ul>
            </div>
            <img
              src="http://www.villagehatshop.com/photos/product/standard/4511390S412424/kids-hats/b2b-kids-tweed-wool-blend-ivy-cap.jpg"
              alt=""
            />
          </div>

          <div className="outfitTwo">
            <div className="outfitsUl">
              <h2>Backpack</h2>
              <ul>
                <li>Backpack:</li>
                <p>Bunny Pack</p>
                <li>Material:</li>
                <p>Cotton/Elastic</p>
                <li>Sizes:</li>
                <p>One Size</p>
                <li>Price:</li>
                <a className="tag" href="">
                  <p>$45 Dollars</p>
                </a>
              </ul>
            </div>
            <img
              src="https://i.pinimg.com/736x/8c/6c/e9/8c6ce93c3cf3f1fe925e9a268a873ca1--kids-backpacks-for-school-kids-school-bags.jpg"
              alt=""
            />
          </div>

          <div className="outfitThree">
            <div className="outfitsUl">
              <h2>Bowtie</h2>
              <ul>
                <li>Bowtie:</li>
                <p>Peach Tree Bowties</p>
                <li>Material:</li>
                <p>Cotton</p>
                <li>Sizes:</li>
                <p>One Size</p>
                <li>Price:</li>
                <a className="tag" href="">
                  <p>$20 Dollars</p>
                </a>
              </ul>
            </div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51CrQuredyL._UX522_.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Accessories
