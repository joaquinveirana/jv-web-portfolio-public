// Pages/Components
import Header from './pages/header/page';
// I18n lang
import { getDictionary, getLang } from '../i18n/i18n_functions';
import About from './pages/about/page';
import Experience from './pages/experience/page';
import Landing from './pages/landing/page';

const headerLogo: any = {
  imageLogo: '/logo_jv_bold_cyan_white_sq.svg',
  imageLogoSecondary: '/logo_jv_bold_cyan_sq.svg',
  altLogo: 'JV Logo',
};

export default async function Main() {
  const lang = await getLang();
  const dict = await getDictionary(lang);

  return (
    <>
      <main className='flex min-h-screen flex-col items-center'>
        <Header logo={headerLogo} textContent={dict.header}></Header>
        <Landing textContent={dict.landing}></Landing>
        <About></About>
        <Experience></Experience>
      </main>
    </>
  );
}
