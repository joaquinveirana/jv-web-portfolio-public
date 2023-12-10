'use client';

import { EffectButtonProps } from '@/app/props/EffectButtonProps';
import Grow from '@mui/material/Grow';

/* 
  --- Styles ---
*/
const effectButtonClass =
  'md:text-sm m-6 px-6 py-2 border-solid border-2 text-light-800 text-2xl';
const enabledEffectButtonClass =
  'border-cyan-600 transition-all-eio-300 hover:text-cyan-700';
const disabledEffectButtonClass = 'cursor-auto opacity-50';

export const EffectButton = (props: EffectButtonProps) => {
  return (
    <Grow in={true} timeout={props.growTimeout}>
      <div>
        <button
          onClick={() => {
            if (!props.disabled) props.callback();
          }}
          className={`${effectButtonClass} ${
            props.disabled
              ? disabledEffectButtonClass
              : enabledEffectButtonClass
          }`}
        >
          {props.text}
        </button>
      </div>
    </Grow>
  );
};
