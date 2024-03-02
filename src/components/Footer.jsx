import React from 'react';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <div className="social-links">
          <a href="https://github.com/Schtitle24" target="_blank" rel="noopener noreferrer" className="me-4">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/winston-steidley-81224710b/" target="_blank" rel="noopener noreferrer" className="me-4">
            LinkedIn
          </a>
          <a href="https://twitter.com/Schtitle24" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
        <span className="text-muted">{new Date().getFullYear()} Winston "Schtitle24" Steidley</span>
      </div>
    </footer>
  );
}

export default Footer;