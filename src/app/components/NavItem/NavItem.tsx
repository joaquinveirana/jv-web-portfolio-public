'use client';
import * as React from 'react';
import Grow from '@mui/material/Grow';
import { NavItemProps } from '@/app/props/NavItemProps';

/* 
  --- Styles ---
*/
const navLinksClass = 'md:m-4 md:text-sm m-6 text-2xl text-light-200';

export const NavItem = (props: NavItemProps) => {
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
};
