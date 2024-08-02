"use client";

import Link from "next/link";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Contact() {
  return (
    <div>
      <div className="text-white min-h-screen xl:text-7xl lg:text-5xl md:text-4xl sm:text-2xl text-sm text-center gap-2 flex flex-col items-center justify-center p-10 relative z-10">
        <p>
          For any questions or business inquiries, please feel free to email me:
        </p>
        <Link className="text-red-500" href="mailto:sam@samuelsharivker.com">
          sam@samuelsharivker.com
        </Link>
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
