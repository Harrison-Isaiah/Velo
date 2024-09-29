import React from 'react';

function renderSection4(props) {
  return (
    <section className="w-[1920px] h-[763px] relative min-h-[763px]">
      /*🚩8 Unstructured items require structuring to ensure responsiveness, as code with absolute positioning lacks
      adaptability.❗*/
      <h1 className="w-[469px] h-[73px] absolute left-[728px] right-[723px] top-[127px] bottom-[563px]">
        <span className="font-normal text-[60px] leading-[0.7] font-Montserrat text-black uppercase">
          <span className="leading-[1.21] text-[rgb(74,222,222)]">tools</span>
          <span className="leading-[1.21] text-white"> we use</span>
        </span>
      </h1>
      <h3 className="flex justify-center font-light text-[20px] leading-[1.2] font-Montserrat text-white text-center capitalize w-[851px] h-12 absolute left-[535px] right-[534px] top-[209px] bottom-[506px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, `}</h3>
      <img
        className="w-[226px] h-[226px] absolute left-[412px] right-[1282px] top-[337px] bottom-[200px]"
        src={'/assets/13fed9b2a9556b140b3a4626e59e16ea.png'}
        alt="alt text"
      />
      <img
        className="w-[227px] h-[226px] absolute left-[702px] right-[991px] top-[337px] bottom-[200px]"
        src={'/assets/bca52afb81a6a32ec7ce160f531ee51c.png'}
        alt="alt text"
      />
      <img
        className="w-[226px] h-[226px] absolute left-[993px] right-[701px] top-[337px] bottom-[200px]"
        src={'/assets/87f907288d3dd3d2c5775b57ece96a19.png'}
        alt="alt text"
      />
      <img
        className="w-[226px] h-[226px] absolute left-[1283px] right-[411px] top-[337px] bottom-[200px]"
        src={'/assets/20ab1317eb311783ce53af3d992d0fe5.png'}
        alt="alt text"
      />
      <hr
        className="bg-[image:linear-gradient(90deg,_rgba(226,_235,_235,_0.00)_0%,_rgba(246,_255,_255,_0.49)_51.5%,_rgba(226,_235,_235,_0.00)_100%)] w-[626px] h-px absolute left-0 right-[1294px] top-[147px] bottom-[615px]"
        size={1}
      />
      <hr
        className="bg-[image:linear-gradient(270deg,_rgba(226,_235,_235,_0.00)_0%,_rgba(246,_255,_255,_0.49)_51.5%,_rgba(226,_235,_235,_0.00)_100%)] w-[626px] h-px absolute left-[1294px] right-0 top-[147px] bottom-[615px]"
        size={1}
      />
    </section>
  );
}

export default renderSection4;
