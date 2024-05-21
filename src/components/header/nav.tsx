"use client"

import Link from 'next/link';
import s from './nav.module.css';
import { useTheme } from '@/contexts/themecontext';

export const Nav = () => {
    const themeCtx = useTheme();
    
    const handleThemeToggle = () => {
        if(themeCtx) {
            themeCtx.setTheme(themeCtx.theme === 'dark' ? 'light' : 'dark');
        }
    }

    return (
        <div className={s.nav}>
            <div className={s.logo}>
                <img src="/unify.svg" alt=""/>
            </div>
            <div>
                <Link href="/sobre" className={s.link}>Sobre Nós</Link>
                <Link href="/monitoramento" className={s.link}>Soluções</Link>
                <Link href="/projeto-engenharia" className={s.link}>Projetos</Link>
                <Link href="/blog" className={s.link}>Blog</Link>
                <Link href="/contato" className={s.link}>Contato</Link>
            </div>
            <div className={s.svg}>
                <div className={s.svgimage} onClick={handleThemeToggle}>
                    <img src="/sol.svg" alt=""/>
                </div>
                <div className={s.svgimage}>
                    <img src="/lupa.svg" alt=""/>
                </div>
            </div>
        </div>
    )
}