import { Navigation } from "@/widgets/Navigation/ui/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="bg-[var(--color-dashboard-background)] w-full max-w-400 min-h-100 rounded-3xl flex">
        <Navigation />
        <div className="flex-2 p-10">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-mulish text-2xl leading-8 font-bold pb-2">
                Health Overview
              </h1>
              <p className="font-mulish text-sm leading-5 text-gray-500">
                August 12, 2021
              </p>
            </div>
            <div className="flex gap-3">
              <button className="p-3 bg-white rounded-2xl shadow-md cursor-pointer">
                <Image src="/icons/Search.svg" alt="Search" width={24} height={24} />
              </button>
              <button className="p-3 bg-white rounded-2xl shadow-md cursor-pointer">
                <Image src="/icons/Notification.svg" alt="Search" width={24} height={24} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 justify-between mt-7">
            <div className="bg-white rounded-2xl shadow-md p-4">
              <div className="flex gap-4 items-center">
                <div className="w-16 aspect-square bg-[#F8DEBD] rounded-2xl flex items-center justify-center">
                  <Image src="/icons/BloodShugar.svg" alt="Blood Sugar" width={24} height={24} />
                </div>
                <p className="font-mulish text-sm leading-4 font-semibold text-black">
                    Blood Sugar
                </p>
              </div>
              <div className="mt-6 font-light text-4xl leading-8 text-black flex items-center gap-2">
                <p>80</p> <span className="font-mulish text-sm font-bold leading-4 text-gray-500">mg/dL</span>
              </div>
              <div className="mt-3 font-mulish text-sm leading-4 text-black px-2 py-1 bg-[#F8DEBD] rounded-sm w-fit">
                Normal
              </div>
              <Image className="mt-6 w-full" src="/illustrations/BloodShugarGraph.svg" alt="Blood Shugar Graph" width={24} height={24} />
            </div>
            <div className="bg-white rounded-2xl shadow-md p-4">
              <div className="flex gap-4 items-center">
                <div className="w-16 aspect-square bg-[#F8DEBD] rounded-2xl flex items-center justify-center">
                  <Image src="/icons/BloodShugar.svg" alt="Blood Sugar" width={24} height={24} />
                </div>
                <p className="font-mulish text-sm leading-4 font-semibold text-black">
                    Blood Sugar
                </p>
              </div>
              <div className="mt-6 font-light text-4xl leading-8 text-black flex items-center gap-2">
                <p>80</p> <span className="font-mulish text-sm font-bold leading-4 text-gray-500">mg/dL</span>
              </div>
              <div className="mt-3 font-mulish text-sm leading-4 text-black px-2 py-1 bg-[#F8DEBD] rounded-sm w-fit">
                Normal
              </div>
              <Image className="mt-6 w-full" src="/illustrations/BloodShugarGraph.svg" alt="Blood Shugar Graph" width={24} height={24} />
            </div>
            <div className="bg-white rounded-2xl shadow-md p-4">
              <div className="flex gap-4 items-center">
                <div className="w-16 aspect-square bg-[#F8DEBD] rounded-2xl flex items-center justify-center">
                  <Image src="/icons/BloodShugar.svg" alt="Blood Sugar" width={24} height={24} />
                </div>
                <p className="font-mulish text-sm leading-4 font-semibold text-black">
                    Blood Sugar
                </p>
              </div>
              <div className="mt-6 font-light text-4xl leading-8 text-black flex items-center gap-2">
                <p>80</p> <span className="font-mulish text-sm font-bold leading-4 text-gray-500">mg/dL</span>
              </div>
              <div className="mt-3 font-mulish text-sm leading-4 text-black px-2 py-1 bg-[#F8DEBD] rounded-sm w-fit">
                Normal
              </div>
              <Image className="mt-6 w-full" src="/illustrations/BloodShugarGraph.svg" alt="Blood Shugar Graph" width={24} height={24} />
            </div>
          </div>
        </div>
        <div className="flex-1 p-10 bg-[#303030] rounded-3xl">
          <h2 className="font-mulish text-md text-white leading-8 font-normal pb-2">
          BMI Calculator
          </h2>
        </div>
      </div>
    </main>
  );
}
