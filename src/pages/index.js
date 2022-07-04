import * as React from "react";
import "../styles.css";
import "../sassyStyles.css"
//components
import Navbar from "./components/Navbar";
//material ui
import Typography from '@material-ui/core/Typography';

// markup
const IndexPage = () => {
  return (
    <main className="pageStyles">
      <title>Home Page</title>
      <div className="navbar">
        <Navbar/>
      </div>

      <div className="mainbody">
        <Typography variant="h1" className="headingStyles">
          Welcome to Canasian Recipe Board.
        </Typography>
        <Typography variant="p" className="paragraphStyles">
          intro blurb
        </Typography>
      </div>
      
      
    </main>
  )
}

export default IndexPage
