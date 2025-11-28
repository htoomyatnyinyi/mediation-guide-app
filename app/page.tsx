import MeditationLogic from "@/components/MeditationLogic";
import Purpose from "@/components/Purpose";
import Link from "next/link";
// import Logic2 from "@/components/Logic2";
// import MeditationTimer from "@/components/MeditationTimer";

const page = () => {
  return (
    <div className="bg-linear-to-r from-slate-900 via-slate-400 to-slate-900">
      {/* <Link href="/guideline">တရားနာရန် နှိပ်ပါ</Link> */}
      <MeditationLogic />
      {/* <Logic2 /> */}
      {/* <MeditationTimer /> */}
      <Purpose />
    </div>
  );
};

export default page;
