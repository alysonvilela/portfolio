interface PageTitleProps {
  title: string
  description?: string
}

export const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <section className="bg-brand-accent-blue/60">
      <div className="mx-auto max-w-7xl px-8 lg:px-24 py-8 lg:py-24">
        <div className="relative flex justify-start flex-col">
          <h1 className="pr-3 text-2xl lg:text-6xl font-black text-brand-light-1 font-display">
            {title}
          </h1>
          {description && (
            <p className="text-md md:text-lg text-brand-light-1/60">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
