import React from "react";
 
export function GridBackgroundDemo({children}: {children: React.ReactNode}) {
  return (
    <div className="min-h-screen max-h-full w-screen bg-black  bg-grid-white/[0.2] relative ">
      {/* Radial gradient for the container to give a faded look */}
      {children}
    {/* //   <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
     
    </div>
  );
}