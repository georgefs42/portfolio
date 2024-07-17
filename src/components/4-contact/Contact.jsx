import './contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'lottie-react'
import doneAnimation from '../../animation/done.json'
import emilAnimation from '../../animation/email.json'

function Contact() {

  const [state, handleSubmit] = useForm("xgvwvdvy");

  return (
    <section className='contact-me'>
      <h1 className='title'>
        <span className='icon-envelope '></span>
        Contact Me
      </h1>
      <p className='subtitle'>Let's get in touch, collaborate, enhance our creativity together, and get notified when I publish something new!</p>

      <div style={{ justifyContent: 'space-between' }} className='flex'>
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
            {state.submitting ? 'Submitting ...' : 'Submit'}
          </button>

          {state.succeeded && (
            <p className='flex' style={{ fontSize: '18px', marginTop: '1.7rem' }}>

              <Lottie
                loop={false}
                style={{ height: 70 }}
                animationData={doneAnimation} />

              Thanks for your message. I'll get back to you as soon as possible. Best regards, George.</p>
          )}

        </form>
        <div className="animation">
          <Lottie className='email-animation'
            style={{ height: 360 }}
            animationData={emilAnimation} />
        </div>
      </div>

    </section>
  )
}

export default Contact
