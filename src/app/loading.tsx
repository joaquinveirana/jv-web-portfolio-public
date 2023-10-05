import Image from 'next/image';
import { getDictionary, getLang } from '@/i18n/i18n_functions';

export default async function Loading() {
  const lang = await getLang();
  const dict = await getDictionary(lang);

  return (
    <main className='w-full h-screen flex-col-centered bg-dark-300'>
      <Image
        src='/my_logos/logo_jv_bold_cyan_white_sq.svg'
        alt='JV Logo'
        width={200}
        height={200}
        priority
      />
      <div className='pt-8 subsubtitle-class'>{dict.loading}</div>
    </main>
  );
}
