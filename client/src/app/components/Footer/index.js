import React from "react";
import "./index.scss";

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="inner container is-fixed">
                <a className="no-deco" href="https://github.com/sambuddha92/pern-boilerplate" target="_blank" rel="noopener noreferrer" >Source Code</a>
                <a className="no-deco" href="https://github.com/sambuddha92" target="_blank" rel="noopener noreferrer" >My Github</a>
                <p>© 2020 everyone in the universe.</p>
            </div>
        </footer>
    )
}

export default Footer;