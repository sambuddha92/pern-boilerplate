import React from "react";
import "./index.scss";

//Import components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

//Import containers
import Signin from "../../containers/Signin";

const SigninPage = () => {
    return(
        <React.Fragment>
            <Navbar />
            <Signin />
            <Footer />
        </React.Fragment>
    )
}

export default SigninPage;