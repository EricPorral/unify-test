import s from './blogGrid.module.css';
import { BlogGrid } from '@/helpers/list';

export const BlogGridItem = () => {
    return (
        <div className={s.itemgrid}>
            {BlogGrid.map(item=> (
            <>
            <div key={item.key} className={s.test}>
                <div  className={s.image}>
                    <img src={item.image} alt=""/>
                </div>
                <div className={s.text}>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>   
                </div>
                <div className={s.blogcta}>
                    <div className={s.button}>
                        <button className={s.default}>
                            <img src="/read.svg" alt="svg"/> Ler mais
                        </button>
                    </div>
                    <div className={s.button}>
                        <button className={s.outline}>
                            <img src="/share.svg" alt="svg"/> 
                            Compartilhar
                        </button>
                    </div>
                </div>
            </div>
            </>
            ))}       
        </div>
    )
}