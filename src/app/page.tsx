// Pages/Components
import Header from './pages/Header/page';
// I18n lang
import { getDictionary, getLang } from '../i18n/i18n_functions';
import { Landing } from './pages/Landing/page';
import { SocialsBar } from './components/SocialsBar/SocialsBar';
import { About } from './pages/About/page';
import { Experience } from './pages/Experience/page';
import { LogoType } from './props/HeaderProps';
import { Site } from './props/SocialsBarProps';
import { Projects } from './pages/Projects/page';

const headerLogo: LogoType = {
  imageLogo: '/my_logos/logo_jv_bold_cyan_white_sq.svg',
  imageLogoSecondary: '/my_logos/logo_jv_bold_cyan_sq.svg',
  altLogo: 'JV Logo',
};

const otherSites: Site[] = [
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/joaquin-veirana/',
  },
  {
    name: 'github',
    link: 'https://github.com/joaquinveirana',
  },
  {
    name: 'gmail',
    link: 'mailto:joaquin.veirana@gmail.com',
  },
  {
    name: 'credly',
    link: 'https://www.credly.com/users/joaquin-veirana/badges?sort=-state_updated_at&page=1',
  },
];

export default async function Main() {
  const lang = await getLang();
  const dict = await getDictionary(lang);

  return (
    <>
      <main className='flex-col-centered min-h-screen w-full'>
        <Header logo={headerLogo} textContent={dict.header}></Header>
        <Landing textContent={dict.landing}></Landing>
        <section className='main-section-class'>
          <About textContent={dict.about}></About>
          <Experience textContent={dict.experience}></Experience>
          <Projects textContent={dict.projects}></Projects>
          <SocialsBar growTimeout={600} sites={otherSites}></SocialsBar>
        </section>
      </main>
    </>
  );
}
