import Image from "next/image";

export default function NameCard(props) {
  return(
    <div className="rounded bg-white shadow-lg mx-4 my-3">
      <div className="text-center text-lg p-2">
        <Image
          className="rounded pb-2"
          src={'/' + props.src}
          alt={props.name}
          width="260"
          height="325"
        />
        {props.name} <br></br>
        {props.title}
      </div>
    </div>
  );
}