import React from 'react';

class ContactLinks extends React.PureComponent {
  render() {
    return (
      <div className="contact-links">
        <span>
          <a rel="noopener" target="_blank" href="mailto:kwaktony@outlook.com">
            kwaktony@outlook.com
          </a>
        </span>
        <span>
          <a
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/tonykwak"
          >
            LinkedIn
          </a>
        </span>
        <span>
          <a rel="noopener" target="_blank" href="https://github.com/tkodes">
            GitHub
          </a>
        </span>
      </div>
    );
  }
}

export default ContactLinks;
