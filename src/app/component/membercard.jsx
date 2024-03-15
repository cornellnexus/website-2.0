import Image from "next/image";

export default function MemberCard() {
  return (
    <div>
      <div className="w-96 h-96 flex flex-col bg-slate-600 rounded">
        <Image
          className='rounded'
          id='carouselImage'
          src={'/progress.png'}
          alt="progressimage"
          width='100'
          height='100'
        />
        <div>
          Member tester
        </div>
      </div>
    </div>
  )
}