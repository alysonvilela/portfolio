interface PageSummaryProps {
  title: string
  description: string
}

export const PageSummary = ({ title, description }: PageSummaryProps) => {
  return (
    <section
      id="explain"
      className="text-center py-16 lg:py-24 max-w-lg lg:max-w-2xl mx-auto"
    >
      <div>
        <p className="text-brand-dark-3 text-lg lg:text-4xl tracking-widest uppercase mb-6 lg:mb-12">
          {title}
        </p>
        <p className="text-brand-dark-1/80 text-md lg:text-lg font-medium leading-relaxed lg:leading-normal">
          {description}
        </p>
      </div>
    </section>
  )
}
