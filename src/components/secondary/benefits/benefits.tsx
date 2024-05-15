import { BenefitType } from '@/types/benefitType';
import { Button } from '../button/button';
import { Check } from '../check/check';
import s from './benefits.module.css';

export const Benefits = ({ image, text }: BenefitType) => {
    return (
        <>
            <div className={s.benefits}>
                <div className={s.image}>
                    <img src={image} alt=""/>
                </div>
                <div className={s.text}>
                    <h1>{text}</h1>
                    <Check/>
                    <div className={s.button}>
                        <Button/>
                    </div>
                </div> 
            </div>
        </>
    )
}