"use client";

import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Papers() {
  return (
    <div className="relative z-0">
      <ShootingStars className="absolute inset-0 z-0" />
      <StarsBackground className="absolute inset-0 z-0" />
      <div className="relative text-white min-h-screen z-50 flex flex-col items-center justify-center gap-3"></div>
    </div>
  );
}
