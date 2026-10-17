import './Header.css';

function Header() {
  return (
    <div className='header'>
      <h1 className='titulo'>Investidores</h1>
      
      <ul className='lista'>
        <li className='link'><a href="#contato">Contato</a></li>
        <li className='link'><a href="#instagram">Instagram</a></li>
        <li className='link'><a href="#tiktok">Tiktok</a></li>
      </ul>
    </div>
  );
}

export default Header;