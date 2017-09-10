import React from 'react'

export default function() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Quick Survey</h5>
            <p className="grey-text text-lighten-4">
              A demonstration app by Joe Bemonte
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  target="_blank"
                  href="https://www.linkedin.com/in/joe-belmonte/"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  target="_blank"
                  href="https://github.com/joebelmonte"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <a
            className="grey-text text-lighten-3"
            target="_blank"
            href="http://www.josephbelmonte.com"
          >
            www.josephbelmonte.com
          </a>
        </div>
      </div>
    </footer>
  )
}
