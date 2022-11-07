import React from "react";

const date = new Date;

function Footer() {
    return (
        <div>
            <footer>
                <p>Copyright © {date.getFullYear()}</p>
            </footer>
        </div>
    );
}

export default Footer;