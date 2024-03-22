import Image from "next/image";
import Link from "next/link";


export default function MemberCard(props) {

  const [firstName, lastName] = props.name.split(" ");

  const uri = "team/?modal=true&subteam=Business&firstname=" + firstName + "&lastname=" + lastName

  return (
    <div className="rounded bg-white shadow-lg mx-4 my-3 transform transition duration-500 
    hover:scale-105">
      <Link
        href={uri}
        scroll={false}
      >
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
      </Link>
    </div>
  );
}