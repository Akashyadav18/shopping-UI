import React from 'react';
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div class="row primary">
  <div class="column about">
    <h3>Connect</h3>
    <p>
      <i class="fa fa-map-marker" aria-hidden="true"></i>
      Sienna Towers, Service Road, Bangalore
    </p>
    <div class="social">
      <i class="fa fa-facebook-square"></i>
      <i class="fa fa-twitter-square"></i>
      <i class="fa fa-linkedin-square"></i>
      <i class="fa fa-instagram"></i>
    </div>
  </div>

  <div class="column link">
    <h3>Links</h3>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#team">Team</a></li>
      <li><a href="#blogs">Blogs</a></li>
      <li><a href="#support">Support</a></li>
    </ul>
  </div>

  <div class="column subscribe">
    <h3>Newsletter</h3>
    <div>
      <input type="email" placeholder="Your email id here" />
      <button>Subscribe</button>
    </div>
  </div>
</div>

  )
}

export default Footer
