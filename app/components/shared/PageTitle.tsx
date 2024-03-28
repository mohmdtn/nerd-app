import { IconType } from "react-icons";

interface PageHeaderProps {
  title: string;
  Icon: IconType;
}
const PageTitle = ({ title, Icon }: PageHeaderProps) => {
  return (
    <div className="flex h-20 items-center gap-3 border-b-2 border-[#EFEFEF] px-9 text-2xl font-semibold text-black">
      <Icon size={34} />
      <h1>{title}</h1>
    </div>
  );
};

export default PageTitle;