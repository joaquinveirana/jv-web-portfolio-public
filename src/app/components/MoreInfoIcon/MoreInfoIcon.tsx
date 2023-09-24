'use client';

import Grow from '@mui/material/Grow';
import InfoIcon from '@mui/icons-material/InfoOutlined';

import { IconProps } from '@/app/props/IconProps';

export default function MoreInfoIcon(props: IconProps) {
  return (
    <Grow in={true} timeout={props.growTimeout}>
      <div>
        <InfoIcon
          className='md:w-[24px] md:h-[24px] w-[32px] h-[32px] icon-class'
          onClick={() => props.callback()}
        ></InfoIcon>
      </div>
    </Grow>
  );
}
