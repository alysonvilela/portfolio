import React from 'react'
import { Navigation } from '../Home/Navigation'
import { Emphasis } from '../../components/emphasis'
import { PageTitle } from '@/components/page-title'

import Image from 'next/image'
import { PageSummary } from '@/components/page-summary'
import { useProductsQuery } from '@/graphql/generated/index.generated'
import { truncate } from '@/utils/truncate'

export const Products = () => {
  const { data } = useProductsQuery()

  return (
    <>
      <Navigation />
      <PageTitle title="Setup" />
      <PageSummary
        title="Meu setup,"
        description={`Sempre recebo muitas mensagens perguntando sobre itens do meu setup e quais equipamentos utilizo em meu dia a dia. Então, resolvi listar tudo aqui em um só lugar. Conforme for atualizando meu setup, atualizarei a lista abaixo.`}
      />
      <section className="overflow-hidden">
        <div className="mx-auto max-w-7xl w-full px-8 lg:px-24 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 text-center pb-12">
            {data?.products.map(({ content, tags, link, product_image }) => {
              return (
                <a key={link} href={link} className="h-full">
                  <div className="p-4 bg-brand-brown-1/5 scaling">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={product_image.url}
                        alt=""
                        fill
                        className="absolute object-contain z-20"
                      />
                    </div>
                  </div>

                  <div className="w-full p-4">
                    <p className="text-brand-dark-3 text-sm lg:text-md tracking-widest uppercase font-light">
                      {truncate(content.title, 12)}
                      <span className="text-brand-dark-1 text-xs">
                        {' '}
                        | {tags[0]}
                      </span>
                    </p>
                    {/* <p className="text-brand-dark-1 text-xs lg:text-md">
                      Viziaasdasds
                    </p> */}
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <Emphasis title="Veja também" />
    </>
  )
}
