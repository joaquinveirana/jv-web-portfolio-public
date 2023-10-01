'use client';

import { GrowOnScrollProps } from '@/app/props/GrowOnScrollProps';
import Grow from '@mui/material/Grow';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useEffect, useRef, useState } from 'react';

export const GrowOnScroll = (props: GrowOnScrollProps) => {
  /* 
    --- React Hooks 1 ---
  */
  const ref = useRef<HTMLElement>(null);
  const [hasAlreadyGrown, setHasAlreadyGrown] = useState<boolean>(false);
  const [elementYPosition, setElementYPosition] = useState<number>(0);
  useEffect(() => {
    if (ref.current?.offsetTop) setElementYPosition(ref.current?.offsetTop);
  });

  /* 
    --- Aux Hooks ---
  */
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: elementYPosition / 5 + props.extraScrollThreshold,
    target: props.window ? props.window() : undefined,
  });

  /* 
    --- React Hooks 2 ---
  */
  useEffect(() => {
    if (props.growOneTime && trigger) setHasAlreadyGrown(true);
  }, [trigger]);

  return (
    <Grow
      ref={ref}
      appear={true}
      in={trigger || hasAlreadyGrown}
      timeout={props.growTimeout}
    >
      {props.children}
    </Grow>
  );
};
