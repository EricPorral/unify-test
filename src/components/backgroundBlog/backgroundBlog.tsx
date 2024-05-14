import s from './backgroundBlog.module.css';

export const BgBlog= () => {
    return (
        <div className={s.bgimage}>
            <div className={s.bgtext}>
                <h1>Blog</h1>
                <p>Acompanhe os nossos conteúdos sobre engenharia, gestão e inovação</p>
            </div>
        </div>
    )
}