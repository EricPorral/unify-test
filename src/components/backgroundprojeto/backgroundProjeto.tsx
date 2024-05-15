import { Button } from '../secondary/button/button';
import s from './backgroundProjeto.module.css';

export const BgProjeto = () => {
    return (
        <div className={s.bgimage}>
            <div className={s.bgtext}>
                <h1>Projetos de engenharia</h1>
                <p>Soluções completas de engenharia para projetos de CFTV, cabeamento estruturado e sonorização!</p>
                <Button />
            </div>
        </div>
    )
}