import Image from 'next/image';
import keyboardMouse from '@/public/keyboard-mouse.png';
import keyboardData from '@/public/keyboard-data.png';

const Experience = () => {
  return (
    <main>
      <div className="flex flex-col lg:flex-row items-center lg:items-start mb-20 px-3 md:px-10 xl:px-32 2xl:px-[10%] py-10 bg-primary-50">
        <div className="lg:mr-10 2xl:mr-28">
          <h1 className="m-0 text-4xl md:text-5xl 2xl:text-6xl">Experience</h1>

          <p className="mt-5 text-sm md:text-base 2xl:text-lg">
            Proin nibh urna, fermentum vitae accumsan et, eleifend ut dolor. Ut efficitur rutrum libero,
            in bibendum leo lobortis vitae. Mauris tempus elementum ante, quis porta dolor pretium nec.
            Duis quis purus auctor, pulvinar nunc vel, luctus urna. Vestibulum.
          </p>
        </div>
        <div>
          <Image
            priority
            src={keyboardMouse}
            alt="purple keyboard and mouse graphic"
            width={400}
            height={350}
            className="hidden lg:block 2xl:hidden"
          />
          <Image
            priority
            src={keyboardData}
            alt="purple keyboard and mouse with popup data graphic"
            width={600}
            height={350}
            className="hidden md:block lg:hidden 2xl:block"
          />
        </div>
      </div>
    </main>
  );
}

export default Experience;