import React, { Component } from "react"

class Girls extends Component {
  render() {
    return (
      <div className="content">
        <div className="girlsWrapper">
          <div className="outfitOne">
            <div className="outfitsUl">
              <h2>Outfit 1</h2>
              <ul>
                <li>Top:</li>
                <p>Shirty mcShirterton</p>
                <li>Bottom:</li>
                <p>Old Navy</p>
                <li>Shoes:</li>
                <p>Native American Apparel</p>
                <li>Sizes:</li>
                <p>1t, 2t, 3t</p>
                <li>Price:</li>
                <a className="tag" href="">
                  <p>$60 Dollars</p>
                </a>
              </ul>
            </div>
            <img
              src="https://s-media-cache-ak0.pinimg.com/originals/50/29/89/50298944a0e8b404796275f66dae4278.jpg"
              alt=""
            />
          </div>

          <div className="outfitTwo">
            <div className="outfitsUl">
              <h2>Outfit 2</h2>
              <ul>
                <li>Top:</li>
                <p>Basic White Girl Apparel</p>
                <li>Bottom:</li>
                <p>Ballet Class</p>
                <li>Shoes:</li>
                <p>Old Navy</p>
                <li>Sizes:</li>
                <p>Youth S, Youth M, Youth L</p>
                <li>Price:</li>
                <a className="tag" href="">
                  <p>$40 Dollars</p>
                </a>
              </ul>
            </div>
            <img
              src="https://s-media-cache-ak0.pinimg.com/736x/64/30/43/64304327d634632bffc54bee271c8534--clothes-for-kids-kids-clothing.jpg"
              alt=""
            />
          </div>

          <div className="outfitThree">
            <div className="outfitsUl">
              <h2>Outfit 3</h2>
              <ul>
                <li>Top:</li>
                <p>Young Navy</p>
                <li>Bottom:</li>
                <p>Same</p>
                <li>Shoes:</li>
                <p>Old Navy</p>
                <li>Sizes:</li>
                <p>1t, 2t, 3t</p>
                <li>Price:</li>
                <a className="tag" href="">
                  <p>$30 Dollars</p>
                </a>
              </ul>
            </div>
            <img
              src="https://i.pinimg.com/736x/27/97/0f/27970f76b5d19f691376d441206983fa--baby-swag-fall-outfits.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Girls
