import React from "react";
import "./index.scss";

//Import components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

//Import features


const LandingPage = () => {
    return(
        <React.Fragment>
            <Navbar />
            <div>This is the Landing Page</div>
            <Footer />
        </React.Fragment>
    )
}

export default LandingPage;