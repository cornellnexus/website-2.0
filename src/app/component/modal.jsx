"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { memberInfo } from "../constants";
import { motion } from "framer-motion";

function Modal() {
  const searchParams = useSearchParams();

  // Current URL format
  // nameOfPage/?modal=_&name=_
  // to add more params just add &varName=__ to the end

  const modal = searchParams.get("modal");
  const hasEmoji = searchParams.get("hasEmoji");
  const firstname = searchParams.get("firstname");
  const lastname = searchParams.get("lastname");
  const name = firstname + " " + lastname;
  const pathname = usePathname();

  return (
    <>
      {modal && (
        <motion.div
        // Animation for member card?
        >
          <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-hidden backdrop-blur flex ">
            <div className="modal-color text-white modal-length h-flex m-auto py-8 px-8 rounded transform transition-opacity">
              <div className="flex flex-col ">
                <div className="flex flex-row self-end">
                  <Link href={pathname} scroll={false}>
                    <Image
                      className="rounded"
                      id="x"
                      src={"x-white.svg"}
                      alt="closeButton"
                      width="20"
                      height="20"
                    />
                  </Link>
                </div>

                <div className="flex flex-row justify-between mt-4">
                  <div className="flex flex-row self-start  text-3xl">
                    <div className="line leading-normal  flex flex-row truncate">
                      <p> {firstname + " " + lastname} </p>
                      <div
                        className={
                          memberInfo[name]["emoji"] !== "" ? "pl-3" : ""
                        }
                      >
                        {memberInfo[name]["emoji"] !== "" ? (
                          <Image
                            className="rounded "
                            id="emoji"
                            src={memberInfo[name]["emoji"]}
                            alt="progressimage"
                            width="35"
                            height="35"
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row pb-1 space-x-3 self-end emptyline">
                    <div>
                      {memberInfo[name]["email"] !== "" ? (
                        <Link
                          href={`mailto:${memberInfo[name]["email"]}`}
                          title="Email me for a coffee chat!"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <Image
                            className="rounded justify-center"
                            id="carouselImage"
                            src={"/coffee-white.svg"}
                            alt="progressimage"
                            width="35"
                            height="35"
                          />
                        </Link>
                      ) : null}
                    </div>
                    <div>
                      {memberInfo[name]["linkedin"] !== "" ? (
                        <Link
                          href={memberInfo[name]["linkedin"]}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <Image
                            className="rounded"
                            id="carouselImage"
                            src={"/linkedin-white.svg"}
                            alt="progressimage"
                            width="35"
                            height="35"
                          />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="flex flex-row self-start mt-5">
                  {memberInfo[name]["desc"]}
                </div>

                <br />
              </div>
            </div>
          </dialog>
        </motion.div>
      )}
    </>
  );
}

export default Modal;
