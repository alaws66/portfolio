import Image from 'next/image';
import errorMd from '@/public/404-md.png';
import errorXl from '@/public/404-xl.png';

export default function NotFound() {
  return (
    <div className="h-[calc(100vh-64px)] overflow-hidden">
      <div className="absolute top-32 md:top-24 lg:top-32 right-8 sm:inset-x-0 sm:text-center">
        <h1 className="m-0 text-6xl sm:text-8xl xl:text-9xl">404</h1>
        <h2 className="m-0 text-2xl sm:text-3xl xl:text-4xl text-primary-600">Page not found</h2>
      </div>
      <Image
        src={errorMd}
        alt="cabels and outlet with sparks"
        className="md:hidden w-full h-auto object-cover"
      />
      <Image
        src={errorXl}
        alt="cabels and outlet with sparks"
        className="hidden md:block w-full h-auto object-cover"
      />
    </div>
  );
}