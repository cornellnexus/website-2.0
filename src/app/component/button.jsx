import React from "react";
import Link from "next/link";

export default function Button(props) {
  return (
    <div className="shadow hover:shadow-none my-4 bg-green rounded-xl">
      <Link href={props.href}>
        <button className="px-8 py-3 max-w-sm w-full border-none text-white text-xl">
          {props.text}
        </button>
      </Link>
    </div>
  );
}
