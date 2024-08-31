"use client";
import React from "react";
import { BackgroundBeams } from "./background-beams";

export function BackgroundBeam() {
  return (
    <div className="h-full w-full rounded-md dark:bg-black-100  z-0 flex flex-col items-center justify-center antialiased">
      <BackgroundBeams />
    </div>
  );
}
