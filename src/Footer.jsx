import React from 'react';

function Footer(){
  var ano = new Date().getFullYear(); 

  return <div>
         <p>Desenvolvido por 99 Coders - {ano}</p>
         </div>;
  }

export default Footer;