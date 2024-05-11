import { Nav } from '@/components/header/nav';
import s from './page.module.css';
import { Footer } from '@/components/foooter/footer';
import { Form } from '@/components/form/form';

const Page = () => {
  return (
    <div className={s.page}>
        <section className={s.header}>
            <Nav/>
        </section>
        <Form />
        <Footer/>
    </div>
  )
}

export default Page;