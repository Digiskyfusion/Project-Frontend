import React from 'react';
import { ChevronDown } from 'lucide-react';

function Thirdsectionseven() {
  const questions = [
    {
      title: 'How does Digisky generate revenue?',
      summary: 'We apply a 10% service fee on freelancers\' and agencies\' earnings.'
    },
    {
      title: 'What types of projects can I work on through Upwork?',
      summary: 'Anything typically done on a computer. Common tasks include web, mobile, and software development, design, and copywriting, but you can also find lawyers, accountants, and more..'
    },
    {
      title: 'What is the Top Rated program?',
      summary: 'It’s a mark of recognition for professionals who consistently deliver excellent work.'
    }
  ];

  return (
    <div className='flex flex-col lg:flex-row px-5 py-4'>
      {/* Left Side */}
      <div className='bg-white text-black p-3  '>
        <h1 className='text-4xl md:text-5xl font-bold'>Commonly asked questions</h1>
      </div>
      
      {/* Right Side */}
      <div className='px-5 py-4 w-full lg:w-3/5 text-gray-800'>
        {questions.map((q, index) => (
          <details key={index} className='mb-4 border-b-2 pb-4 relative'>
            <summary className='text-xl font-semibold flex justify-between items-center cursor-pointer'>
              {q.title}
              <ChevronDown className='w-5 h-5 text-gray-600' />
            </summary>
            <p className='text-black mt-2'>{q.summary}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export default Thirdsectionseven;
