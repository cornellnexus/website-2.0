"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { memberInfo } from '../constants'

function Modal() {
  const searchParams = useSearchParams();

  // Current URL format
  // nameOfPage/?modal=_&name=_
  // to add more params just add &varName=__ to the end
  // Don't forget to check type of var when you get it

  const modal = searchParams.get("modal");
  const hasEmoji = searchParams.get("hasEmoji");
  const name = searchParams.get("name");
  const pathname = usePathname();

  return (
    <>
      {modal &&
        <dialog
          className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex ">
          <div className="modal-color text-white modal-length h-flex m-auto py-5 px-8 rounded transform transition-opacity">
            <div className="flex flex-col ">

              <div className="flex flex-row self-end">

                <Link href={pathname}>
                  <Image
                    className='rounded'
                    id='carouselImage'
                    src={'/modal-x.svg'}
                    alt="progressimage"
                    width='20'
                    height='20'
                  />
                </Link>
              </div>



              <div className="flex flex-row justify-between mt-4">
                <div className="flex flex-row self-start  text-3xl">
                  <div className="line flex flex-row">
                    <p> {name} </p>
                    <div className="pl-3">
                      <Image
                        className='rounded '
                        id='carouselImage'
                        src={memberInfo[name]['emoji']}
                        alt="progressimage"
                        width='35'
                        height='35'
                      />
                    </div>
                  </div>

                </div>

                <div className="self-end">
                  <Image
                    className='rounded'
                    id='carouselImage'
                    src={'/white-linkedin.svg'}
                    alt="progressimage"
                    width='35'
                    height='35'
                  />
                </div>
              </div>

              <div className="flex flex-row self-start mt-5">
                {memberInfo[name]['desc']}
              </div>

              <br />

            </div>
          </div>
        </dialog>
      }
    </>
  );
}

export default Modal;