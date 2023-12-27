import { Button } from '@/components/ui/button'
import { Locale, usePersonalsQuery } from '@/graphql/generated/index.generated'
import Image from 'next/image'
import Article from '@/assets/article.jpg'
import Mug from '@/assets/mug.png'
import Cases from '@/assets/setup2.webp'
import Setup from '@/assets/setup.webp'
import Ideation from '@/assets/ideation.jpg'
import { Title } from '../Title'

export const Banner = () => {
  // const { data } = usePersonalsQuery({
  //   variables: {
  //     locales: [Locale.PtBr, Locale.En],
  //   },
  // })
  return (
    <>
      <section className="overflow-hidden">
        <section className="pb-8 lg:pb-20 mx-auto max-w-7xl items-center border-y-0">
          <div className="relative aspect-[10/15] md:aspect-[16/7]">
            <Image
              src={Mug}
              alt=""
              fill
              className="absolute object-cover opacity-[3%]"
            />
            <div className="absolute bg-brand-accent-rose/10 z-10 w-full h-full px-8 lg:px-24 py-12">
              <h2 className="pb-4 text-2xl font-black text-brand-brown-3 font-display">
                Meus drops
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 h-full tracking-widest uppercase font-medium text-center text-white pb-12">
                <div className="relative h-full scaling">
                  <Image
                    src={Article}
                    alt=""
                    fill
                    className="absolute object-cover"
                  />
                  <div className="z-10 absolute w-full h-full bg-brand-brown-3/30 p-4 flex justify-center items-end text-xs lg:text-md">
                    <p>Artigos</p>
                  </div>
                </div>
                <div className="relative h-full scaling">
                  <Image
                    src={Cases}
                    alt=""
                    fill
                    className="absolute object-cover"
                  />
                  <div className="z-10 absolute w-full h-full bg-brand-brown-3/30 p-4 flex justify-center items-end text-xs lg:text-md">
                    <p>Cases</p>
                  </div>
                </div>
                <div className="relative h-full scaling">
                  <Image
                    src={Setup}
                    alt=""
                    fill
                    className="absolute object-cover"
                  />
                  <div className="z-10 absolute w-full h-full bg-brand-brown-3/30 p-4 flex justify-center items-end text-xs lg:text-md">
                    <p>Setup</p>
                  </div>
                </div>
                <div className="relative h-full scaling">
                  <Image
                    src={Ideation}
                    alt=""
                    fill
                    className="absolute object-cover"
                  />
                  <div className="z-10 absolute w-full h-full bg-brand-brown-3/30 p-4 flex justify-center items-end text-xs lg:text-md">
                    <p>Processos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
