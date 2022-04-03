import './contact.css';

function Contact() {
  return (
    <div className="Contact">
      <form>
        <input className="my-2 p-2" type="text" id="name" name="name" required placeholder="NAME"/>
        <input className="my-2 p-2" type="email" id="email" name="email" required placeholder="EMAIL"/>
        <textarea className="my-2 p-2" id="message" name="message" placeholder="MESSAGE" required ></textarea>

        <input className="p-2" type="submit" id="submit" value="SUBMIT"/>
      </form>
    </div>
  );
}

export default Contact;