import './contact.css';

function Contact() {
  return (
    <div className="Contact">
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required/>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required/>
        <label htmlFor="message">Message:</label>
        <input type="text" id="message" name="message" required/>

        <input type="submit" id="submit" value="submit" required/>
      </form>
    </div>
  );
}

export default Contact;