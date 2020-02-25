// import React from "react"
// import { BrowserRouter as Router, Route } from "react-router-dom"

// import AuthorList from "./AuthorList"
// import AuthorView from "./AuthorView"

// export default props => {
//   return (
//     <Router>
//       <div className="wrapper">
//         <Route path="/" exact component={AuthorList} />
//         <Route path="/author/:id" component={AuthorView} />
//       </div>
//     </Router>
//   )
// }

import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "../styles/app.css"

import Home from "./Home"
import Album from "./Album"
import Picture from "./Picture"

export default props => {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Home} />
        <Route path="/album/:id" component={Album} />
        <Route path="/picture/:id" component={Picture} />
      </div>
    </Router>
  )
}
