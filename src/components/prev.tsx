import Nav from './navigation'
import '../style/style.css'
function Preview() {
  return (
    <div className="preview">
      <Nav />
      <div className="hero-section">
        <h1 className="heading">Воплощаю архитектурные идеи в 3D</h1>
        <p className="pharagraph">
          Комплексное проектирование, 3D моделирование и визуализация жилых и
          промышленных зданий, создаю функциональные и эстетичные пространства
          для любых задач
        </p>
        <a href="#contact" className="cta-button">
          Связаться
        </a>
      </div>
    </div>
  )
}

export default Preview
