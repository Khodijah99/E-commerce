import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="aboutPage">
      <div className="about">
        <img src={'assets/pink-banner.jpg'} alt="AboutImage" className="aboutImage" />

        <h2> We are there for you anytime! anyday!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p></p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="contact">
        <h2>Contact Us</h2>
        <dl>
          <dt>ADDRESS:</dt>
          <dd> Suit C1, Choice Plaza,Goshen Street Lugbe,Abuja.</dd>

          <dt>MOBILE NO:</dt>
          <dd> 08149937050</dd>
          <dd> 09065575816</dd>

          <dt>WEB SITE:</dt>
          <dd> www.peekndrop.com</dd>
          <dd>support@peekndrop.com</dd>
        </dl>

        <form action="" method="post">
          <p>Send Us A Message :</p>
          <textarea rows={10} cols={40}></textarea>
          <div className="Send">
            <p>
              {" "}
              <input type="submit" name="submit" value="Send" />{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Contact;
