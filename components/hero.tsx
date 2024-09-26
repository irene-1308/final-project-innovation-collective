import Image from "next/image";

export default function Header() {
  return (
    <div className="relative h-screen w-screen">
      {/* Background Image */}
      <Image
        src="/assets/images/connect.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />

      {/* Content Box */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white dark:bg-black bg-opacity-100 dark:bg-opacity-100 p-8 rounded-full shadow-lg max-w-2xl w-full mx-4 min-h-[600px] flex flex-col justify-center">
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
              />
              <Image
                src="/assets/images/logo_dark.png"
                alt="gatherly logo"
                className="hidden dark:block"
                width={120}
                height={120}
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
