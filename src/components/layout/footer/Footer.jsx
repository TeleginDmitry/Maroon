import '../../../assets/styles/nullStyle.css'
import  '../footer/footer.css'
import logo from '../../../assets/icons/logo.svg'
import facebook from '../../../assets/icons/facebook.svg'
import instagram from '../../../assets/icons/instagram.svg'
import twitter from '../../../assets/icons/twitter.svg'

function Footer() {
  return ( 

  <footer className="footer">

    <div className="footer_wrapper">
 
      <div className="footer-top">

        <div className="footer-top-left">

          <div className="footer-logo">
            <img src={logo} alt="логотип" />
          </div>

          <div className="footer-links">
            <a href="#" target="_blank" className="footer-link">Каталог</a>
            <a href="#" target="_blank" className="footer-link">О нас</a>
            <a href="#" target="_blank" className="footer-link">Магазины</a>
            <a href="#" target="_blank" className="footer-link">Контакты</a>
          </div>

        </div>

        <div className="footer-top-right">
          <a href="#" target="_blank"> <img src={facebook} alt="facebook" /> </a>
          <a href="#" target="_blank"> <img src={instagram} alt="instagram" /> </a>
          <a href="#" target="_blank"> <img src={twitter} alt="twitter" /> </a>
        </div>

      </div>

<p>test</p>


      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p className="left-text">Maroon &copy; 2023 Все права защищены</p>
        </div>

        <div className="footer-bottom-right">
          <p className="right-text">Политика конфиденциальности</p>
        </div>

      </div>
    
    </div>

  </footer>

   );
}

export {Footer};