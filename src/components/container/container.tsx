"use client"

import { useTheme } from '@/contexts/themecontext';
import s from './container.module.css';
import { ReactNode } from "react"

type Props = {
    children: ReactNode;
}

export const Container = ({ children }: Props) => {
    const themeCtx = useTheme();

    return (
        <div className={`${s.fullScreen} ${themeCtx?.theme === 'dark' ? `${s.bgBlack} ${s.textWhite}` : `${s.bgWhite} ${s.textBlack}`}`}>
            {children}
        </div>
    )
}