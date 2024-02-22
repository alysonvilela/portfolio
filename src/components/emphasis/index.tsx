import Image from 'next/image'
import Article from '@/assets/article.jpg'
import Mug from '@/assets/mug.png'
import Cases from '@/assets/setup2.webp'
import Setup from '@/assets/setup.webp'
import Ideation from '@/assets/ideation.jpg'
import Link from 'next/link'

interface BannerProps {
  title?: string
}

export const Emphasis = ({ title = 'Do not click!' }: BannerProps) => {
  return (
    <>
      <section className="overflow-hidden fade">
        <section className="pb-8 lg:pb-20 mx-auto max-w-7xl items-center border-y-0">
          <div className="relative aspect-[10/15] md:aspect-[16/7]">
            <Image
              src={Mug}
              alt=""
              fill
              className="absolute object-cover opacity-[3%]"
            />
            <div className="absolute bg-brand-accent-rose/10 z-10 w-full h-fit md:h-full px-8 lg:px-24 py-12 pr-0">
              <h2 className="pb-4 text-2xl font-black text-brand-brown-3 font-display">
                {title}
              </h2>
              <div className="flex overflow-x-auto md:overflow-hidden md:grid grid-cols-2 md:h-full md:grid-cols-4 gap-8 tracking-widest uppercase font-medium text-center text-white pb-12">
                <Link href={'/articles'} className="relative h-[300px] md:h-full scaling min-w-[200px] md:min-w-fit">
                  <Image
                    src={Article}
                    alt=""
                    fill
                    className="absolute object-cover"
                  />
                  <div className="z-10 absolute w-full h-[300px] md:h-full bg-brand-dark-3/30 p-4 flex justify-center items-end text-xs lg:text-md">
                    <p>Articles</p>
                  </div>
                </Link>
                <Link href={'/portfolio'} className="relative h-[300px] md:h-full scaling min-w-[200px] md:min-w-fit">
                  <Image
                    src={Cases}
                    alt=""
                    fill
                    className="absolute object-cover"
                  />
                  <div className="z-10 absolute w-full h-full bg-brand-dark-3/30 p-4 flex justify-center items-end text-xs lg:text-md">
                    <p>Portfolio</p>
                  </div>
                </Link>
                <Link href={'/setup'} className="relative h-[300px] md:h-full scaling min-w-[200px] md:min-w-fit">
                  <Image
                    src={Setup}
                    alt=""
                    fill
                    className="absolute object-cover"
                  />
                  <div className="z-10 absolute w-full h-full bg-brand-dark-3/30 p-4 flex justify-center items-end text-xs lg:text-md">
                    <p>Setup</p>
                  </div>
                </Link>
                <Link href={'/services'} className="relative h-[300px] md:h-full scaling min-w-[200px] md:min-w-fit">
                  <Image
                    src={Ideation}
                    alt=""
                    fill
                    className="absolute object-cover"
                  />
                  <div className="z-10 absolute w-full h-full bg-brand-dark-3/30 p-4 flex justify-center items-end text-xs lg:text-md">
                    <p>Services</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
