import { BenefitPhrases } from '@/helpers/list';
import { Benefits } from '../secondary/benefits/benefits';
import { Scroll } from '../secondary/scroll/scroll';
import { Solution } from '../secondary/solution/solution';
import s from './info.module.css';

export const Info = () => {
    return (
        <div className={s.info}>
            <section>
                <Scroll />
            </section>
            <section>
                <Solution />
            </section>
            <section>
            <Benefits image={BenefitPhrases[0].image} text={BenefitPhrases[0].text}/>
            </section>
        </div>
    )
}