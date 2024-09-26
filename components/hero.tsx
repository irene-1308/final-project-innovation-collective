import Image from "next/image";

export default function Header() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image - Full screen */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/images/bglight.png"
          alt="Background Light"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="dark:hidden"
        />
        <Image
          src="/assets/images/bgdark.png"
          alt="Background Dark"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="hidden dark:block"
        />
      </div>
      {/* Content Box - Centered and smaller */}
      <div className="relative h-full flex items-center justify-center">
        <div className="bg-white dark:bg-black bg-opacity-100 dark:bg-opacity-60 p-8 rounded-full shadow-sm max-w-3xl w-full mx-4 min-h-[400px] flex flex-col justify-center">
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <p className="text-3xl font-semibold">Welcome to</p>
              <p className="text-7xl font-semibold">Gatherly</p>
            </div>
            <div className="mt-6">
              <Image
                src="/assets/images/logo_light.png"
                alt="gatherly logo"
                className="dark:hidden"
                width={120}
                height={120}
                style={{ width: "auto", height: "auto" }}
              />
              <Image
                src="/assets/images/logo_dark.png"
                alt="gatherly logo"
                className="hidden dark:block"
                width={120}
                height={120}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <h1 className="sr-only">
              Welcome to our new social events app, Gatherly. Join now and find
              a chat!
            </h1>
            <p className="text-2xl lg:text-3xl !leading-tight mx-auto max-w-lg text-center mt-6 italic">
              Connect Locally, Unite Globally
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
