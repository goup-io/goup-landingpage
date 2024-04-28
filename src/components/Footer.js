import MediaQuery from 'react-responsive';

import IconList from './iconList';

import iconEmail from '../assets/icon/iconEmail.png';
import iconWhatsApp from '../assets/icon/iconWhatsApp.png';
import iconTelefone from '../assets/icon/iconTelefone.png';

import '../index.css';

function Footer() {
  return (
    <>
      <MediaQuery maxWidth={1024}>
        <section id='footer' className="flex flex-col justify-center">
          <p className="text-2xl text-center w-3/6">Quer fazer parte do <span className="letraDestaqueVerde">futuro</span> ?</p>
          <div className="flex flex-col items-center gap-8 w-full">
            <p className="text-center w-10/12 mt-12 font-extralight text-2xl ">Entre em contato conosco sobre seu negócio para que possamos agendar uma visita.</p>
            <div className="bg-verdeGoUp w-2/3 h-2 rounded-lg"></div>
            <ul className="flex flex-col gap-5 items-start">
              <IconList icone={iconEmail}><p className="text-xl">goup@gmail.com</p></IconList>
              <IconList icone={iconWhatsApp}><p className="text-xl">(11)99999-9999</p></IconList>
              <IconList icone={iconTelefone}><p className="text-xl">(11)3333-3333</p></IconList>
            </ul>
          </div>
        </section>
      </MediaQuery>
      <MediaQuery minWidth={1025}>
        <section id="footer" className="flex flex-col justify-center mt-80 ">
          <p className="text-center text-7xl w-1/3">Quer fazer parte do <span className="letraDestaqueVerde">futuro ?</span></p>
          <div className="flex flex-row justify-center m-20 gap-10">
            <p className="text-end w-4/12 font-extralight">Entre em contato conosco sobre seu negócio para que possamos agendar uma visita.</p>
            <div className="bg-verdeGoUp w-3 rounded-lg"></div>
            <ul className="flex flex-col align-center justify-around">
              <IconList icone={iconEmail}>goup.contactus@gmail.com</IconList>
              <IconList icone={iconWhatsApp}>(11) 96300-6941</IconList>
              <IconList icone={iconTelefone}>(11) 95671-1016</IconList>
            </ul>
          </div>
        </section>
      </MediaQuery>
    </>
  );
}

export default Footer;