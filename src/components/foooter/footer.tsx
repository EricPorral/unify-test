import Link from 'next/link';
import s from './footer.module.css';

export const Footer = () => {
    return (
        <div className={s.footerbackground}>
            <div className={s.footer}>
                <div className={s.image}>
                    <img src="unify.svg" alt=""/>
                </div>
                <div className={s.nav}>
                    <Link href="/sobre" className={s.link}>Sobre Nós</Link>
                    <Link href="" className={s.link}>Projetos de engenharia</Link>
                    <Link href="" className={s.link}>Monitoramento e controle</Link>
                    <Link href="" className={s.link}>Projetos</Link>
                    <Link href="/contato" className={s.link}>Contato</Link>
                </div>
                <div></div>
                <div className={s.social}>
                    <div className={s.flex}>
                        <div className={s.circle}>
                            <img src="/instagram.svg" alt=""/>
                        </div>
                        <div className={s.circle}>
                            <img src="linkedin.svg" alt=""/>
                        </div>
                    </div>
                    <div className={s.policy}>
                        <p>Política de privacidade</p>
                    </div>
                </div>
            </div>
            <div className={s.line} style={{ marginTop: '60px', marginBottom: '60px'}}></div>
            <div className={s.copyright}>Unify - Engenharia & Software | 2024</div>
        </div>
    )
}