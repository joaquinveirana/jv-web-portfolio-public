'use client';

import Grow from '@mui/material/Grow';
import { NavItemProps } from '@/app/props/NavItemProps';

/* 
  --- Styles ---
*/
const navLinksClass =
  'md:m-4 md:text-sm m-6 text-2xl text-light-primary-color-700';

export default function NavItem(props: NavItemProps) {
  return (
    <Grow in={true} timeout={props.growTimeout}>
      <div>
        <li className={`${navLinksClass} hover-cyan-text`}>
          <a
            href={props.navItem.itemLink}
            onClick={props.callback(props.navItem.itemId)}
          >
            {props.navItem.itemName}
          </a>
        </li>
      </div>
    </Grow>
  );
}
