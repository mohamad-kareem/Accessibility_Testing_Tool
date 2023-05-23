import Logo from "../Logo/Logo"
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
      <div id="footer_content">
      <div id="footer_contacts">
        <h1><Logo/></h1>
        <p>It's all about your dreams.</p>

        <div id="footer_social_media">
          <a href="https://github.com/mohamad-kareem/CodeJunction" className="footer-link" id="instagram">.</a>

          <a href="https://github.com/mohamad-kareem/CodeJunction" className="footer-link" id="facebook">.</a>

          <a href="https://github.com/mohamad-kareem/CodeJunction" className="footer-link" id="whatsapp">.</a>
        </div>
      </div>

      <ul className="footer-list">
        <li>
          <h3>Blog</h3>
        </li>
        <li>
          <a href="https://github.com/mohamad-kareem/CodeJunction" className="footer-link">Tech</a>
        </li>
        <li>
          <a href="https://github.com/mohamad-kareem/CodeJunction" className="footer-link">Adventures</a>
        </li>
        <li>
          <a href="https://github.com/mohamad-kareem/CodeJunction" className="footer-link">Music</a>
        </li>
      </ul>

      <ul className="footer-list">
        <li>
          <h3>Products</h3>
        </li>
        <li>
          <a href="https://github.com/mohamad-kareem/CodeJunction" className="footer-link">App</a>
        </li>
        <li>
          <a href="https://github.com/mohamad-kareem/CodeJunction" className="footer-link">Desktop</a>
        </li>
        <li>
          <a href="https://github.com/mohamad-kareem/CodeJunction" className="footer-link">Cloud</a>
        </li>
      </ul>

      <div id="footer_subscribe">
        <h3>Subscribe</h3>

        <p>
          Enter your e-mail to get more 
        </p>

        <div id="input_group">
          <input type="email" id="email" />
          <button>
            send
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
