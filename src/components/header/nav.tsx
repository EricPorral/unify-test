"use client"

import Link from 'next/link';
import s from './nav.module.css';
import { useTheme } from '@/contexts/themecontext';
import { useState } from 'react';

export const Nav = () => {
    const themeCtx = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleThemeToggle = () => {
        if (themeCtx) {
            themeCtx.setTheme(themeCtx.theme === 'dark' ? 'light' : 'dark');
        }
    }

    return (
        <>
        <div className={s.nav}>
            <div className={s.logo}>
                <Link href="/"><img src="/unify.svg" alt=""/></Link>
            </div>
            <div className={s.menu}>
                <Link href="/sobre" className={s.link}>Sobre Nós</Link>
                <Link href="/monitoramento" className={s.link}>Soluções</Link>
                <Link href="/projeto-engenharia" className={s.link}>Projetos</Link>
                <Link href="/blog" className={s.link}>Blog</Link>
                <Link href="/contato" className={s.link}>Contato</Link>
            </div>
            <div className={s.svg}>
                <div className={s.svgimage} onClick={handleThemeToggle}>
                    <img src="/sol.svg" alt="" />
                </div>
                <div className={s.svgimage}>
                    <img src="/lupa.svg" alt=""/>
                </div>
            </div>
        </div>

        <div className={s.hidden}>
                <div className={s.menuhidden}>
                    <div className={s['navbar-logo']} onClick={toggleMenu}><img src='/menu-bar.svg' alt='Image logo' /></div>
                    <div className={`${s['navbar-links']} ${isOpen ? s.active : ''}`}>
                        <Link href="/sobre" className={s.link}>Sobre Nós</Link>
                        <Link href="/monitoramento" className={s.link}>Soluções</Link>
                        <Link href="/projeto-engenharia" className={s.link}>Projetos</Link>
                        <Link href="/blog" className={s.link}>Blog</Link>
                        <Link href="/contato" className={s.link}>Contato</Link>
                    </div>
                </div>
                <div className={s.logohidden}>
                    <Link href="/"><img src="/unify.svg" alt=""/></Link>
                </div>
                <div className={s.svghidden}>
                    <div className={s.svgimagehidden} onClick={handleThemeToggle}>
                        <img src="/sol.svg" alt="" />
                    </div>
                    <div className={s.svgimagehidden2}>
                        <img src="/lupa.svg" alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}