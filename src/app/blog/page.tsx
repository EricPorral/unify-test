import { Nav } from '@/components/header/nav';
import s from './page.module.css';
import { Bg } from '@/components/background/background';
import { Background } from '@/helpers/list';
import { Footer } from '@/components/foooter/footer';

const Page = () => {
  return (
    <div className={s.page}>
        <section className={s.header}>
            <Nav />
        </section>
        <Bg title={Background[1].title} desc={Background[1].desc} />
        <Footer />
    </div>
  )
}
export default Page;