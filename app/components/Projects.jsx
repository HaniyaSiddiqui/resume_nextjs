import Image from "next/image";
import Link from "next/link";
import React from "react";
import chakraImg from "../../public/assets/projects/chakraImg.png";
import panaverseImg from "../../public/assets/projects/panaverse_clone.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#7c32ab]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Pricing UI'
            projectUrl='https://chakra-ui-pricing-website-duw83qhra-haniyasiddiqui.vercel.app/'
            backgroundImg={chakraImg}
            tech='Chakra'
          />

          <ProjectItem
            title='Panaverse Clone'
            projectUrl='https://panaverse-dao-tailwind-css.vercel.app'
            backgroundImg={panaverseImg}
            tech='Tailwind CSS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
