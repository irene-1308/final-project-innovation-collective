import Hero from "@/components/hero";
import Image from "next/image";

export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4 max-w-[690px] mx-auto">
        <div className="grid grid-cols-1 gap-8">
          <div className="flex flex-col items-center p-6 rounded-lg bg-[#9CE8DF] dark:bg-[#BF9412]">
            <h2 className="text-xl font-normal mb-4">
              Discover <strong>local</strong> connections centered around your
              unique interests
            </h2>
            <Image
              src="/assets/images/friends_smiling.jpg"
              alt="friends smiling at a cafe"
              width={690}
              height={460}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col items-center p-6 rounded-lg bg-[#FFE8A3] dark:bg-[#3AB9AA]">
            <h2 className="text-xl font-normal mb-4">
              Find your tribe within walking distance, united by{" "}
              <strong>common</strong> pursuits
            </h2>
            <Image
              src="/assets/images/flowers.png"
              alt="flower handling"
              width={690}
              height={460}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col items-center p-6 rounded-lg bg-[#9CF3C1] dark:bg-[#191970]">
            <h2 className="text-xl font-normal mb-4">
              Experience a <strong>secure</strong> environment where you can
              comfortably explore new friendships
            </h2>
            <Image
              src="/assets/images/sunset.jpg"
              alt="sunset with friends"
              width={690}
              height={460}
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>
    </>
  );
}
