import react from 'react';

function Footer(){
  var ano = new Date().getFullYear();

  return <section id="footer">
    <div className="row">
        <ul className="list-unstyled list-inline social text-center">
          <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-facebook"></i></a></li>
          <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-twitter"></i></a></li>
          <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-instagram"></i></a></li>
          <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-google-plus"></i></a></li>
          <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02" target="_blank"><i className="fa fa-envelope"></i></a></li>
        </ul>
		</div> 
    <a href="mailto:andrephelipe@outlook.com">andrephelipe@outlook.com</a>
    <p>Desenvolvido por 99 Coders - {ano}</p>       
  </section>;
}

export default Footer;