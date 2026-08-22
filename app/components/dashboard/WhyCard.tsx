interface WhyCardProps {
  image: string;
  alt: string;
  title: string;
  text: string;
  variant?: "mint" | "lavender" | "peach";
}

export default function WhyCard({ image, alt, title, text, variant = "mint" }: WhyCardProps) {
  return (
    <article className={`illustrator-card illustrator-card--${variant}`}>
      <div className="illustrator-card__art">
        <img src={image} alt={alt} className="illustrator-card__image" />
      </div>
      <div className="illustrator-card__body">
        <h3 className="why-card__title">{title}</h3>
        <p className="why-card__text">{text}</p>
      </div>
    </article>
  );
}