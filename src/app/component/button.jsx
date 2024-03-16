import React from "react";
import Link from "next/link";

export default function Button(props) {
  return (
    <Link href={props.href}>
      <button className="my-4 px-8 py-3 max-w-sm w-full border-none text-white bg-green text-xl rounded-xl">
        {props.text}
      </button>
    </Link>
  );
}
