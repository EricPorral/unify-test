import s from './scroll.module.css';

export const Scroll = () => {
    return (
        <div className={s.scroll}>
           <div className={s.text}>
                <h1>Monitoramento e controle na palma da sua mão</h1>
                <p>Unify Plus é uma solução conjunta de hardware e software, que foca na coleta de dados de sensoriamento em tempo real para exibir métricas, alarmes e 
                perfis que reflitam sobre consumo, produção, geração e integridade de sistemas e ativos do seu negócio</p>
           </div>
           <div className={s.empty}></div>
           <div className={s.image}>
                <img src="/scroll.jpg" alt=""/>
           </div>
        </div>
    )
}