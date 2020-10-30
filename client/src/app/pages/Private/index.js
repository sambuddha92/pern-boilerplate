import React from "react";
import "./index.scss";

//Import components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

//Import containers
import Signout from "../../containers/Signout";


const AnotherPrivatePage = () => {
    return(
        <React.Fragment>
            <Navbar />
            <div className="AnotherPrivatePage">
                <h2>Another Private Page</h2>
                <p>This is Another Private Page. This is a private route and only displayed if user is logged in.</p>
                <Signout />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default AnotherPrivatePage;