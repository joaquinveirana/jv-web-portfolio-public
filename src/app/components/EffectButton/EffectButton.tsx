'use client';

import { EffectButtonProps } from '@/app/types/EffectButtonTypes';

export default function EffectButton(props: EffectButtonProps) {
  return (
    <div>
      <button
        onClick={() => props.callback()}
        className={`md:text-sm m-6 px-6 py-2 transition-all duration-300 ease-in-out border-solid border-2 border-cyan-terciary-color-600 text-light-primary-color-800 text-2xl hover:text-cyan-terciary-color-700`}
      >
        {props.text}
      </button>
    </div>
  );
}
