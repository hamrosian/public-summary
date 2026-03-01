import "./page.css";

export function Contact() {
  return (
    <div className="page-container">
      <article className="page-content">
        <h1>Contact the Institution</h1>
        <p className="page-intro">
          Questions, suggestions, or general correspondence may be directed to
          the Royal Institution for the Arts and Sciences.
        </p>

        <h2>Official Channels</h2>
        <p>You may reach us through the following:</p>

        <div className="contact-methods">
          <div className="contact-method">
            <h3>Email</h3>
            <p>
              Inquiries can be directed to our inbox at {" "}
              <a href="mailto:inquiries@trias.gov.er">inquiries@trias.ac.er</a>
            </p>
          </div>

          <div className="contact-method">
            <h3>Public Platforms</h3>
            <p>
              Updates and published articles are available via
              <a href="#"> Twitter</a> and <a href="#">Instagram</a>
            </p>
          </div>

          <div className="contact-method">
            <h3>Newsletter</h3>
            <p>
              Subscribe to receive newly issued articles directly to your inbox.
            </p>
          </div>
        </div>

        <h2>Submit a Message</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Topic of your message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your message..."
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </article>
    </div>
  );
}
