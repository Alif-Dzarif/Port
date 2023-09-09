import React from 'react'
import image1 from '../assets/contents/signed-87ec9751-a4b1-4bb4-91e7-b3a085aaade6-1.png';
import image2 from '../assets/contents/react_basic certificate (1)-1.png';
import image3 from '../assets/contents/javascript_basic certificate (1)-1.png';

export default function CertiCard({ data, idx }) {
  let imageSource = null;

  if (idx === 0) {
    imageSource = image1;
  } else if (idx === 1) {
    imageSource = image2;
  } else if (idx === 2) {
    imageSource = image3;
  }

  return (
    <div className="card w-72 md:w-96 bg-slate-700 my-5 text-white shadow-xl md:pb-0 border-2 border-teal-400 md:col-span-1">
      <div className="card-body">
        <h2 className="card-title text-teal-400">{data.title}</h2>
        <p>Obtained on {data.date}</p>
      </div>
      <figure>
        {imageSource && <img src={imageSource} alt="Certificate" className=' w-72 h-auto md:w-auto md:h-auto'/>}
      </figure>
    </div>
  )
}
