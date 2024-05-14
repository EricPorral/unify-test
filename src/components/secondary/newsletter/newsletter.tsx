import s from './newsletter.module.css';

export const Newsletter = () => {
    return (
        <div className={s.container}>
            <div className={s.text}>
                <h1>Assine a nossa newsletter</h1>
                <p>Assine agoraa newsletter da Unify e mantenha-se atualizado com conteúdos exclusivos sobre engenharia, gestão, tecnologia e inovação. Esteja à frente do seu tempo e aproveite os melhores insights para impulsionar o seu negócio</p>
            </div>
            <div className={s.form}>
                <div className={s.flex}>
                    <form className={s.forminput}>
                        <p>Nome*</p>
                        <input 
                        type='text'
                        name='nome'
                        placeholder='Preencha com seu nome completo'
                        />
                    </form>
                    <form className={s.forminput}>
                        <p>E-mail*</p>
                        <input 
                        type='email'
                        name='E-mail'
                        placeholder='email@exemplo.com'
                        />
                    </form>
                </div>
                <button>ASSINAR A NEWSLETTER</button>
            </div>
        </div>
    )
}