import Google from '../assets/img/Google +.svg'
import Telegram from '../assets/img/Telegram.svg'
import Facebook from '../assets/img/Facebook.svg'
function Footer() {
  return (
    <section id="contact" className="footer">
      <div className="company">
        <div>
          <h3 className="companyName">Касьянов Альберт</h3>
          <p style={{ color: 'white' }}>
            Архитектор-дизайнер, 3D моделлер, 3D визуализатор
          </p>
        </div>
        <p className="companyAdress">Казань, Республика Татарстан</p>
        <div className="companySocial">
          <a href="#">
            <img src={Google}></img>
          </a>
          <a href="#">
            <img src={Telegram}></img>
          </a>
          <a href="#">
            <img src={Facebook}></img>
          </a>
        </div>
      </div>
      <div className="connection">
        <h3 className="connectionParagraph">Готовы обсудить ваш проект?</h3>
        <a className="emailLink" href="mailto:kasyanov@gmail.com">
          Свяжитесь со мной
        </a>
      </div>
    </section>
  )
}

export default Footer
