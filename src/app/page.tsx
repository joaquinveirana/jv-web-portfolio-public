// Pages/Components
import Header from './pages/header/page';
// I18n lang
import { getLang } from '../i18n/i18n_functions';

export default async function Main() {
  const lang = await getLang();
  return (
    <>
      <main className='flex min-h-screen flex-col items-center'>
        {/* {page.products.cart} */}
        <Header lang={lang}></Header>
      </main>
    </>
  );
}
