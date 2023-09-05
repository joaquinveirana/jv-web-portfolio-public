// Pages/Components
import Header from './pages/header/page';
// I18n lang
import { getDictionary, getLang } from '../i18n/i18n_functions';

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
          lightMode={false}
          imageLogoFilename={'/logo_jnvs_medium_white.svg'}
          imageLogoAlt='JNVS Logo'
          navItems={navItems}
          resumeLink={resume}
        ></Header>
        <div className='h-24 w-24'></div>
      </main>
    </>
  );
}
