'use client';

import { EffectButtonProps } from '@/app/props/EffectButtonProps';
import Grow from '@mui/material/Grow';

/* 
  --- Styles ---
*/
const effectButtonClass =
  'md:text-sm m-6 px-6 py-2 border-solid border-2 border-cyan-600 text-light-800 text-2xl transition-all-eio-300 hover:text-cyan-700';

export default function EffectButton(props: EffectButtonProps) {
  return (
    <Grow in={true} timeout={props.growTimeout}>
      <div>
        <button onClick={() => props.callback()} className={effectButtonClass}>
          {props.text}
        </button>
      </div>
    </Grow>
  );
}
