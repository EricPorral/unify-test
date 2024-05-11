import { CheckType } from '@/types/checkType';
import s from './check.module.css';
import { Checkphrases } from '@/helpers/list';

export const Check = () => {
    return (
        <>
        {Checkphrases.map(item => (
            <div className={s.check}>
                <img src="/checkmark.svg" alt=""/>
                <p>{item.desc}</p>
            </div>
        ))}
        </>
    )
}