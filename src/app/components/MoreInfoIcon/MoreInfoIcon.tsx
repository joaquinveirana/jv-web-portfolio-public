'use client';

import Grow from '@mui/material/Grow';
import InfoIcon from '@mui/icons-material/InfoOutlined';

import { IconProps } from '@/app/props/IconProps';

export const MoreInfoIcon = (props: IconProps) => {
  return (
    <Grow in={true} timeout={props.growTimeout}>
      <div>
        <InfoIcon
          className='md:w-[24px] md:h-[24px] w-[32px] h-[32px] icon-effect-class'
          onClick={() => props.callback()}
        ></InfoIcon>
      </div>
    </Grow>
  );
};
