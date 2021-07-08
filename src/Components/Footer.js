import React from 'react';
import '../ComponentsCss/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
               <div className="footer_top">
                   {/* About */}
                   <div className="footer_down about">
                       <span>About</span>
                       <ul>
                           <li><a href="">Contact Us</a></li>
                           <li><a href="">About Us</a></li>
                           <li><a href="">Careers Us</a></li>
                       </ul>
                   </div>

                    {/* Help */}
                    <div className="footer_down help">
                       <span>Help</span>
                       <ul>
                           <li><a href="">Payments</a></li>
                           <li><a href="">Shipping</a></li>
                           <li><a href="">Cancellation & Returns</a></li>
                           <li><a href="">FAQ</a></li>
                           <li><a href="">Report Infringement</a></li>
                       </ul>
                   </div>

                   {/* Policy */}
                   <div className="footer_down policy">
                       <span>policy</span>
                       <ul>
                           <li><a href="">Return Policy</a></li>
                           <li><a href="">Terms of Use</a></li>
                           <li><a href="">Security</a></li>
                           <li><a href="">Privacy</a></li>
                           <li><a href="">Sitemap</a></li>
                           <li><a href="">EPR Compliance</a></li>
                       </ul>
                   </div>
                   {/* Social */}
                   <div className="footer_down social">
                       <span>Social</span>
                       <ul>
                           <li><a href="">Facebook</a></li>
                           <li><a href="">Twitter</a></li>
                           <li><a href="">Youtube</a></li>
                       </ul>
                   </div>

                   {/* mail us */}
                   <div className="footer_down border">
                       <span>Mail Us</span>
                       <ul>
                           <li><a href="#">Commodore Internet Private Limited,</a></li>
                           <li><a href="#">Buildings Alyssa, Begonia &</a></li>
                           <li><a href="#">Clove Embassy Tech Village,</a></li>
                           <li><a href="#">Outer Ring Road, Devarabeesanahalli Village,</a></li>
                           <li><a href="#">Karnataka, India</a></li>
                       </ul>
                   </div>

{/* mail us */}
                   <div className="footer_down">
                       <span>Registered Office Address:</span>
                       <ul>
                           <li><a href="#">Commodore Internet Private Limited,</a></li>
                           <li><a href="#">Buildings Alyssa, Begonia &</a></li>
                           <li><a href="#">Clove Embassy Tech Village,</a></li>
                           <li><a href="#">Outer Ring Road, Devarabeesanahalli Village,</a></li>
                           <li><a href="#">Karnataka, India</a></li>
                           <li><a href="#">CIN : U51109KA2012PTC066107</a></li>
                           <li><a href="#">Telephone: </a> <span className="phno">1800 202 9898</span></li>
                       </ul>
                   </div>
               </div>
               <hr />
               <div className="footer_last">
                    <img src="https://trak.in/wp-content/uploads/2020/12/Rupay-Cards-Big-1.jpg" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="" />
                    <img src="https://trak.in/wp-content/uploads/2020/06/Paytm-Logo-1280x720.jpg" alt="" />
                    <img src="https://sm.pcmag.com/pcmag_in/review/p/paypal/paypal_mb8k.png" alt="" />
                </div>
        </div>
    )
}

export default Footer
