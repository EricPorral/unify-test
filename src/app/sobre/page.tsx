import { Nav } from '@/components/header/nav';
import { Footer } from '@/components/foooter/footer';
import { Bg } from '@/components/background/background';
import { Background } from '@/helpers/list';
import { Aboutitem } from '@/components/secondary/aboutitem/aboutitem';
import { Form } from '@/components/form/form';
import s from './page.module.css';

const Page = () => {
  return (
    <div className={s.page}>
        <section className={s.header}>
            <Nav/>
        </section>
        <Bg title={Background[0].title} desc={Background[0].desc} desc1={Background[0].desc1} desc2={Background[0].desc2}/>
        <Aboutitem />
        <section className={s.info}>
            <div className={s.button}>
                <button>CONHEÇA NOSSAS SOLUÇÕES</button>
            </div>
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