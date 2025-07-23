import Image from "next/image";
import gustin from "./gust.png";
import Testimonials from "@/components/Testimonials.js";
import researchinbooks from "./researchinbooks.png";

export default function Page() {
  return (
    <>
      <main>
        <section className=" text-center mt-12 ">
        <h1 className="bg-primary-blue2 text-white py-0.5 text-lg mx-4 sm:mx-auto max-w-prose rounded-lg font-semibold">👨🏼 Building the future of Mental Health 🌱</h1>
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
                <p className="text-primary-black text-left mx-auto max-w-prose">My journey started in construction, learning the value of hard work and craftsmanship while restoring historic castles. Then I pivoted to technology, ignited by my passion for solving problems through technology.
                From managing €60,000 ad budgets to building bots analyzing 300,000+ companies daily, I’ve turned every challenge into an opportunity to innovate. Now, I focus on growing an app that will help you to become +20% happier everyday, backed by neuroscience.</p>
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
