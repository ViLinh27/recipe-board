import * as React from "react";
import "../styles.css";
import "../sassyStyles.css"
//components
import Navbar from "./components/Navbar";

// markup
const IndexPage = () => {
  return (
    <main className="pageStyles">
      <title>Home Page</title>
      <div className="navbar">
        <Navbar/>
      </div>

      <div className="mainbody">
        <h1 className="headingStyles">
          Welcome to Canasian Recipe Board.
        </h1>
        <p className="paragraphStyles">
          intro blurb
        </p>
      </div>
      
      
    </main>
  )
}

export default IndexPage
