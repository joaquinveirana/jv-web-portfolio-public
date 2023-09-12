'use client';

import Grow from '@mui/material/Grow';
import InfoIcon from '@mui/icons-material/InfoOutlined';

import { MoreInfoIconProps } from '@/app/props/MoreInfoIconProps';

/* 
  --- Styles ---
*/
const iconSxStyle = {
  color: '#ffffff',
  transition: '500ms',
  fontSize: '32px',
  '@media (min-width: 768px)': {
    fontSize: '20px',
  },
  '&:hover': { color: '#34bbff', cursor: 'pointer' },
};

export default function MoreInfoIcon(props: MoreInfoIconProps) {
  return (
    <Grow in={true} timeout={props.growTimeout}>
      <div>
        <InfoIcon onClick={() => props.callback()} sx={iconSxStyle}></InfoIcon>
      </div>
    </Grow>
  );
}
