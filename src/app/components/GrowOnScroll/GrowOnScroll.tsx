'use client';

import { GrowOnScrollProps } from '@/app/props/GrowOnScrollProps';
import Grow from '@mui/material/Grow';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useEffect, useState } from 'react';

export default function GrowOnScroll(props: GrowOnScrollProps) {
  /* 
    --- Aux Variables ---
  */
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: props.scrollThreshold,
    target: props.window ? props.window() : undefined,
  });

  /* 
    --- React Hooks ---
  */
  const [hasAlreadyGrown, setHasAlreadyGrown] = useState<boolean>(false);

  useEffect(() => {
    if (props.growOneTime && trigger) setHasAlreadyGrown(true);
  }, [trigger]);

  return (
    <Grow
      appear={true}
      in={trigger || hasAlreadyGrown}
      timeout={props.growTimeout}
    >
      <div>{props.children}</div>
    </Grow>
  );
}
