import MediaQuery from 'react-responsive';
import "../functions/TextAnimation.css"

const Section01 = () => {

  return (
    <>
      <MediaQuery minWidth={1025}>
        <section id="sobre" className="flex flex-col font-Poppins text-center">
          <p className="titulo">
            Em direção ao <span className="letraDestaqueVerde">Futuro</span>
          </p>

        <div className='containerTextoAnimacao'>
            <div>
                <p class="w-7/12 text-4xl mt-20">Construimos aplicações que mudam a sociedade</p>
            </div>
            <div>
                <p class="w-7/12 text-4xl mt-20">Valorizamos relacionamentos baseados em confiança, respeito e transparência.</p>
            </div>
            <div>
                <p class="w-7/12 text-4xl mt-20">Agimos com integridade e ética, assumindo a responsabilidade pelo impacto de nossas ações.</p>
            </div>
            <div>
                <p class="w-7/12 text-4xl mt-20">Buscamos constantemente novas maneiras de impulsionar o progresso tecnológico.</p>
            </div>
            <div>
                <p class="w-7/12 text-4xl mt-20">Construimos aplicações que mudam a sociedade</p>
            </div>

        </div>
        </section>
      </MediaQuery>
    </>
  );
}

export default Section01;