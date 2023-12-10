// Pages/Components
import Header from './pages/Header/page';
// I18n lang
import { getDictionary, getLang } from '../i18n/i18n_functions';
import { Landing } from '@/app/pages/Landing/page';
import { SocialsBar } from '@/app/components/SocialsBar/SocialsBar';
import { About } from '@/app/pages/About/page';
import { Experience } from '@/app/pages/Experience/page';
import { LogoType } from '@/app/props/HeaderProps';
import { Projects } from '@/app/pages/Projects/page';
import { Contact } from '@/app/pages/Contact/page';
import { getResumeStorageURL } from './lib/firebase/firebase';

const headerLogo: LogoType = {
  imageLogo: '/my_logos/jv_logo_128.png',
  imageLogoSecondary: '/my_logos/jv_logo_cyan_128.png',
  altLogo: 'JV Logo',
};

const loadResumeLink = async (dict: { [key: string]: any }) => {
  const responseURL = await getResumeStorageURL();
  if (responseURL) dict['header']['resume']['itemLink'] = responseURL;
};

export default async function Main() {
  const lang = await getLang();
  const dict = await getDictionary(lang);
  await loadResumeLink(dict);

  return (
    <>
      <main className='flex-col-centered min-h-screen w-full'>
        <Header logo={headerLogo} textContent={dict.header}></Header>
        <Landing textContent={dict.landing}></Landing>
        <section className='main-section-class'>
          <About textContent={dict.about}></About>
          <Experience textContent={dict.experience}></Experience>
          <Projects textContent={dict.projects}></Projects>
          <Contact textContent={dict.contact}></Contact>
          <SocialsBar growTimeout={1000} sites={dict.socials}></SocialsBar>
        </section>
      </main>
    </>
  );
}
