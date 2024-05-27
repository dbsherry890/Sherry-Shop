"use client";

import { usePathname } from "next/navigation";

const STEPS = [
  {
    name: "Step 1: Add Image",
    description: "Choose an image for your case",
    url: "/upload",
  },
  {
    name: "Step 2: Customize design",
    description: "Make the case yours",
    url: "/design",
  },
  {
    name: "Step 3: Summary",
    description: "Review your final design",
    url: "/preview",
  },
];

const Steps = () => {
  const pathname = usePathname();

  return <ol></ol>;
};
export default Steps;
