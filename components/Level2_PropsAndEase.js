'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Level2_PropsAndEase() {
  const boxRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(boxRef.current,{
          duration: 1,
          xPercent: -500,
          repeat: -1,
          yoyo: true,
          ease: 'bounce.out', // or 'bounce.out'
        }
      )
      // TODO: gsap.to(boxRef.current, {
      //   duration: 2,
      //   xPercent: 60,
      //   repeat: -1,
      //   yoyo: true,
      //   ease: 'elastic.out(1, 0.3)', // or 'bounce.out'
      // });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-between gap-6 rounded-2xl bg-slate-900/60 px-6 py-5 ring-1 ring-slate-800"
    >
      <div className="flex flex-col gap-2">
        <p className="label-pill">Props & Ease</p>
        <p className="max-w-md text-sm text-slate-300">
          Animate the box endlessly with repeat/yoyo and experiment with bold eases like elastic or bounce.
          Adjust xPercent or other transforms to feel the difference.
        </p>
      </div>
      <div className="flex flex-1 justify-end">
        <div ref={boxRef} className="box" />
      </div>
    </div>
  );
}
