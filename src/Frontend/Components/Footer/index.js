import React,{Component} from 'react'
import footerStyling from '../assets/Styling/footerStyling'

const Footer = () =>{
    return(
        // <footer class="container-fluid text-center">
        //     <p>Online Store Copyright</p>
        //     <form class="form-inline">Get deals:
        //         <input type="email" class="form-control" size="50" placeholder="Email Address">
        //             <button type="button" class="btn btn-danger">Sign Up</button>
        //     </form>
        // </footer>


            <div className="copyrights" style={footerStyling.marginSet}>
                <span>To The New© 2017, All Rights Reserved</span>
                <span>Web Design By: Anchal Jain</span>
            </div>

    )
}

export default Footer;