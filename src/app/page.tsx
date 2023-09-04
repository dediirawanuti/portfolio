import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram, FaMedal, FaBlog, FaBriefcase } from 'react-icons/fa'

import Blog from '@/pages/blog'

export default function Home() {
  return (
    <>
      <div className='h-screen bg-slate-700 py-8 px-32'>
        <div className="flex">
          <div className='w-1/3'>
            <a href='/' className='font-extrabold text-3xl text-center text-gray-200'>
              Dedi Irawan
            </a>
            <div className='flex flex-wrap items-center gap-4 mt-8'>
              <a href="/">
                <Image
                  className='hover:ring-4 rounded-full ring-[#919191]'
                  src={"/images/1688224876902.jpeg"}
                  alt='foto saya'
                  width={120}
                  height={120}
                />
              </a>
              <div className='flex flex-col justify-center items-center bg-[#505558] hover:ring-4 rounded-full ring-[#919191] p-1'>
                <a
                  className='rounded-full p-1'
                  href="https://github.com/dediirawanuti"
                  target="_blank" rel="noopener noreferrer">
                  <FaGithub size={28} />
                </a>
              </div>
              <div className='flex flex-col justify-center items-center bg-[#505558] hover:ring-4 rounded-full ring-[#919191] p-1'>
                <a
                  className='rounded-full p-1'
                  href="https://www.linkedin.com/in/dediirawan024/"
                  target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={28} />
                </a>
              </div>
              <div className='flex flex-col justify-center items-center bg-[#505558] hover:ring-4 rounded-full ring-[#919191] p-1'>
                <a
                  className='rounded-full p-1'
                  href="https://www.instagram.com/dediirwannn_"
                  target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={28} />
                </a>
              </div>
            </div>
            <div className="flex my-4">
              <p className="text-gray-200 font-semibold">
                Lulusan
                <a
                  className="hover:text-red-500"
                  target="_blank" rel="noopener noreferrer"
                  href="https://teknokrat.ac.id"
                > Universitas Teknokrat Indonesia.
                </a> Jurusan Teknologi Informasi. Web Developer.
              </p>
            </div>
            <div className="button">
              <a
                href="mailto:dedi_irawan@teknokrat.ac.id"
                className="flex justify-center items-center hover:bg-gray-900 rounded-full bg-gray-600 p-2 text-lg text-white font-semibold"
              >Sapa saya!</a>
            </div>
          </div>

          <div className='w-2/3 ml-8'>
            <div className='flex flex-col'>
              <div className='bg-gray-600 rounded-full h-[70px] '>
                <ul className='grid grid-flow-col justify-stretch m-2'>
                  <li className='flex flex-wrap justify-center items-center gap-4 bg-gray-700 rounded-full p-4'>
                    <FaBlog size={18} color="#919191" />
                    <Link className='text-gray-400 font-semibold' href={'/'}>Blog</Link>
                  </li>
                  <li className='flex flex-wrap justify-center items-center gap-4 hover:bg-gray-700 rounded-full p-4'>
                    <FaMedal size={18} color="#919191" />
                    <Link className='text-gray-400 font-semibold' href={'/pencapain'}>Pencapaian</Link>
                  </li>
                  <li className='flex flex-wrap justify-center items-center gap-4 hover:bg-gray-700 rounded-full p-4'>
                    <FaBriefcase size={18} color="#919191" />
                    <Link className='text-gray-400 font-semibold' href={'/portofolio'}>Portofolio</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="">
              <div className="blog flex flex-col mt-4">
                <Blog />
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
