import { ThemeProvider } from "@/contexts/themecontext";
import { Banner } from "../components/banner/banner";
import { Footer } from "../components/foooter/footer";
import { Form } from "../components/form/form";
import { Nav } from "../components/header/nav";
import { Info } from "../components/info/info";

import s from './page.module.css';
import { Container } from "@/components/container/container";

const Page = () => {
  return (
    <ThemeProvider>
      <Container>
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
      </Container>
    </ThemeProvider>
  )
}

export default Page;