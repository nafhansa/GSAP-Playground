'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Level5_Responsive() {
  const containerRef = useRef(null);
  const boxRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 800px)', () => {
        return gsap.to(boxRef.current, { rotation: 360, duration: 1.2, repeat: -1, ease: 'power2.inOut' });
      });
      mm.add('(max-width: 799px)', () => {
        return gsap.to(boxRef.current, { rotation: -360, duration: 0.8, repeat: -1, ease: 'power2.inOut' });
      });
      return () => mm.revert();
      // TODO: const mm = gsap.matchMedia();
      // TODO: mm.add('(min-width: 800px)', () => {
      //   return gsap.to(boxRef.current, { rotation: 360, duration: 1.2, repeat: -1, ease: 'power2.inOut' });
      // });
      // TODO: mm.add('(max-width: 799px)', () => {
      //   return gsap.to(boxRef.current, { opacity: 0, duration: 0.8, ease: 'power1.out' });
      // });
      // TODO: return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="panel flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="label-pill">Responsive · MatchMedia</p>
        <p className="text-sm text-slate-300">
          Desktop (≥800px): continuous rotation. Mobile (≤799px): fade out. Adjust the logic inside
          matchMedia callbacks to taste.
        </p>
      </div>
      <div className="flex justify-center">
        <div ref={boxRef} className="box">MM</div>
      </div>
    </div>
  );
}
