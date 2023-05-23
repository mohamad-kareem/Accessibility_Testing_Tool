import Logo from "../Logo/Logo"
import "./footer.css"
import { footer } from "../TextContent"
const Footer = () => {
  return (
    <div className='footer-container'>
      <div id="footer_content">
      <div id="footer_contacts">
        <h1><Logo/></h1>
        <p>{footer.text1}</p>

        <div id="footer_social_media">
          <a href="https://github.com/mohamad-kareem/CodeJunction" className="footer-link" id="instagram">.</a>

          <a href="https://github.com/mohamad-kareem/CodeJunction" className="footer-link" id="facebook">.</a>

          <a href="https://github.com/mohamad-kareem/CodeJunction" className="footer-link" id="whatsapp">.</a>
        </div>
      </div>

      <ul className="footer-list">
        <li>
          <h3>{footer.text2}</h3>
        </li>
        <li>
          <a href="https://github.com/mohamad-kareem/CodeJunction" className="footer-link">{footer.text3}</a>
        </li>
        <li>
          <a href="https://github.com/mohamad-kareem/CodeJunction" className="footer-link">{footer.text4}</a>
        </li>
        <li>
          <a href="https://github.com/mohamad-kareem/CodeJunction" className="footer-link">{footer.text5}</a>
        </li>
      </ul>

      <ul className="footer-list">
        <li>
          <h3>{footer.text6}</h3>
        </li>
        <li>
          <a href="https://github.com/mohamad-kareem/CodeJunction" className="footer-link">{footer.text7}</a>
        </li>
        <li>
          <a href="https://github.com/mohamad-kareem/CodeJunction" className="footer-link">{footer.text8}</a>
        </li>
        <li>
          <a href="https://github.com/mohamad-kareem/CodeJunction" className="footer-link">{footer.text9}</a>
        </li>
      </ul>

      <div id="footer_subscribe">
        <h3>{footer.text10}</h3>

        <p>
        {footer.text11}
        </p>

        <div id="input_group">
          <input type="email" id="email" />
          <button>
          {footer.text12}
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
