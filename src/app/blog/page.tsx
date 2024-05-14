import { Nav } from '@/components/header/nav';
import { Footer } from '@/components/foooter/footer';
import { BgBlog } from '@/components/backgroundBlog/backgroundBlog';
import { BlogGridItem } from '@/components/secondary/blogGrid/blogGrid';
import { BlogPages } from '@/components/secondary/blogPages/blogPages';

import s from './page.module.css';
import { Newsletter } from '@/components/secondary/newsletter/newsletter';

const Page = () => {
  return (
    <div className={s.page}>
        <section className={s.header}>
          <Nav />
        </section>
        <BgBlog />
        <section>
          <BlogGridItem />
          <BlogPages />
        </section>
        <Newsletter />
        <Footer />
    </div>
  )
}
export default Page;