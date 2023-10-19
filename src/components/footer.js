import React from "react";


function Footer(){
    return(
        <footer style={{backgroundColor: '#003459'}}>
            <p>&copy; @DateTime.Now.Year Company Name. All rights reserved.</p>
            <p>Powered by <a href="https://www.your-company-website.com" target="_blank" rel="noopener noreferrer">Your Company Name</a>.</p>
            <p>Designed by <a href="https://www.your-designer-website.com" target="_blank" rel="noopener noreferrer">Your Designer Name</a>.</p>
        </footer>
    )
}

export default Footer;