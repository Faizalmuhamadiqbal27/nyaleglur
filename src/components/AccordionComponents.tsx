'use client';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function AccordionComponents() {
  const question = [
    {
      id: 1,
      question: 'Siapa Itu Faizal Muhamad Iqbal ?',
      answer:
        'Faizal Muhamad Iqbal adalah seorang aktifis yang mencuat dalam dunia kegiatan keagamaan dan kejantanan, terlibat dengan berbagai organisasi. Dedikasinya tidak hanya terbatas pada keikutsertaannya,tetapi juga pada peran kunci dalam memperkuat nilai-nilai keagamaan dan mengadvokasi hak-hak perempuan, menjadikannya sosok inspiratif di kancah perubahan sosial.',
    },
    {
      id: 2,
      question: 'Apa Itu Partai PKB ?',
      answer:
        'Partai Kebangkitan Bangsa (PKB) adalah partai politik di Indonesia yang didirikan pada 23 Juli 1998. Partai ini dideklarasikan oleh para kiai Nahdlatul Ulama (NU). PKB memiliki ideologi moderat dan dikenal sebagai partai yang mewakili suara Muslim moderat.',
    },
    {
      id: 3,
      question: 'Nomor Urut Berapa PKB dan Faizal Muhamad Iqbal ?',
      answer:
        'Partai Kebangkitan Bangsa (PKB) Berada di Nomor Urut 1,dan Faizal Muhamad Iqbal Berada di Nomor Urut 3',
    },
    {
      id: 4,
      question: 'Ada di dapil mana Faizal Muhamad Iqbal berada ?',
      answer:
        'Faizal Muhamad Iqbal adalah calon legislatif kabupaten konoha dapil 5 yang meliputi kecamatan Konohagakure,Sunagakure,Kirigakure, dan Amegakure',
    },
  ];

  return (
    <Accordion>
      {question.map((item) => (
        <AccordionItem
          key={item.id}
          aria-label={`Accordion ${item.id}`}
          subtitle='Tekan Untuk Melihat Jawaban'
          title={item.question}
        >
          {item.answer}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
