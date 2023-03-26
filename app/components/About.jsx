import React from "react";
import Image from "next/image";
import Link from "next/link";
import aboutImg from "../../public/assets/about.jpeg";

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-5'>
      <div className='max-w-[1240px]  m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#7c32ab]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            With 5 years of experience in backend programming using PHP, I have
            a strong foundation in building robust and scalable web
            applications. However, my curiosity and love for exploring new
            things led me to explore frontend development, where I found my true
            passion. I love to implement new designs and create seamless user
            experiences for individual clients.
          </p>
          <p className='py-2 text-gray-600'>
            My expertise in both backend and frontend development allows me to
            provide end-to-end solutions for a variety of web development
            projects.I&apos;m now spending my time in building projects with
            Nextjs 13 by using Tailwind Css and learning flex side by side.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={aboutImg} alt='About Me' width='900' height='900' />
        </div>
      </div>
    </div>
  );
};

export default About;
