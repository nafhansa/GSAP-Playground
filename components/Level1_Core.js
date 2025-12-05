'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Level1_Core() {
  const boxRef = useRef(null);
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP(
    () => {
      // TODO: Optionally set an initial position/rotation baseline for the box.
    },
    { scope: containerRef }
  );

  const handleMoveTo = contextSafe(() => {
    gsap.to(
        boxRef.current, { 
            x: 450, 
            rotation: 360, 
            duration: 0.5, 
            ease: 'elastic.out(1, 0.3)'
        }
    )
    // TODO: gsap.to(boxRef.current, { x: 160, rotation: 45, duration: 0.8, ease: 'power2.out' });
  });

  const handleMoveFrom = contextSafe(() => {
    gsap.from(
      boxRef.current,{
        y: -120,
        opacity: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.3)'
      }
    )
    // TODO: gsap.from(boxRef.current, { y: -120, opacity: 0, duration: 0.8, ease: 'power2.out' });
  });

  const handleFromTo = contextSafe(() => {
    gsap.fromTo(
      boxRef.current,
      { scale: 0.5, backgroundColor: '#0ea5e9' },
      { scale: 1.2, backgroundColor: '#22d3ee', duration: 0.9, ease: 'elastic.out(1, 0.3)' }
    )
    // TODO: gsap.fromTo(
    //   boxRef.current,
    //   { scale: 0.5, backgroundColor: '#0ea5e9' },
    //   { scale: 1.2, backgroundColor: '#22d3ee', duration: 0.9, ease: 'power3.out' }
    // );
  });

  return (
    <div ref={containerRef} className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div ref={boxRef} className="box" />
        <p className="text-sm text-slate-300">
          Click a button to trigger a different flavor of gsap call. Keep resets in mind for repeatable
          practice.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleMoveTo}
          className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-900/50 ring-1 ring-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-700"
        >
          Move To (gsap.to)
        </button>
        <button
          type="button"
          onClick={handleMoveFrom}
          className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-900/50 ring-1 ring-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-700"
        >
          Move From (gsap.from)
        </button>
        <button
          type="button"
          onClick={handleFromTo}
          className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-900/50 ring-1 ring-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-700"
        >
          FromTo (gsap.fromTo)
        </button>
      </div>
    </div>
  );
}
