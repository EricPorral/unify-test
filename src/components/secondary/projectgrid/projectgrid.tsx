import s from './projectgrid.module.css';
import { PgGrid } from '@/helpers/list';

export const ProjectGrid = () => {
    return (
        <div className={s.itemgrid}>
            {PgGrid.map(item=> (
            <>
            <div key={item.key} className={s.test}>
                <div  className={s.image}>
                    <img src={item.image} alt=""/>
                </div>
                <div className={s.text}>
                    <h1>{item.title}</h1>
                    <p><span>•</span>{item.phrase1}</p>
                    <p><span>•</span>{item.phrase2}</p>      
                </div>
            </div>
            </>
            ))}       
        </div>
    )
}