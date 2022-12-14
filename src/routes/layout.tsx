// ---Dependencies
import { component$, Slot } from '@builder.io/qwik';
// ---Components
import Header from '../components/header/header';
import Footer from '../components/footer/footer'

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
});
