import './contact.css'
import { useForm, ValidationError } from '@formspree/react';

function Contact() {

  const [state, handleSubmit] = useForm("xgvwvdvy");
 
  return (
    <section className='contact-me'>
      <h1 className='title'>
        <span className='icon-envelope '></span>
        Contact Me
      </h1>
      <p className='subtitle'>Let's get in touch, collaborate, enhance our creativity together, and get notified when I publish something new!</p>

      <div className='flex'>
        <form onSubmit={handleSubmit} className="border">
          <div>
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

          </div>

          <div className='flex' style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

          </div>

          <button type="submit" disabled={state.submitting} className='submit' >
            {state.submitting ? 'Submitting ...': 'Submit'}
          </button>
          
              {state.succeeded && (
            <p style={{fontSize:'18px', marginTop: '1.7rem'}}>
              Thanks for your message. I'll get back to you as soon as possible. Best regards, George.</p>
          )}

          </form>
              <div className="border animation">animation</div>
            </div>

    </section>
        )
}

        export default Contact
