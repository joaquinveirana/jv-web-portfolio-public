'use client';
import * as React from 'react';
import Grow from '@mui/material/Grow';
import InfoIcon from '@mui/icons-material/InfoOutlined';

import { IconProps } from '@/app/props/IconProps';

export const MoreInfoIcon = (props: IconProps) => {
  return (
    <Grow in={true} timeout={props.growTimeout}>
      <div>
        <InfoIcon
          className="md:w-[24px] md:h-[24px] w-[38px] h-[38px] text-light-200 icon-effect-class"
          onClick={() => props.callback()}
        ></InfoIcon>
      </div>
    </Grow>
  );
};
