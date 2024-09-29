import React from 'react';

function renderSection2(props) {
  return (
    <section className="flex flex-col min-h-[1280px]">
      <div
        className="bg-[image:var(--src)] bg-[center_center] bg-[length:100%_100%] bg-no-repeat w-[1920px] h-[1080px] overflow-hidden relative min-h-[1080px] mt-[200px]"
        style={{ '--src': `url(${'/assets/1ed05f9eb440782c07552315fdc1fb65.png'})` }}>
        /*🚩4 Unstructured items require structuring to ensure responsiveness, as code with absolute positioning lacks
        adaptability.❗*/
        <img
          className="w-[1371px] h-[822px] absolute left-[549px] right-0 top-[129px] bottom-[129px]"
          src={'/assets/493d75af739897aaaa49285f1d744d13.png'}
          alt="alt text"
        />
        <h1 className="flex justify-center w-[760px] h-[73px] absolute left-[580px] right-[580px] top-0 bottom-[1007px]">
          <span className="font-semibold text-[60px] leading-[0.7] font-Montserrat text-black text-center uppercase">
            <span className="font-semibold leading-[1.21] text-[rgb(246,255,255)]">what </span>
            <span className="font-semibold leading-[1.21] text-[rgb(74,222,222)]">you can</span>
            <span className="font-semibold leading-[1.21] text-[rgb(246,255,255)]"> </span>
            <span className="font-semibold leading-[1.21] text-[rgb(74,222,222)]">expect</span>
          </span>
        </h1>
        <div className="bg-[image:linear-gradient(90deg,_rgba(226,_235,_235,_0.00)_0%,_rgba(246,_255,_255,_0.49)_51.5%,_rgba(226,_235,_235,_0.00)_100%)] w-[550px] h-px absolute left-0 right-[1370px] top-4 bottom-[1063px]" />
        <div className="bg-[image:linear-gradient(270deg,_rgba(226,_235,_235,_0.00)_0%,_rgba(246,_255,_255,_0.49)_51.5%,_rgba(226,_235,_235,_0.00)_100%)] w-[550px] h-px absolute left-[1370px] right-0 top-[17px] bottom-[1062px]" />
      </div>
    </section>
  );
}

export default renderSection2;
