import s from './blogPages.module.css';

export const BlogPages = () => {
    return (
        <div className={s.container}>
                <div className={s.arrow}>
                    <img src="/arrow-left.svg"  alt="arrow svg"/>
                </div>
                <div className={s.boxnumber}>
                    <span>1</span>
                </div>
                <div className={s.boxnumber}>
                    <span>2</span>
                </div>
                <div className={s.boxnumber}>
                    <span>3</span>
                </div>
                <div className={s.boxnumber}>
                    <span>...</span>
                </div>
                <div className={s.boxnumber}>
                    <span>15</span>
                </div>
                <div className={s.arrow}>
                    <img src="/arrow-right.svg"  alt="arrow svg"/>
                </div>
        </div>
    )
}