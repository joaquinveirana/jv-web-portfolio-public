// I18n dictionary getter
import { getDictionary, getLang } from '@/i18n/i18n_functions';

type HeaderProps = {
  lang: string;
};

export default function Header(props: HeaderProps) {
  console.log(props.lang);
  return (
    <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
      Header:
    </div>
  );
}
