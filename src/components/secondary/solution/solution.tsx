import { Button } from '../button/button';
import { Itemgrid } from '../itemgrid/itemgrid';
import s from './solution.module.css';

export const Solution = () => {
    return (
        <div className={s.solution}>
            <div className={s.text}>
                <h1>Soluções personalizadas<br/> para diversos segmentos</h1>
            </div>
            <Itemgrid/>
            <div className={s.button}>
            <Button />
            </div>
        </div>
    )
}