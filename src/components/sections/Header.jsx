import Button from "../Button.jsx";

export default function Header() {
  const body = document.querySelector('body');
  body.setAttribute('data-theme', 'light')
  const setDarkMode = () => {
    body.setAttribute('data-theme', 'dark');
  }

  const setLightMode = () => {
    body.setAttribute('data-theme', 'light');
  }

  const toggleTheme = (e) => {
    if (body.getAttribute('data-theme') === 'dark') {
      console.log('ok')
      setLightMode();
    } else {
      setDarkMode();
    }
  }

  return (
    <>
      <div className="header">
        <div>
          <img width="50px" src="/src/assets/curriculum-vitae.svg"></img>
          <h1>CV Builder</h1>
        </div>
        <Button 
          className='theme'
          onChange={toggleTheme}
        />
      </div>
    </>
  );
}
