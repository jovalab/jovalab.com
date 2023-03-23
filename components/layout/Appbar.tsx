import Image from "next/image";
import AppIcon from "@/assets/media/images/jovaLab.png"
export default function LayourAppbar() {
  return (
    <div className="bg-white fixed z-[1] px-7 w-full top-0 flex justify-between items-center h-[12vh]">
      <Image className="cursor-pointer" alt="jovalab icon" src={AppIcon} height={55} width={55}></Image>
      <button className="text-[#F5A8BC] bg-white border-[#F5A8BC] hover:bg-[#F5A8BC] hover:text-white border border-solid outline-none cursor-pointer w-[180px] py-2 flex justify-center items-center flex-row">
        <i className="ri-arrow-left-up-line mr-1 text-base"></i>
        <span className="font-medium text-sm">Get Started</span>
      </button>
    </div>
  );
}
