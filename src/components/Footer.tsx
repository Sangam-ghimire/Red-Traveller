import Join from "./Join";
import Logo from "./Logo";
import "../styles/Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
} from "react-icons/fa";
import ImageBar from "./ImageBar";

const Footer = () => {
  return (
    <div>
      <ImageBar></ImageBar>
      <Join />
      <div className="Footer_top">
        <div className="Logo">
          <Logo />
        </div>
        <div className="Footer_toptext">Body</div>
        <div className="Footer_toptext">Travel</div>
        <div className="Footer_toptext">Account</div>
      </div>
      <div className="Footer_middle">
        <div className="first_middle text ">
          <p>
            We are location independent bloggers, digital influencers, small
            group tour organizers and world travelers with a serious passion for
            the sun, the sea and adventure. Eight years and 60-something
            countries later and we are still on the road.
          </p>
        </div>
        <div className="second_middle text">
          <ol>
            <li>Add: 221B John hope Street, Lekki, Lagos, Nigeria.</li>
            <li>T: +234 706 507 8544</li>
            <li>E: info@redexplorers.com</li>
            <li>W: www. redexplorers.com</li>
          </ol>
        </div>
        <div className="third_middle text">
          <ol>
            <li>My List</li>
            <li>My Requests</li>
            <li>My Credits</li>
            <li>My Info</li>
            <li>Contact</li>
          </ol>
        </div>
        <div className="fourth_middle text">
          <ol>
            <li>Travel</li>
            <li>Why Travel</li>
            <li>Become a Traveller</li>
            <li>How It Works</li>
            <li>Traveling FAQs</li>
          </ol>
        </div>
      </div>
      <div className="footer_bottom">
        <div>
          <img src="/images/sideHustle.png" alt="sideHustle" />
        </div>
        <div>
          <FaFacebookF color="white" size="2rem" />
          &nbsp; &nbsp;
          <FaTwitter color="white" size="2rem" />
          &nbsp;&nbsp;
          <FaGooglePlusG color="white" size="2rem" />
          &nbsp;&nbsp;
          <FaLinkedinIn color="white" size="2rem" />
        </div>
        <div>
          <p className="footer_textBottom">
            © 2021 RedExplorers. All rights reserved &nbsp;| Terms |&nbsp;
            Privacy |&nbsp; Site Map
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
