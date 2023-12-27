import React from 'react'
import { Navigation } from '../Home/Navigation'
import { Posts } from '../Home/Posts'
import { Hero } from '../Home/Hero'
import { Banner } from '../Home/Banner'
import { Title } from '../Home/Title'
import { PageTitle } from '@/components/page-title'
import Link from 'next/link'

import Article from '@/assets/article.jpg'
import Mug from '@/assets/mug.png'
import CasesImage from '@/assets/setup2.webp'
import Setup from '@/assets/setup.webp'
import Ideation from '@/assets/ideation.jpg'
import Image from 'next/image'
import { calculateYearsSince } from '@/utils/diff-years'

export const Cases = () => {
  const expTime = calculateYearsSince(new Date('01-01-2020'), new Date())
  return (
    <>
      <Navigation />

      <PageTitle
        title="Portfolio"
        description="Projetos que desenvolvi ao longo da minha carreira."
      />
      <section
        id="explain"
        className="text-center py-12 lg:py-24 max-w-2xl mx-auto"
      >
        <div>
          <p className="text-brand-dark-3 text-lg lg:text-3xl tracking-widest uppercase font-medium mb-6 lg:mb-12">
            Experiência em Produtos Digitais,
          </p>
          <p className="text-brand-dark-1/80 text-md lg:text-lg font-medium leading-loose lg:leading-normal">
            Durante os últimos {expTime} anos, tive a honra de colaborar no
            desenvolvimento de produtos digitais, abrangendo uma diversidade de
            setores e áreas de atuação. Cada projeto representa a paixão pela
            inovação e a busca incessante pelo aprendizado e excelência.
          </p>
        </div>
      </section>
      <section className="overflow-hidden">
        <div className="mx-auto max-w-7xl w-full px-8 lg:px-24 pb-12">
          {/* <h2 className="pb-4 text-2xl font-black text-brand-brown-3 font-display">
            ---
          </h2> */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1 text-center pb-12">
            {[...Array(9)].map((i) => {
              return (
                <Link
                  key={Math.random()}
                  href={'/articles'}
                  className="h-full scaling"
                >
                  <div className="p-8 bg-brand-dark-1/5">
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
                    <p className="text-brand-dark-3 text-sm lg:text-md tracking-widest uppercase font-medium">
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

      {/* <Banner title="Veja também" /> */}
    </>
  )
}
