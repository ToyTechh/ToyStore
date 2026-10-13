import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Header>
       <h1>Toy <span>STORE</span></h1>
       <nav>
        <ul>
            <li>
                <link to='/'>Home</link>
            </li>
            <li>
                <link to='/contato'>Contato</link>
            </li>
            <li>
                <link to='/sobre'>Sobre</link>
            </li>
        </ul>
       </nav>
       
    </Header>
  )
}

export default Header