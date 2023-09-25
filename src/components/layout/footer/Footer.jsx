import '../../../assets/styles/nullStyle.css'
import style from '../footer/footer.module.css'

import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { ReactComponent as Facebook } from '../../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/icons/instagram.svg';
import { ReactComponent as Twitter } from '../../../assets/icons/twitter.svg';
import { ReactComponent as Copy } from '../../../assets/icons/circle-c.svg';


function Footer() {
  return ( 

  <footer className={style.footer}>

    <div className={style.footer_wrapper} >
 
      <div className={style.footer_top} >

        <div className={style.footer_top_left} >

          <div className={style.footer_logo} >
            < Logo alt="логотип" />
          </div>

          <div className={style.footer_links} >
            <a href="#" target="_blank" className={style.footer_link} >Каталог</a>
            <a href="#" target="_blank" className={style.footer_link} >О&nbsp;нас</a>
            <a href="#" target="_blank" className={style.footer_link} >Магазины</a>
            <a href="#" target="_blank" className={style.footer_link} >Контакты</a>
          </div>

        </div>

        <div className={style.footer_top_right} >
          <a href="#" target="_blank"> <Facebook alt="facebook" /> </a>
          <a href="#" target="_blank"> < Instagram alt="instagram" /> </a>
          <a href="#" target="_blank"> <Twitter alt="twitter" /> </a>
        </div>

      </div>
 
      <div className={style.footer_bottom_border} >

        <div className={style.footer_bottom} > 

          <div className={style.footer_bottom_left} >
            <p className={style.left_text} >Maroon 
            <span> < Copy  alt="copy" /> </span>
             2023 Все права защищены</p>
          </div>

          <div className={style.footer_bottom_right} >
            <p className={style.right_text} >Политика конфиденциальности</p>
          </div>

        </div>
      
      </div>
 
    </div>

  </footer>

   );
}

export {Footer};