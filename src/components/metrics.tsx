function Metrics() {
  return (
    <div
      id="expereance"
      style={{
        display: 'flex',
        margin: '5% 5%',
        justifyContent: 'center',
        gap: '2%'
      }}
    >
      <section style={{ width: '25%', textAlign: 'center' }}>
        <ul className="numMetrics">
          <li>
            <h2 className="metricNumber">300+</h2>
            <p className="metricParagraph">реализованных проектов</p>
          </li>
          <li>
            <h2 className="metricNumber">500+</h2>
            <p className="metricParagraph">3D-моделей зданий</p>
          </li>
          <li>
            <h2 className="metricNumber">200+</h2>
            <p className="metricParagraph">
              3D визуализаций промышленных объектов
            </p>
          </li>
        </ul>
      </section>
      <section
        style={{
          width: '75%',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          gap: '60px'
        }}
      >
        <h2 className="metricHeading">
          Архитектурное проектирование и 3D-визуализация: От идеи до реализации
        </h2>
        <p className="metricDecription">
          Я специализируюсь на проектировании, 3D моделировании и визуализации
          жилых и промышленных зданий. Создаю высококачественные архитектурные
          решения, детализированные 3D-модели и реалистичные визуализации,
          позволяющие оценить проект до его воплощения. Я стремлюсь к
          максимальной точности, эстетике и функциональности, обеспечивая полное
          сопровождение от идеи до финального результата.
        </p>
      </section>
    </div>
  )
}
export default Metrics
