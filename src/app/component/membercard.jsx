import Image from "next/image";
import Link from "next/link";

export default function MemberCard(props) {
  const [firstName, lastName] = props.name.split(" ");

  const uri =
    "team/?modal=true&subteam=Business&firstname=" +
    firstName +
    "&lastname=" +
    lastName;

  return (
    <div
      className="group rounded-sm bg-white shadow-lg mx-4 my-3 transform transition duration-500 
    hover:scale-105"
    >
      <Link href={uri} scroll={false}>
        <div className="p-3">
          <div className="rounded-sm relative bg-teal w-[250px] h-[325px] mb-3 rounded-sm">
            <Image
              className="rounded-sm object-cover group-hover:opacity-80 transition duration-500"
              src={"/headshots/" + firstName + "_" + lastName + ".jpg"}
              alt={props.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={50}
              priority
            />
          </div>
          <div className="text-center">
            <div className="font-medium text-lg">{props.name}</div>
            <div className="font-light text-lg">{props.title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
