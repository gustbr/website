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

                <a
                  href="https://github.com/gustbr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-black hover:text-primary-red transition-colors"
                >
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.583 0-.287-.01-1.04-.015-2.04-3.338.727-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.467-2.382 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.047.137 3.006.403 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.873.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.815 1.102.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .323.19.7.8.58C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
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
