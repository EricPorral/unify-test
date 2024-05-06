import { Banner } from "./components/banner/banner";
import { Footer } from "./components/foooter/footer";
import { Form } from "./components/form/form";
import { Nav } from "./components/header/nav";
import { Info } from "./components/info/info";

import s from './page.module.css';

const Page = () => {
  return (
    <main>
      <section>
        <header className={s.header}>
          <Nav />
        </header>
        <Banner />
      </section>
      <section>
        <Info />
      </section>
      <section>
        <Form />
      </section>
      <Footer />
    </main>
  )
}

export default Page;