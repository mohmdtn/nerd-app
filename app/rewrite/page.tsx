import PageTitle from "../components/shared/PageTitle";
import { TbWriting } from "react-icons/tb";

export default function ReWrite() {
  return (
    <main className="flex h-full">
      <section className="w-1/3 border-e border-[#EFEFEF]">
        <PageTitle title="ReWrite" Icon={TbWriting} />
      </section>
      <section className="w-2/3"></section>
    </main>
  );
}
