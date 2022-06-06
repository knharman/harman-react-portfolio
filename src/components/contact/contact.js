import './contact.css';
import pug from '../../images/gifs/pug.gif';
import emailjs from '@emailjs/browser';

function Contact() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    let name = e.target[0].value
    let email = e.target[1].value
    let text = e.target[2].value

    let templateParams = {
      from_name: name,
      to_name: 'Kellie Harman',
      message: text,
      reply_to: email
    }
  
    emailjs.send('service_4a7zv1e', 'template_x206qvn', templateParams, 'AH3bfW50sniNTmCwB')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message Sent Successfully!')
        window.location.reload()
      }, (err) => {
        console.log('FAILED...', err);
        alert('Message Failed to Send. Please email me at knharman@gmail.com')
      });
  };
  return (
    <div className="Contact">
      <form onSubmit={handleOnSubmit}>
        <img src={pug} alt="pug gif" />
        <input className="my-2 p-4" type="text" id="name" name="name" required placeholder="NAME" />
        <input className="my-2 p-4" type="email" id="email" name="email" required placeholder="EMAIL" />
        <textarea className="my-2 p-3" id="message" name="message" placeholder="MESSAGE" required ></textarea>
        <input className="p-2" type="submit" id="submit" value="SUBMIT" />
      </form>
    </div>
  );
}

export default Contact;