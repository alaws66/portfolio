import { Button } from '@mui/material';
import Image from 'next/image';
import ReactLogo from '@/public/react-logo.png';
import NextLogo from '@/public/next-logo.png';
import TailwindLogo from '@/public/tailwindcss-logo.png';
import TypescriptLogo from '@/public/typescript-logo.png';
import MUILogo from '@/public/mui-logo.png';
import Achievements from '@/components/Achievements';
import laptop from '@/public/laptop.png';
import laptopData from '@/public/laptop-data.png';

export default function Home() {
  return (
    <main>
      <div className="flex px-3 md:px-10 xl:px-32 2xl:px-[10%] py-10 bg-primary-50">
        <div>
          <h1 className="m-0 text-4xl md:text-5xl 2xl:text-6xl">Aimee Laws</h1>
          <h2 className="m-0 sm:ml-8 text-2xl md:text-3xl 2xl:text-4xl text-primary-600">IT Software Technician</h2>

          <p className="my-10 2xl:mr-20 text-sm md:text-base 2xl:text-lg">
            Proin nibh urna, fermentum vitae accumsan et, eleifend ut dolor. Ut efficitur rutrum libero,
            in bibendum leo lobortis vitae. Mauris tempus elementum ante, quis porta dolor pretium nec.
            Duis quis purus auctor, pulvinar nunc vel, luctus urna. Vestibulum.
          </p>
        </div>
        <div>
          <Image
            priority
            src={laptop}
            alt="purple laptop graphic"
            width={350}
            height={350}
            className="hidden lg:block 2xl:hidden"
          />
          <Image
            priority
            src={laptopData}
            alt="purple laptop with data graphic"
            width={600}
            height={350}
            className="hidden 2xl:block"
          />
        </div>
      </div>

      <div className="mx-3 md:mx-10 xl:mx-32 2xl:mx-[20%] my-10">
        <h2 className="mt-8 mb-3 text-lg md:text-xl 2xl:text-2xl font-bold">
          My recent educational achievements:
        </h2>
        <Achievements />
      </div>

      <div className="py-10 w-full text-center">
        <p className="mx-3 md:mx-10 lg:mx-[20%] 2xl:mx-[25%] text-sm md:text-base 2xl:text-lg">
          Proin nibh urna, fermentum vitae accumsan et, eleifend ut dolor. Ut efficitur rutrum libero, in bibendum leo lobortis vitae.
          Mauris tempus elementum ante, quis porta dolor pretium nec.
        </p>
        <Button variant="contained" className="text-sm md:text-base 2xl:text-lg">Button</Button>
      </div>

      <div className="mt-10 sm:px-3 md:px-10 xl:px-32 2xl:px-[20%] sm:py-5 bg-primary-50">
        <div
          className="
            hidden sm:grid
            sm:grid-cols-3 md:grid-cols-5
            sm:grid-rows-2 md:grid-rows-1
            justify-items-center items-center
            gap-3
            my-5
          "
        >
          <Image src={ReactLogo} alt="React.js logo" width={80} height={70} />
          <Image src={NextLogo} alt="Next.js logo" width={120} height={60} />
          <Image src={TailwindLogo} alt="TailwindCSS logo" width={100} height={70} />
          <Image src={TypescriptLogo} alt="Typescript logo" width={80} height={80} />
          <Image src={MUILogo} alt="Material UI logo" width={80} height={60} />
        </div>
      </div>
    </main>
  );
}
