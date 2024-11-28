import Link from "next/link";

export interface LinkItem {
  text: string;
  href: string;
}

interface LinksSectionProps {
  sectionTitle: string;
  links: LinkItem[];
}

const LinksSection: React.FC<LinksSectionProps> = ({ sectionTitle, links }) => {
  return (
    <div>
      <h3 className="font-bold text-[18px] mb-2">{sectionTitle}</h3>
      <ul className="space-y-2">
        {links.map(({ href, text }) => (
          <li key={href}>
            <Link href={href} className="hover:text-orange">
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksSection;
