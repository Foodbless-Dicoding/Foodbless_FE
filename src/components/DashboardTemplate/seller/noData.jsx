"use client";

import { HardDrive } from '@phosphor-icons/react';
import React from 'react';

const NoDataCard = () => {
  return (
    <div className="min-h-60 w-full flex flex-col bg-fbWhite border shadow-sm rounded-xl ">
      <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
      <HardDrive className="text-primaryGreen" size={48} weight="bold" />
        <p className="mt-2 text-sm text-center font-semibold text-primaryGreen dark:text-neutral-300">
          Tidak ada barang yang dijual. Silahkan tambahkan barang terlebih dahulu.
        </p>
      </div>
    </div>
  );
};

export default NoDataCard;
