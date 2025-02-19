import '../assets/styles/contact.css'
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Pers from '../assets/images/undraw_personal_email_re_4lx7.svg'
import { toast } from 'react-toastify';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yx9469c", "template_pxz0wh7", form.current, {
        publicKey: "BJmAQBTe8snbBa23h",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("Message Sent, Thanks For Reaching Out");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Message Not Sent, PLease Try Again");
        }
      );
  };

  return (
    <section>
      <section>
        <div className="contact">
          <div>
            <img
              className="email"
              src={Pers}
              alt=""
            />
          </div>
          <form ref={form} onSubmit={sendEmail} action="">
            <h1 className="ara">GET IN TOUCH</h1>
            <div className="input-box">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="m16"
                placeholder="Enter Full Name"
                name="from_name"
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input type="email" className="m16" placeholder="Enter Email" />
            </div>
            <div className="input-box">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="m16 glock"
                placeholder="your Message"
                defaultValue={""}
              />
            </div>
            <button className="submit aqua">Submit</button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Contact;
