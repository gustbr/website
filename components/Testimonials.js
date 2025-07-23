import Image from "next/image";
import sp11 from "@/app/images/sp/sp11.jpg";
import sp1 from "@/app/images/sp/sp1.png";
import sp2 from "@/app/images/sp/sp2.jpeg";
import sp3 from "@/app/images/sp/sp3.jpeg";
import sp4 from "@/app/images/sp/sp4.jpeg";
import sp5 from "@/app/images/sp/sp5.jpeg";
import sp6 from "@/app/images/sp/sp6.jpeg";
import sp7 from "@/app/images/sp/sp7.jpeg";
import sp8 from "@/app/images/sp/sp8.jpeg";

// A one or two sentences testimonial from a customer.
// Highlight the outcome for your customer (how did your product changed her/his life?) or the pain it's removing — Use <span className="bg-warning/25 px-1.5"> to highlight a part of the sentence
const Testimonials = () => {

  const testimonials = [
    {
      image: sp11,
      quote: "Big thanks to Augustin! With his expertise, we've seamlessly onboarded hundreds of new members through the custom funnel he crafted for our community. He also increased our daily member engagement significantly. Augustin is a veritable Swiss Army Knife!",
      name: "Julian I.",
      role: "Founder @ THE QUEST",
      quoteImg: sp1,
    },
    {
      image: sp8,
      quote: "Augustin built me a list of 500 high-quality contacts, taking careful account of the instructions on the persona to be targeted and the information to be extracted. The final file was perfectly in line with my expectations. Great communication too. A pleasure to work with!",
      name: "Antoine N.",
      role: "CEO @ GyoGyo"
    },
    {
      image: sp7,
      quote: "Using cold email Augustin has created multiple opportunities worth €75 000, automated numerous tedious and complex tasks, and significantly saved our sales staff a great deal of time.",
      name: "Max T.",
      role: "Co-founder of Rue de la Boulette"
    },
    {
      image: sp6,
      quote: "Augustin is a promising young service provider and entrepreneur. His organized, rigorous and conscientious approach is evident in all his work. His ability to adapt and evolve in specific markets is a testament to his flexibility and expertise, while his humility and attentive listening are rare qualities that really set him apart! I've been very satisfied with his career with us!",
      name: "Gwenael A.",
      role: "Co-founder of Rue de la Boulette"
    },
    {
      image: sp5,
      quote: "Meet Augustin, a conversion specialist that can help boost sales. 🤝",
      name: "Peter M.",
      role: "CEO @ TweetAI"
    },
    {
      image: sp4,
      quote: "It was a real pleasure to work with Augustin. He's rigorous, responsive and concerned about a job well done. When faced with difficulties, he can quickly question himself and find appropriate solutions. Proactivity and efficiency are his watchwords. Thanks to him, we've been able to generate leads faster and more efficiently, with a view to optimizing sales. I highly recommend him.",
      name: "Alexandre J.",
      role: "Business and commercial development manager @ Rue de la Boulette"
    },
    {
      image: sp2,
      quote: "He developed a software that enables us to track the time spent working on each site/intervention on a daily basis. It has reduced the workload of our administrative department by 50%. Augustin is a responsive professional who was able to quickly integrate the software within our company.",
      name: "Jérôme B.",
      role: "CEO @ Innov'Élevage"
    },
    {
      image: sp3,
      quote: "We and our community loved the mini-game that Augustin built for our Discord server. His approach to fostering engagement through daily quests and interactions has greatly enhanced our members' experience.",
      name: "Vincent M.",
      role: "CEO @ AstroMust"
    }
  ]
  return (
    <section className="pt-12 grid grid-cols-1 gap-[10px] place-items-center mx-1.5">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white rounded-lg py-[12px] px-[16px] w-auto md:w-[400px] mb-6">
          <div className="flex items-center gap-3">
            <div >
              <Image src={testimonial.image} alt={`testimonial`} width={48} height={48} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
            </div>
            <div className="text-black text-left">
              <p className="font-medium">{testimonial.name}</p>
              <p className="text-sm">{testimonial.role}</p>
            </div>
          </div>
          <div>
            <p className="text-black text-left text-sm mt-3">{testimonial.quote}</p>
          </div>
          {testimonial.quoteImg && (
            <div className="mt-3">
              <Image src={testimonial.quoteImg} className="w-full object-cover rounded-lg" />
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
