import Image from "next/image";
import gustin from "./gust.png";
import Testimonials from "@/components/Testimonials.js";

export default function Page() {
  return (
    <>
      <main>
        <section className=" text-center mt-12 ">
        <h1 className="bg-primary-blue2 text-white py-0.5 text-lg mx-4 sm:mx-auto max-w-prose rounded-lg font-semibold">👨🏼 Building AI Agents</h1>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src={gustin}
              alt="Description of image"
              width={200}
              height={200}
              className="rounded-lg mx-auto mt-12"
            />
            <div>
              <p className="text-primary-black text-base text-left mt-6 mb-3 text-center">Hi I&apos;m Gust</p>
              <div className="mx-[5px]">
                <p className="text-primary-black text-left mx-auto max-w-prose">My journey started in construction, learning the value of hard work and craftsmanship while restoring historic castles. A back injury forced me to pivot, but it also sparked my passion for problem-solving through technology.
                From managing €60,000 ad budgets to building bots analyzing 300,000+ companies daily, I’ve turned every challenge into an opportunity to innovate. Now, I focus on creating AI agents that deliver results.</p>
              </div>

              <div className="flex flex-col items-center gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/augustinbrun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-black hover:text-primary-red transition-colors"
                >
                  <svg className="w-6 h-6 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>

                <a
                  href="https://x.com/gustinbrun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-black hover:text-primary-red transition-colors"
                >
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Follow my adventures
                </a>
              </div>
            </div>
          </div>
        <p className="bg-primary-blue1 text-white py-0.5 text-lg mx-4 sm:mx-auto max-w-prose rounded-lg font-semibold mt-12">
          🫶 Wall Of Love
        </p>

        <Testimonials />
        </section>
      </main>
    </>
  );
}
