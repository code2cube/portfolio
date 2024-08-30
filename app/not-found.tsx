"use client";

import { TransitionLink } from "@/components/TransitionLink";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function _404Page() {
  return (
    <div className="relative z-0">
      <ShootingStars className="absolute inset-0 z-0" />
      <StarsBackground className="absolute inset-0 z-0" />
      <div className="relative text-white min-h-screen z-50 flex flex-col items-center justify-center gap-3">
        <p className="md:text-9xl sm:text-7xl text-5xl text-red-700">404</p>
        <p className="md:text-5xl sm:text-3xl text-lg">
          This Page Does not Exist!
        </p>
        <TransitionLink
          href="/"
          className="bg-white text-black p-3 rounded-lg transition hover:scale-110 ease-in"
        >
          Home
        </TransitionLink>
      </div>
    </div>
  );
}
