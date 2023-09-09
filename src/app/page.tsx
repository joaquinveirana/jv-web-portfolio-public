// Pages/Components
import Header from './pages/header/page';
// I18n lang
import { getDictionary, getLang } from '../i18n/i18n_functions';
import { HeaderLogo } from './types/HeaderTypes';
import About from './pages/about/page';
import Experience from './pages/experience/page';
import Landing from './pages/landing/page';
const headerLogo: HeaderLogo = {
  imageLogo: '/logo_jv_bold_cyan_white_sq.svg',
  imageLogoSecondary: '/logo_jv_bold_cyan_sq.svg',
  imageLogoAlt: 'JNVS Logo',
};

export default async function Main() {
  const lang = await getLang();
  const dict = await getDictionary(lang);
  const navItems = dict.navItems;
  const resume = dict.resume;

  return (
    <>
      <main className='flex min-h-screen flex-col items-center'>
        <Header
          lang={lang}
          logo={headerLogo}
          navItems={navItems}
          resume={resume}
        ></Header>
        <Landing lang={lang}></Landing>
        <About></About>
        <Experience></Experience>
      </main>
    </>
  );
}
