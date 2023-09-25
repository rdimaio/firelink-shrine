import Datetime from "./Datetime";
import type { postSchemaType } from "@content/schemas/postSchema";
import type { techSchemaType } from "@content/schemas/techSchema";
import type { mainSchemaType } from "@content/schemas/mainSchema";

export interface Props {
  href?: string;
  frontmatter: mainSchemaType | postSchemaType | techSchemaType;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, published, description } = frontmatter;
  return (
    <li className="my-4">
      {published && <Datetime datetime={published} />}
      &nbsp;~&nbsp;
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 className="text-lg font-medium decoration-dashed inline hover:underline">
            {title}
          </h2>
        ) : (
          <h3 className="text-lg font-medium decoration-dashed inline hover:underline">
            {title}
          </h3>
        )}
      </a>
      <p>{description}</p>
    </li>
  );
}
