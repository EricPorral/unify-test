import { Button } from '../button/button';
import { Check } from '../check/check';
import s from './benefits.module.css';

export const Benefits = () => {
    return (
        <>
            <div className={s.benefits}>
                <div className={s.image}>
                    <img src="/graph.png" alt=""/>
                </div>
                <div className={s.text}>
                    <h1>Projetos de automação e monitoramento com soluções IoT customizáveis ao seu negócio</h1>
                    <Check/>
                    <div className={s.button}>
                        <Button/>
                    </div>
                </div> 
            </div>
            <div className={s.line}></div>
        </>
    )
}