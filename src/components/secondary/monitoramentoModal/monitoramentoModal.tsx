import { ModalType } from '@/types/modalType';
import s from './monitoramentoModal.module.css';

export const MonitoramentoModal = ({ color, image, title, desc1, desc2, desc3 }: ModalType) => {
    return (
        <div className={s.container} style={{ backgroundColor: `${color}`}}>
            <div className={s.modal}>
                <div>
                    <img src={image} alt=""/>
                </div>
                <div>
                    <h2>{title}</h2>
                    <p><span>•</span>{desc1}</p>
                    <p><span>•</span>{desc2}</p>
                    <p><span>•</span>{desc3}</p>
                </div>
            </div>
        </div>
    )
}