import s from './form.module.css';

export const Form = () => {
    return (
        <div className={s.form}>
            <div className={s.text}>
                <h1>Temos o compromisso com o seu negócio</h1>
                <p>Na unify, oferecemos a chave para o um futuro mais eficiente e conectado. Nossa abordagem é muito mais do que versatilidade, precisão e rapidez, é a garantia
                    de que você terá a melhor solução personalizada para o seu negócio, não importa o desafio. 
                </p>
                <p>Imagine ter o controle total da sua empresa, sem comprometer a precisão, eficiência e versatilidade. O Unify Plus é a resposta para todas as suas 
                    necessidades de telemetria e controle. Nossas soluções IoT são projetadas para levar sua empresa a novos patamares de eficiência, economia e desempenho.
                </p>
                <p>Entre em contato conosco hoje e descubra como podemos transformar seus sonhos em realidade com o Unify Plus. O sucesso do seu negócio é nossa prioridade 
                    absoluta. Preencha o formulário e descubra como vamos revolucionar a forma como você monitora, controla e otimiza os recursos críticos do seu negócio!
                </p>
            </div>
            <div className={s.textform}>
                <h2>Preencha o formulário abaixo e entre em contato conosco!</h2>
                <div className={s.formbackground}>
                    <div className={s.formarea}>
                        <form className={s.formulario}>
                            <label>Nome Completo*</label>
                            <input 
                                type='text'
                                name='nome'
                                placeholder='Preencha com seu nome completo'
                            />
                        </form>
                        <form className={s.formulario}>
                            <p>E-mail corporativo*</p>
                            <input 
                                type='email'
                                name='email'
                                placeholder='email@empresa.com'
                            />
                        </form>
                        <form className={s.formulario}>
                            <p>Telefone*</p>
                            <input 
                                type='number'
                                name='number'
                                placeholder='(XX) XXXXX-XXXX'
                            />
                        </form>
                        <form className={s.formulario}>
                            <p>Estado*</p>
                            <input 
                                type='text'
                                name='estado'
                                placeholder='Selecione o seu estado'
                            />
                        </form>
                        <form className={s.formulario}>
                            <p>Cidade*</p>
                            <input 
                                type='text'
                                name='cidade'
                                placeholder='Preencha com a sua cidade'
                            />
                        </form>
                        <form className={s.formulario}>
                            <p>Segmento*</p>
                            <input 
                                type='text'
                                name='segmento'
                                placeholder='Preencha com o seu segmento de atuação'
                            />
                        </form>
                        <form className={s.formulario}>
                            <p>Empresa*</p>
                            <input 
                                type='text'
                                name='empresa'
                                placeholder='Preencha com o nome da sua empresa'
                            />
                        </form>
                        <button>ENVIAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}