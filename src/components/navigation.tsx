function Nav() {
  const handleClick = (e: { preventDefault: () => void }, targetId: string) => {
    e.preventDefault() // Останавливаем стандартное поведение якорной ссылки
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center' // Центрирование элемента по вертикали
      })
    }
  }
  const nav: [string, string][] = [
    ['Портфолио', '#portfolio'],
    ['Опыт', '#expereance'],
    ['Контакты', '#contact']
  ]
  return (
    <div>
      <ul className="navList">
        {nav.map((elem: string[], indx: number) => {
          return (
            <li className="navLink" key={indx}>
              <a
                href={elem[1]}
                onClick={(e) => handleClick(e, elem[1].replaceAll('#', ''))}
              >
                {elem[0]}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Nav
