interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-12 text-center ${className}`}>
      <h2 className="relative inline-block text-3xl font-bold sm:text-4xl">
        <span className="relative z-10">{title}</span>
        <span className="absolute -bottom-2 left-0 h-3 w-full bg-orange-500/20 -skew-x-12" />
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}

