import React, { Component } from "react"

class Boys extends Component {
  render() {
    return (
      <div>
        <div className="girlsWrapper">
          <div className="outfitOne">
            <div className="outfitsUl">
              <h2>Outfit 1</h2>
              <ul>
                <li>Top:</li>
                <p>Old Navy</p>
                <li>Bottom:</li>
                <p>Old Navy</p>
                <li>Shoes:</li>
                <p>Boat Shoes Appl.</p>
                <li>Sizes:</li>
                <p>1t, 2t, 3t</p>
                <li>Price:</li>
                <a className="tag" href="">
                  <p>$35 Dollars</p>
                </a>
              </ul>
            </div>
            <img
              src="https://i.pinimg.com/736x/5c/4b/8f/5c4b8f4b0a50367adb7e44bf1a145888--patch-jeans-boy-outfits.jpg"
              alt=""
            />
          </div>

          <div className="outfitTwo">
            <div className="outfitsUl">
              <h2>Outfit 2</h2>
              <ul>
                <li>Top:</li>
                <p>Urban Outfitters</p>
                <li>Bottom:</li>
                <p>Jeans</p>
                <li>Shoes:</li>
                <p>Reebok</p>
                <li>Sizes:</li>
                <p>Youth S, Youth M, Youth L</p>
                <li>Price:</li>
                <a className="tag" href="">
                  <p>$45 Dollars</p>
                </a>
              </ul>
            </div>
            <img
              src="https://s-media-cache-ak0.pinimg.com/originals/64/4c/87/644c87e172010dfe1e33b05c5c1e9a68.jpg"
              alt=""
            />
          </div>

          <div className="outfitThree">
            <div className="outfitsUl">
              <h2>Outfit 3</h2>
              <ul>
                <li>Top:</li>
                <p>American Eagle</p>
                <li>Bottom:</li>
                <p>American Eagle</p>
                <li>Shoes:</li>
                <p>American Eagle</p>
                <li>Sizes:</li>
                <p>Youth S, Youth M, Youth L</p>
                <li>Price:</li>
                <a className="tag" href="">
                  <p>$60 Dollars</p>
                </a>
              </ul>
            </div>
            <img
              src="https://i.pinimg.com/736x/b3/6f/a6/b36fa6cd23a9ef9ff60a93968e7dc252--american-eagle-jeans-male-outfits.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Boys
