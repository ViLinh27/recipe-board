import * as React from "react";
import "../styles.css";
import "../sassyStyles.css"
//components
import Navbar from "./components/Navbar";
//material ui
import Typography from '@material-ui/core/Typography';

import Link from 'gatsby';

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
        <Typography variant="body1" className="paragraphStyles">
          Hello! This website will be used to store cool looking recipes that
          will realistically never be made...Maybe one day though....Anyway, it's
          not just one person building this website. There are two people here.
          One of us likes to cook more, while the other bakes. Both of us love to eat
          though. Plus, as students, it's often more efficient to find meals that
          are the least time consuming, taste good and provide for our nutritional
          needs without breaking our wallets. On the rare occasion we great breaks,
          it is nice to spend time making an elaborate recipe though. The tedious
          part is just washing the dishes after that in a tiny sink.
        </Typography>
      </div>      
    </main>
  )
}

export default IndexPage
