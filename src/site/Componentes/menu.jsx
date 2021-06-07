import react from 'react';

function Menu(){
    return <nav className="navbar navbar-expand-md navbar-dark">
    <div className="container">  
        <a className="navbar-brand" href="#">
          <img src="Images/logo.png" alt=""  height="28"/>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Clientes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Planos e Preços</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Contato</a>
            </li>
          </ul>
        </div> 
    </div>    
  </nav>
}

export default Menu;