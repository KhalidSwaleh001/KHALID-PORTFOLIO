
export default function SectionHeading({
  label,
  title,
  description
}) {
  return (
    <div className="section-heading">
      <p className="section-label">{label}</p>

      <h2 className="section-title">{title}</h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </div>
  )
}
