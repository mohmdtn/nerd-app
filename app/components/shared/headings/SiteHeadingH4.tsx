const SiteHeadingH4 = ({
  text,
  margin = true,
}: {
  text: string;
  margin?: boolean;
}) => {
  return (
    <h4
      className={`${
        margin ? "mb-3" : "mb-0"
      } text-sm font-semibold leading-[1.125rem] text-black`}
    >
      {text}
    </h4>
  );
};

export default SiteHeadingH4;
