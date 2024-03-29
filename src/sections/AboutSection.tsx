'use client';

import NextImage from 'next/image';
import { Image } from '@nextui-org/react';
import ButtonLinkComponent from '@/components/ButtonLinkComponent';
import { ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';

type Props = {};

export default function AboutSection({}: Props) {
  return (
    <section className='p-container py-20' id='About'>
      <div className='flex flex-col items-stretch justify-center gap-14 lg:flex-row lg:items-center lg:justify-between'>
        <motion.div
          className='lg:max-w-xl xl:max-w-2xl'
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className='text-hero-title text-primary-text'>
            Siapa Itu Faizal Muhamad Iqbal?
          </h1>
          <p className='text-primary-text mt-5 text-medium'>
            Faizal Muhamad Iqbal adalah seorang aktifis yang mencuat dalam dunia
            kegiatan keagamaan dan kejantanan, terlibat dengan berbagai
            organisasi. Dedikasinya tidak hanya terbatas pada keikutsertaannya,
            tetapi juga pada peran kunci dalam memperkuat nilai-nilai keagamaan
            dan mengadvokasi hak-hak lelaki, menjadikannya sosok inspiratif di
            kancah perubahan sosial.
          </p>
          <ButtonLinkComponent
            caption='Daftar Relawan'
            to='Contact'
            Icon={ClipboardCheck}
            offset={-200}
          />
        </motion.div>
        <div className='relative'>
          <div className='flex items-center justify-center rounded-2xl bg-gradient-to-b from-bg_start to-bg_end'>
            <Image
              src='/image-1.png'
              alt='Azizah Mukarromah'
              className='z-0 h-[520px] w-[450px] object-cover sm:h-[550px]'
              as={NextImage}
              width={450}
              height={550}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
