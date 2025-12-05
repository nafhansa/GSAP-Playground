'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Level3_Timeline() {
  const containerRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline(
        { defaults: { 
          ease: 'power2.out', 
          duration: 0.8 
        } }
      )

      tl.to(box1Ref.current, { x: -80 })
        .to(box2Ref.current, { y: -60, scale: 0.5 }, '<')
        .to(box3Ref.current, { rotation: 360, duration: 0.8, x: 80 }, '+=0.2')
        .to(box1Ref.current, { rotation: 360, duration: 0.8 }, '-=0.3');
      // TODO: const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.8 } });
      // TODO: tl.to(box1Ref.current, { x: 80 })
      //          .to(box2Ref.current, { y: -60, scale: 1.1 }, '<')
      //          .to(box3Ref.current, { rotation: 90 }, '+=0.2')
      //          .to(box1Ref.current, { y: 50 }, '-=0.3');
      // Use position parameters ('<', '+=', '-=') to choreograph overlap.
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="panel">
      <div className="flex items-center justify-between pb-4">
        <div className="flex flex-col gap-1">
          <p className="label-pill">Timeline</p>
          <p className="text-sm text-slate-300">Stack moves across three boxes with a timeline.</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6">
        <div ref={box1Ref} className="box">1</div>
        <div ref={box2Ref} className="box">2</div>
        <div ref={box3Ref} className="box">3</div>
      </div>
    </div>
  );
}
