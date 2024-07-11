import './contact.css'

function Contact() {
  return (
    <section className='contact-me'>
      <h1 className='title'>
        <span className='icon-envelope '></span>
        Contact Me
      </h1>
      <p className='subtitle'>Let's get in touch, collaborate, enhance our creativity together, and get notified when I publish something new!</p>

    <div className='flex'>
      <form className="border">
        <div>
          <label htmlFor="email">Email Address:</label>
          <input required type="email" name="" id="email"/>
        </div>

        <div className='flex' style={{marginTop: "24px"}}>
          <label htmlFor="message">Your message:</label>
          <textarea required name="" id="message"></textarea>
        </div>

        <button className='submit'>Submit</button>
      </form>
      <div className="border animation">animation</div>
    </div>

    </section>
  )
}

export default Contact
