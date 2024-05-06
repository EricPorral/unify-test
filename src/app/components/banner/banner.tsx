import s from './banner.module.css';

export const Banner = () => {
    return (
        <div className={s.banner}>
            <div className={s.list}>
                <div className={s.item}>
                    <img src='/banner-black.jpg' alt=''/>
                    <div className={s.content}>
                        <div className={s.text}>
                            <h1>Soluções IoT, Automação e Conectividade</h1>
                            <h2>Revolucione a forma como você monitora, controla e otimiza os recursos críticos do seu negócio</h2>
                        </div>
                        <div className={s.button}>
                            <button>SAIBA MAIS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}