const Help = () => {

  return (
    <div className="help-container">
      <div className="help-header">
        <h1>How can we help you?</h1>
       
      </div>
      <div className="help-grid">
        <div className="help-card">
          
          <h3>Getting Started</h3>
          <p>New to our platform? Learn the basics and set up your account.</p>
         
        </div>

        <div className="help-card">
          <div className="card-icon">⚙️</div>
          <h3>Account Settings</h3>
          <p>Manage your profile, privacy, and notification preferences.</p>
          
        </div>

        <div className="help-card">
          <div className="card-icon">💳</div>
          <h3>Billing & Payments</h3>
          <p>Information about pricing, invoices, and payment methods.</p>
          
        </div>

        <div className="help-card">
          <div className="card-icon">🔒</div>
          <h3>Security & Privacy</h3>
          <p>Learn how we protect your data and your privacy rights.</p>
         
        </div>
      </div>

      <div className="contact-support">
        <h2>Still need help?</h2>
        <p>Can't find what you're looking for? Our support team is here to help.</p>
        <button className="support-btn">Contact Support</button>
      </div>
    </div>
  );
}

export default Help;