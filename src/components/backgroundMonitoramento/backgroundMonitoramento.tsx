import { Button } from '../secondary/button/button';
import { backgroundType } from '@/types/backgroundType';
import s from './backgroundMonitoramento.module.css';

export const BgMonitoramento = ({ title, desc }: backgroundType) => {
    return (
        <div className={s.bg}>
                <div className={s.bgcontent}>
                    <div className={s.bgtext}>
                        <h1>{title}</h1>
                        <h2>{desc}</h2><br/>
                        <div className={s.button}>
                            <Button />
                        </div>
                    </div>
                    <div className={s.bgImage}>
                        <img src="banner-monitoramento.jpg" alt=""/>
                    </div>
                </div>
        </div>
    )
}