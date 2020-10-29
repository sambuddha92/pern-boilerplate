import React from "react";

//Import components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

//Import features


const TemplatePage = () => {
    return(
        <React.Fragment>
            <Navbar />
            <div>This is a Template Page</div>
            <Footer />
        </React.Fragment>
    )
}

export default TemplatePage;