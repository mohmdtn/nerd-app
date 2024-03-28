interface SiteHeadingProps {
  text: string;
}

const SiteHeading = ({ text }: SiteHeadingProps) => {
  return <h1 className="mb-6 mt-4 text-3xl font-bold">{text}</h1>;
};

export default SiteHeading;
