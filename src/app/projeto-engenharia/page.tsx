import { BgProjeto } from '@/components/backgroundprojeto/backgroundProjeto';
import s from './page.module.css';
import { Footer } from '@/components/foooter/footer';
import { Nav } from '@/components/header/nav';
import { ProjectGrid } from '@/components/secondary/projectgrid/projectgrid';
import { Benefits } from '@/components/secondary/benefits/benefits';
import { BenefitPhrases } from '@/helpers/list';
import { Form } from '@/components/form/form';

export const Page = () => {
    return (
        <div className={s.page}>
            <section className={s.header}>
            <Nav/>
            </section>
            <BgProjeto />
            <section className={s.item}>
                <h1>Como funcionam os projetos de engenharia</h1>
                <ProjectGrid />
            </section>
            <section className={s.benefititem}>
                <Benefits image={BenefitPhrases[1].image} text={BenefitPhrases[1].text}/>
            </section>
            <section className={s.empreendimento}>
                <h2>Ideal para quais empreendimentos</h2>
                <div className={s.empreedimentoimage}>
                    <div className={s.empreendimentoitem}>
                        <img src="itemgrid5.png" alt=""/>
                        <span>Comercial</span>
                    </div>
                    <div className={s.empreendimentoitem}>
                        <img src="residencial.jpg" alt=""/>
                        <span>Residenciais</span>
                    </div>
                </div>
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