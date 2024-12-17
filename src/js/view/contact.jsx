export default function Contact(){
  return (
    <>  <section className="section contact" id="gallery">
      <div className="section-center contact-center">
        {/* <!-- contact title --> */}
        <article className="contact-title">
          <h3>want latest trip info and updates?</h3>
          <p>sign up for newsletter and stay up to date</p>
        </article>
        {/* <!-- contact form --> */}
        <form className="contact-form" autoComplete="on" action="" method="post">
          <input
            type="email"
            name="email"
            className="form-control"
            required
            placeholder="your email"
          />
          <button type="submit" className="btn-submit btn" name="notify">
            submit
          </button>
        </form>
      </div>
    </section></>
  )
}