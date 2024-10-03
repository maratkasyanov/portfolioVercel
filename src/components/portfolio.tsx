import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import '../style/style.css'
import Metrics from './metrics'
import interier from '../assets/video/interier.mp4'
import slider1 from '../assets/img/slider1.jpg'
import slider2 from '../assets/img/slider2.jpg'
import slider3 from '../assets/img/slider3.jpg'
import slider4 from '../assets/img/slider4.jpg'
import slider5 from '../assets/img/slider5.jpg'
import slider6 from '../assets/img/slider6.jpg'
function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolioVideo">
        <div className="portfolioVideoCaption">
          <div className="skills">
            <p>Моделирование в 3ds Max</p>
            <p>Рендеринг V-Ray</p>
            <p>Анимация камеры</p>
            <p>Постобработка в After Effects/Premiere</p>
          </div>
          <h3>3d моделирование в 3D Max</h3>
          <p className="portfolioPararaph">
            Каждый элемент интерьера — от мебели до декора — был тщательно
            проработан для создания реалистичной и уютной атмосферы.
            Визуализация демонстрирует стильные решения в дизайне, подчеркивая
            использование естественного света, текстур и материалов. Видео
            позволяет детально рассмотреть различные зоны дома, включая
            гостиную, кухню и спальни, создавая полное ощущение присутствия и
            погружая зрителя в уникальную атмосферу гармонии и комфорта.
          </p>
        </div>
        <video muted autoPlay controls width="60%">
          <source src={interier} type="video/mp4" />
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/bNnotH2TpPU?si=bX_hWu24TfJgduZL"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </video>
      </div>
      <Metrics />
      <section id="portfolio" className="portfolioSlider">
        <div className="portfolioPararaphBlock">
          <div className="skillsR">
            <p>3D-моделирование зданий 3dMax</p>
            <p>Фотореалистичный рендеринг V-Ray</p>
            <p>Работа с архитектурными чертежами</p>
            <p>Постобработка в Photoshop</p>
          </div>
          <h3>3D-визуализация строительных объектов</h3>
          <p className="portfolioPararaph">
            3D-визуализации дорожных инфраструктур, транспортных развязок и
            муниципальных зданий. Каждое изображение передает реалистичное
            отображение архитектурных объектов и городской инфраструктуры, с
            фокусом на точную проработку деталей, текстур и освещения.
            Визуализации помогают увидеть, как могут выглядеть будущие проекты в
            реальной городской среде, подчеркивая гармоничное сочетание
            современных технологий и функционального дизайна. Этот подход
            позволяет эффективно представить концепции благоустройства и
            градостроительных решений, обеспечивая ясное понимание их
            реализации.
          </p>
        </div>
        <AwesomeSlider style={{ height: '50%', width: '50%' }}>
          <div className="wrapSlide">
            <img src={slider1}></img>
          </div>
          <div className="wrapSlide">
            <img src={slider2}></img>
          </div>
          <div className="wrapSlide">
            <img src={slider3}></img>
          </div>
          <div className="wrapSlide">
            <img src={slider4}></img>
          </div>
          <div className="wrapSlide">
            <img src={slider5}></img>
          </div>
          <div className="wrapSlide">
            <img src={slider6}></img>
          </div>
        </AwesomeSlider>
      </section>
    </section>
  )
}
export default Portfolio
