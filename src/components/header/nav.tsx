import Link from 'next/link';
import s from './nav.module.css';

export const Nav = () => {
    return (
        <div className={s.nav}>
            <div className={s.logo}>
                <img src="/unify.svg" alt=""/>
            </div>
            <div>
                <Link href="/sobre" className={s.link}>Sobre Nós</Link>
                <Link href="" className={s.link}>Soluções</Link>
                <Link href="" className={s.link}>Projetos</Link>
                <Link href="/contato" className={s.link}>Contato</Link>
            </div>
            <div className={s.svg}>
                <div className={s.svgimage}>
                    <img src="/sol.svg" alt=""/>
                </div>
                <div className={s.svgimage}>
                    <img src="/lupa.svg" alt=""/>
                </div>
            </div>
        </div>
    )
}