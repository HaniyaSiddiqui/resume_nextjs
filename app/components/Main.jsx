import React from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Main = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-14 h-screen text-center'>
      <div className='nav-w-[1244px] w-full h-full mx-auto p-1 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Let&apos;s Say Hello
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&apos;m <span className='text-[#7c32ab]'>Hanniya</span>
          </h1>
          <h1 className='py-4 text-gray-700'>A Full Stack Developer</h1>

          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I&apos;m a full-stack developer specializing in building frontend &
            backend. I&apos;m passionate about creating robust and efficient web
            applications that deliver seamless user experiences. With expertise
            in both front-end and back-end development, I strive to build
            scalable solutions that meet the unique needs of each client.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/hanniya-a-siddiqui-14911a168/'
              target='_blank'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                <FaLinkedinIn />
              </div>
            </a>
            <a href='https://github.com/HaniyaSiddiqui' target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                <FaGithub />
              </div>
            </a>
            <a href='mailto:haniya.siddiqui124@gmail.com'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                <AiOutlineMail />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
