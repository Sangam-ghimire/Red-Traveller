import "../styles/Contact.css";
const Contact = () => {
  return (
    <div>
      <div className="background_Contact">
        <p>Contact</p>
      </div>
      <div className="form_Flexone">
        <p className="form_Text">
          PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM
        </p>
        <form>
          <span className="form_Flex">
            <input type="text" placeholder="First Name" className="marginbox" />
            <input type="text" placeholder="Last Name" className="marginbox" />
          </span>
          <span className="form_Flex">
            <input type="Email" placeholder="Email" className="marginbox" />
            <input type="text" placeholder="Subject" className="marginbox" />
          </span>
          <input type="text" placeholder="Message" className="messageBox" />
        </form>
        <button className="Submit_Contact">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
