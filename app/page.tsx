import { Button } from '@mui/material';
import Image from 'next/image';
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
    </main>
  );
}
