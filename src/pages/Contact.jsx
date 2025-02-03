

const Contact = () => {
  return (
    <section>
      <section>
        <div className="contact">
          <div>
            <img
              className="email"
              src="../images/undraw_personal_email_re_4lx7.svg"
              alt=""
            />
          </div>
          <form action="">
            <h1>GET IN TOUCH</h1>
            <div className="input-box">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="m16"
                placeholder="Enter Full Name"
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
            <button className="submit">Submit</button>
          </form>
        </div>
      </section>
    </section>
  );
}

export default Contact