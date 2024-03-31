import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div className="bg-grey min-h-screen">
        <div className="flex flex-col items-center px-4">
          <div className="text-center title-size font-semibold text-5xl py-10">
            Contact
          </div>
          <div className="flex w-full flex-wrap justify-center">
            <div>
              <Image
                src={"/silly-fullteam.jpeg"}
                width="500"
                height="700"
                alt="silly full team"
                className="rounded"
              />
            </div>
            <div className="max-w-sm my-3 mx-6">
              <div className="text-3xl font-semibold">
                Get in touch with us!
              </div>
              <div className="text-xl">
                Whether you have questions or just want to say hello, we&#39;re here
                to answer.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}