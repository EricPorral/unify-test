import { Button } from '../secondary/button/button';
import { backgroundType } from '@/types/backgroundType';
import s from './background.module.css';

export const Bg = ({ title, desc, desc1, desc2 }: backgroundType) => {
    return (
        <div className={s.bg}>
            <div className={s.bgarea}>
                <div className={s.bgimage}>
                    <div className={s.bgcontent}>
                        <div className={s.bgtext}>
                            <h1>{title}</h1>
                            <h2>{desc}</h2><br />
                            <h2>{desc1}</h2><br />
                            <h2>{desc2}</h2>
                            <div className={s.button}>
                                <Button />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}