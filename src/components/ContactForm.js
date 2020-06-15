import * as React from 'react';

export default function ContactForm() {
  return (
    <form
      className="contact-form"
      action="https://formspree.io/xyyerdyg"
      method="POST"
    >
      <h4>Have a question? Send me a message.</h4>
      <div>
        <div className="input-wrapper">
          <label htmlFor="_replyto" id="label_replyto" aria-label="Email">
            Email
          </label>
          <input
            type="email"
            name="_replyto"
            id="_replyto"
            defaultValue=""
            placeholder="Email*"
            aria-labelledby="label_replyto"
          />
        </div>
      </div>
      <div>
        <div className="input-wrapper">
          <label htmlFor="message" id="label_message" aria-label="Message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message*"
            aria-labelledby="label_message"
            rows="3"
          />
        </div>
      </div>
      <div>
        <button type="submit" className="special">
          Send Message
        </button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}
