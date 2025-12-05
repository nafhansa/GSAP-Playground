'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Level4_ScrollTrigger() {
  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const pinRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(boxRef.current, {
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top center',
          end: '+=200',
          toggleActions: 'play pause reverse reset',
          markers: true,
        },
        y: 120,
        opacity: 0,
        duration: 1,
      });
        
      gsap.to(pinRef.current, {
        scrollTrigger: {
          trigger: pinRef.current,
          start: 'top center',
          end: '+=400',
          scrub: 1,
          pin: true,
          markers: true,
        },
        xPercent: 80,
        rotation: 360,
        scale: 1.2,
        duration: 1,
      });
      
      // TODO: gsap.registerPlugin(ScrollTrigger);
      // TODO: gsap.from(boxRef.current, {
      //   scrollTrigger: {
      //     trigger: boxRef.current,
      //     start: 'top center',
      //     end: '+=200',
      //     toggleActions: 'play pause reverse reset',
      //     markers: true,
      //   },
      //   y: 120,
      //   opacity: 0,
      //   duration: 1,
      // });
      //
      // TODO: gsap.to(pinRef.current, {
      //   scrollTrigger: {
      //     trigger: pinRef.current,
      //     start: 'top center',
      //     end: '+=400',
      //     scrub: 1,
      //     pin: true,
      //     markers: true,
      //   },
      //   xPercent: 80,
      //   rotation: 90,
      //   scale: 1.2,
      // });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative min-h-[300vh] bg-gradient-to-b from-slate-900/80 via-slate-900 to-slate-950 px-6 py-16"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-24">
        <div className="sticky top-10 space-y-4">
          <p className="label-pill">ScrollTrigger</p>
          <h3 className="text-2xl font-semibold text-white">Scroll interactions with markers</h3>
          <p className="max-w-xl text-sm text-slate-300">
            Two separate ScrollTriggers: one with toggleActions for a quick reveal, another that scrubs and
            pins while you scroll. Use the markers to verify start/end positions.
          </p>
        </div>

        <div className="grid gap-32">
          <div className="flex justify-center">
            <div ref={boxRef} className="box">Toggle</div>
          </div>

          <div className="flex justify-center">
            <div ref={pinRef} className="box">Scrub + Pin</div>
          </div>
        </div>
      </div>
    </div>
  );
}
