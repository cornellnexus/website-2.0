import React from "react";
import Link from "next/link";

export default function Button(props) {
  return (
    <div className="my-4 bg-green hover:bg-lightgreen rounded-xl transition">
      <Link href={props.href}>
        <button className="px-8 py-3 max-w-sm w-full border-none text-white text-xl">
          {props.text}
        </button>
      </Link>
    </div>
  );
}
