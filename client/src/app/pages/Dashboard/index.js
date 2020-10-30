import React from "react";
import "./index.scss";

//Import components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

//Import containers
import Signout from "../../containers/Signout";


const DashboardPage = () => {
    return(
        <React.Fragment>
            <Navbar />
            <div className="DashboardPage">
                <h2>Dashboard</h2>
                <p>This is the Dashboard Page. This is a private route and only displayed if user is logged in.</p>
                <Signout />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default DashboardPage;