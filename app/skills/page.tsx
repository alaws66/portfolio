import Image from 'next/image';
import code from '@/public/code.png';
import codeGear from '@/public/code-gear.png';
import wires from '@/public/wires.png';

const Skills = () => {
  return (
    <main>
      <div className="flex flex-col lg:flex-row items-center lg:items-start mb-20 px-3 md:px-10 xl:px-32 2xl:px-[10%] py-10 bg-primary-50">
        <div className="lg:mr-10 2xl:mr-28">
          <h1 className="m-0 text-4xl md:text-5xl 2xl:text-6xl">Skills</h1>

          <p className="mt-5 text-sm md:text-base 2xl:text-lg">
            Proin nibh urna, fermentum vitae accumsan et, eleifend ut dolor. Ut efficitur rutrum libero,
            in bibendum leo lobortis vitae. Mauris tempus elementum ante, quis porta dolor pretium nec.
            Duis quis purus auctor, pulvinar nunc vel, luctus urna. Vestibulum.
          </p>
        </div>
        <div>
          <Image
            priority
            src={code}
            alt="pages of code graphic"
            width={350}
            height={350}
            className="hidden lg:block 2xl:hidden"
          />
          <Image
            priority
            src={codeGear}
            alt="pages of code with gear graphic"
            width={600}
            height={350}
            className="hidden md:block lg:hidden 2xl:block"
          />
        </div>
      </div>

      <div className="mx-3 md:mx-10 xl:mx-32 2xl:mx-[20%] my-10 text-sm md:text-base 2xl:text-lg">
        <h2 className="mb-2 text-lg md:text-xl 2xl:text-2xl font-bold">HTML and CSS</h2>
        <p className="mt-0 mb-8">
          Proin nibh urna, fermentum vitae accumsan et, eleifend ut dolor. Ut efficitur rutrum libero,
          in bibendum leo lobortis vitae. Mauris tempus elementum ante, quis porta dolor pretium nec.
          Duis quis purus auctor, pulvinar nunc vel, luctus urna. Vestibulum.
        </p>

        <h2 className="mb-2 text-lg md:text-xl 2xl:text-2xl font-bold">JavaScript and TypeScript</h2>
        <p className="mt-0 mb-8">
          Proin nibh urna, fermentum vitae accumsan et, eleifend ut dolor. Ut efficitur rutrum libero,
          in bibendum leo lobortis vitae. Mauris tempus elementum ante, quis porta dolor pretium nec.
          Duis quis purus auctor, pulvinar nunc vel, luctus urna. Vestibulum.
        </p>
      </div>

      <Image src={wires} alt="group of wires graphic" className="my-10 w-full h-[12rem] object-cover" />

      <div className="mx-3 md:mx-10 xl:mx-32 2xl:mx-[20%] my-10 text-sm md:text-base 2xl:text-lg">
        <h2 className="mb-2 text-lg md:text-xl 2xl:text-2xl font-bold">React.js and Next.js</h2>
        <p className="mt-0 mb-8">
          Proin nibh urna, fermentum vitae accumsan et, eleifend ut dolor. Ut efficitur rutrum libero,
          in bibendum leo lobortis vitae. Mauris tempus elementum ante, quis porta dolor pretium nec.
          Duis quis purus auctor, pulvinar nunc vel, luctus urna. Vestibulum.
        </p>

        <h2 className="mb-2 text-lg md:text-xl 2xl:text-2xl font-bold">MongoDB</h2>
        <p className="mt-0 mb-8">
          Proin nibh urna, fermentum vitae accumsan et, eleifend ut dolor. Ut efficitur rutrum libero,
          in bibendum leo lobortis vitae. Mauris tempus elementum ante, quis porta dolor pretium nec.
          Duis quis purus auctor, pulvinar nunc vel, luctus urna. Vestibulum.
        </p>
      </div>

      <Image src={wires} alt="group of wires graphic" className="my-10 w-full h-[12rem] object-cover" />

      <div className="mx-3 md:mx-10 xl:mx-32 2xl:mx-[20%] mt-10 mb-20 text-sm md:text-base 2xl:text-lg">
        <h2 className="mb-2 text-lg md:text-xl 2xl:text-2xl font-bold">TailwindCSS</h2>
        <p className="mt-0 mb-8">
          Proin nibh urna, fermentum vitae accumsan et, eleifend ut dolor. Ut efficitur rutrum libero,
          in bibendum leo lobortis vitae. Mauris tempus elementum ante, quis porta dolor pretium nec.
          Duis quis purus auctor, pulvinar nunc vel, luctus urna. Vestibulum.
        </p>

        <h2 className="mb-2 text-lg md:text-xl 2xl:text-2xl font-bold">Figma</h2>
        <p className="mt-0 mb-8">
          Proin nibh urna, fermentum vitae accumsan et, eleifend ut dolor. Ut efficitur rutrum libero,
          in bibendum leo lobortis vitae. Mauris tempus elementum ante, quis porta dolor pretium nec.
          Duis quis purus auctor, pulvinar nunc vel, luctus urna. Vestibulum.
        </p>
      </div>
    </main>
  );
}

export default Skills;