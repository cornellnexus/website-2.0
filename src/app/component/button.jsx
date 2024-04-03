"use client";

import React from "react";
import Link from "next/link";
import {motion} from "framer-motion";

export default function Button(props) {
  const color = {
    navy: "bg-navy hover:bg-teal",
    green: "bg-green hover:bg-lightgreen",
  };

  const size = {
    lg: "max-w-sm",
    md: "max-w-xs",
    sm: "max-w-[16rem]",
    xs: "max-w-[10rem]",
    fit: "max-w-fit",
  };

  return (
    <motion.div 
      initial={{scale:1}}
      whileHover={{scale:1.05}}
      transition={{type:"spring", stiffness: 400, damping: 13}}
      className={"w-full " + size[props.size]}
    >
      <Link
        href={props.href}
        className={"flex my-4 rounded-xl transition " + color[props.color]}
      >
        <button
          className={
            "px-8 py-3 w-full border-none text-white text-xl " +
            size[props.size]
          }
        >
          {props.text}
        </button>
      </Link>
    </motion.div>
  );
}
