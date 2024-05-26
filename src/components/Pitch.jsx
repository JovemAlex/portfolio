import Buttom from "./btn";
import avatar from '../assets/portfolio-avatar.png';

const Pitch = () => {
  return (
    <div className="flex flex-col items-center gap-y-9">

      <div className="flex">
        <div className="w-1/2 flex flex-col gap-y-5 justify-center">
          <div className="flex flex-col gap-y-2.5">
            <p>Olá, eu sou</p>
            <h1 className="text-5xl font-semibold">Alexsandro Andrade</h1>
            <p>
            Apaixonado por games e atividades físicas, iniciei minha carreira como designer, o que despertou em mim um interesse profundo pelo design e a tecnologia. Buscando sempre novos desafios, decidi aprender a programar e me tornei desenvolvedor. Minha experiência inclui atuação como desenvolvedor júnior, onde trabalhei com automações e desenvolvimento front-end. Além disso, adquiri conhecimentos sólidos em desenvolvimento full stack.
            </p>
          </div>
          <div className="flex flex-col gap-y-2.5">
            <span className="text-lg font-semibold">Links diretos:</span>
            <div className="flex gap-x-8">

              <a href="https://drive.google.com/file/d/1r7NqsUQF4D61IDiz_9U2c9d-6ub-nVZX/view?usp=sharing" target="_blank" rel="noreferrer">
                <Buttom name={'Download CV'}/>
              </a>
              
              <Buttom link={'#contact'} name={'Contact me'}/>
              <Buttom link={'#contact'} name={'Socials'}/>
            </div>
          </div>
        </div>
        <div className="w-[647px] h-[647px]">
          <img src={avatar} alt="avatar-logo" />
        </div>
        
      </div>

      <Buttom link={'#stacks'} name={'Veja mais'} type="none"/>

    </div>
  );
}
 
export default Pitch;