import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.css"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import BaseLayout from "./components/BaseLayout"
import Boys from "./components/Boys"
import Girls from "./components/Girls"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Accessories from "./components/Accessories"

ReactDOM.render(
  <BrowserRouter>
    <App>
      <BaseLayout>
        <Route exact path="/" component={Home} />
        <Route path="/accessories" component={Accessories} />
        <Route path="/girls" component={Girls} />
        <Route path="/boys" component={Boys} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </BaseLayout>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
)
registerServiceWorker()
