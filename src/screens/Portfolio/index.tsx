import React from 'react'
import { Navigation } from '../Home/Navigation'
import { Banner } from '../Home/Banner'
import { PageTitle } from '@/components/page-title'
import Link from 'next/link'

import Image from 'next/image'
import { calculateYearsSince } from '@/utils/diff-years'
import { PageSummary } from '@/components/page-summary'

export const Portfolio = () => {
  const expTime = calculateYearsSince(new Date('01-01-2020'), new Date())
  return (
    <>
      <Navigation />

      <PageTitle title="Portfolio" />
      <PageSummary
        title="Produtos digitais,"
        description={`Durante os últimos ${expTime} anos, tive a honra de colaborar no
            desenvolvimento de produtos digitais, abrangendo uma diversidade de
            setores e áreas de atuação. Cada projeto representa a paixão pela
            inovação e a busca incessante pelo aprendizado e excelência.`}
      />
      <section className="overflow-hidden">
        <div className="mx-auto max-w-7xl w-full px-8 lg:px-24 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 text-center pb-12">
            {[...Array(9)].map((i, idx) => {
              return (
                <Link
                  key={Math.random() + idx}
                  href={'/articles'}
                  className="h-full"
                >
                  <div className="p-8 bg-brand-dark-1/5 scaling">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={
                          'https://www.birobirobiro.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzp6uwf2o%2Fimage%2Fupload%2Fv1693197667%2Fprojects%2Fwqrfwu6fsfmwn6foctf9.png&w=384&q=75'
                        }
                        alt=""
                        fill
                        className="absolute object-contain z-20"
                      />
                    </div>
                  </div>

                  <div className="w-full p-4">
                    <p className="text-brand-dark-3 text-sm lg:text-md tracking-widest uppercase font-light">
                      Dr Pet
                    </p>
                    {/* <p className="text-brand-dark-1 text-xs lg:text-md">
                      Viziaasdasds
                    </p> */}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Banner title="Veja também" />
    </>
  )
}
