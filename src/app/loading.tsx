'use client';
import * as React from 'react';
import Image from 'next/image';
import Grow from '@mui/material/Grow';

export default async function Loading() {
  return (
    <main className="w-full h-screen flex-col-centered bg-dark-300">
      <Grow appear={true} in={true} timeout={40}>
        <Image
          src="/my_logos/logo_jv_bold_cyan_white_sq.svg"
          alt="JV Logo"
          width={200}
          height={200}
          priority
        />
      </Grow>
    </main>
  );
}
