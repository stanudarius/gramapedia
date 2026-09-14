import { BlurFade } from "@/components/ui/blur-fade";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  titleId?: string;
};

export function SectionHeading({ index, eyebrow, title, description, titleId }: SectionHeadingProps) {
  return (
    <BlurFade inView duration={0.55}>
      <div className="section-heading">
        <div className="section-heading__index">{index}</div>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={titleId}>{title}</h2>
          {description ? <p className="section-heading__description">{description}</p> : null}
        </div>
      </div>
    </BlurFade>
  );
}
