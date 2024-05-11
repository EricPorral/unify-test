import s from './itemgrid.module.css';
import { infogrid } from '@/helpers/list';

export const Itemgrid = () => {
    return (
        <div className={s.itemgrid}>
            {infogrid.map(item=> (
            <>
            <div key={item.key} className={s.test}>
                <div  className={s.image}>
                    <img src={item.image} alt=""/>
                </div>
                <div className={s.text}>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>   
                </div>
            </div>
            </>
            ))}       
        </div>
    )
}