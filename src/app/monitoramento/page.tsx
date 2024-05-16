import s from './page.module.css';

import { Nav } from '@/components/header/nav';
import { Footer } from '@/components/foooter/footer';
import { BgMonitoramento } from '@/components/backgroundMonitoramento/backgroundMonitoramento';
import { Background, BenefitPhrases, Modal } from '@/helpers/list';
import { MonitoramentoModal } from '@/components/secondary/monitoramentoModal/monitoramentoModal';
import { Solution } from '@/components/secondary/solution/solution';
import { Benefits } from '@/components/secondary/benefits/benefits';
import { Form } from '@/components/form/form';

const Page = () => {
    return (
      <div className={s.page}>
            <section className={s.header}>
                <Nav/>
            </section>
            <BgMonitoramento title={Background[2].title} desc={Background[2].desc} />
            <section className={s.modalarea}>
                <div className={s.modaltitle}>
                    <h1>Considere todas as funcionalidades do Unify Plus</h1>
                </div>
                <div className={s.modalitem}>
                    <div className={s.leftarrow}>
                        <img src="arrow-left.svg"/>
                    </div>
                    <div style={{ marginLeft: '60px'}}>
                        <MonitoramentoModal color={Modal[0].color} image={Modal[0].image} title={Modal[0].title} desc1={Modal[0].desc1} desc2={Modal[0].desc2} desc3={Modal[0].desc3} />
                    </div>
                    <div className={s.modalcard}>
                        <MonitoramentoModal color={Modal[1].color} image={Modal[2].image} title={Modal[0].title} desc1={Modal[0].desc1} desc2={Modal[0].desc2} desc3={Modal[0].desc3} />
                    </div>
                    <div className={s.modalcard} style={{marginRight: '60px'}}>
                        <MonitoramentoModal color={Modal[2].color} image={Modal[1].image} title={Modal[0].title} desc1={Modal[0].desc1} desc2={Modal[0].desc2} desc3={Modal[0].desc3} />
                    </div>
                    <div className={s.rightarrow}>
                        <img src="arrow-right.svg"/>
                    </div>
                </div>
            </section>
            <section className={s.solution}>
                <Solution />
            </section>
            <section className={s.benefit}>
                <Benefits image={BenefitPhrases[2].image} text={BenefitPhrases[2].text}/>
            </section>
            <section className={s.form}>
                <div className={s.line}></div>
                <div className={s.text}>
                    <h2>Entre em contato conosco</h2>
                    <p>Fale diretamente com a nossa equipe através do formulário de contato e descubra como vamos revolucionar a forma como você monitora, controla e otimiza os recursos críticos do seu negócio!</p>
                </div>
                <Form />
            </section>
            <Footer/>    
      </div>
    )
}

export default Page;