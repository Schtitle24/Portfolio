export default function Contact() {
  return (
    <div className="text-center">
      <h1>Contact Page</h1>
      <form action="/submit-form" method="POST">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" required />
          <div className="invalid-feedback">
            Please enter your name.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" required />
          <div className="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
          <div className="invalid-feedback">
            Please enter your message.
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '90%' }}>YOU ARE SO CLOSE TO HIRING ME! JUST HIT SUBMIT TO FILL THE BAR!</div>
      </div>
    </div>
  );
}
