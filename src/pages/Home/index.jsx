import imgBarragem1 from "../../assets/imgBarragem.jpg";

import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import "./styles.css";
import React, { useEffect, useState } from 'react';

export function Home () {

    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
    return(
    <div className={` ${scrolled ? 'scrolled' : ''}`}>

            <div className="back">
                
                <Header />
                <h1 className="h1-titulo">Sistema de verificação e monitoramento <br />da integridade estrutural de barragens.</h1>
                
            </div>

        <div>
            
            <h1 className="h1-home animated-text "><span className="highlight">Você sabia que</span></h1>
          
           
            <div className="desastre">
                <p className="p1">No Brasil, há em média mais de três acidentes com barragens a cada ano. <br /> Os dados são compilados pela Agência Nacional de Águas (ANA), <br /> responsável pelo Relatório de Segurança de Barragens (RSB).</p>
                <img className="imgBarragem1" src={imgBarragem1} alt="" />
            </div>

            <div className="desastre2">
                <p className="p2">Desde 2011, quando o primeiro relatório foi produzido, até 2017, a ANA registrou 24 acidentes. <br /> Contudo, o número real é maior: a própria agência reconhece que há acidentes não relatados e <br /> mesmo barragens que não foram informadas ao governo federal.</p>
                <img className="imgBarragem1" src='https://qph.cf2.quoracdn.net/main-qimg-aa699bbff4259870fbe9f4b5801b3f49-pjlq' alt="" />
            </div>
            
            <p className="fonte">Fonte: Relatório de Segurança de Barragens 2017, da Agência Nacional das Águas (ANA)</p>

            <div className="contexto">
                <h3>Dentro desse contexto </h3> 
                <h2>como trazer <span className="highlight">mais segurança a essas estruturas?</span></h2>

            </div>
       </div>

        <div className="trazer">
                <h3>E é exatamente isso que</h3>
                <h1>o nosso produto busca trazer!</h1> 
            <div className="informacoes">
                <div className="sub-info">
                    <h2 className="h2-veri">Ele ira fazer verificação e monitoramento contínuo das barragens</h2>
                    <h3>e também:</h3>

                    <ul className="ul">
                        <li className="li-esp">Realizar um estudo bibliográfico acerca do funcionamento de barragens;</li>
                        <li className="li-esp">Verificar questões regulatórias envolvendo segurança de barragens;</li>
                        <li className="li-esp">Mapeamento e calibração da aferição em tempo real dos sensores de monitoramento;</li>
                        <li className="li-esp">Desenvolver um sistema SCADA (Sistema de Supervisão e Aquisição de Dados).</li>
                        <li className="li-esp">Desenvolver uma comunicação de longa distância via tecnologia LoRa.</li>
                    </ul>
                </div>

                <div>
                    <img className="" src="" alt="" />
                </div>
            </div>
        </div>

        
            
       

        <div className="queremos">
            <h1><span className="highlight">E nós queremos</span></h1>
        </div>
        <div >
            <ul className="ul-queremos">
                <li className="queremos-espe">Diminuição de acidentes</li>
                <li className="queremos-espe">Auxilio nas inspeções regulares garantindo uma manutenção mais eficaz</li>
                <li className="queremos-espe">Maior segurança para as comunidades próximas</li>
            </ul>
        </div>
        
        <Footer />
       
        
       
    </div>
    );
}

