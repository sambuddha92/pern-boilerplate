import React from "react";
import "./index.scss";

//Import components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

//Import containers
import Signup from "../../containers/Signup";


const SignupPage = () => {
    return(
        <React.Fragment>
            <Navbar />
            <Signup />
            <Footer />
        </React.Fragment>
    )
}

export default SignupPage;