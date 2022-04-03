import './contact.css';
import pug from '../../images/gifs/pug.gif';

function Contact() {
  return (
    <div className="Contact">
      <form>
        <input className="my-2 p-4" type="text" id="name" name="name" required placeholder="NAME"/>
        <input className="my-2 p-4" type="email" id="email" name="email" required placeholder="EMAIL"/>
        <textarea className="my-2 p-3" id="message" name="message" placeholder="MESSAGE" required ></textarea>

        <input className="p-2" type="submit" id="submit" value="SUBMIT"/>
        <img src={pug} alt="pug gif" />
      </form>
    </div>
  );
}

export default Contact;