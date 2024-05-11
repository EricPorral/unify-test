import { About } from '@/helpers/list';
import s from './aboutitem.module.css';

export const Aboutitem = () => {
    return (
        <div className={s.about}>
            {About.map(item=> (
            <>
            <div key={item.key} className={s.aboutarea}>
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