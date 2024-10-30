import aboutImg from "../assets/me.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  const paragraphs = ABOUT_TEXT.split(". ").reduce((acc, sentence, i, arr) => {
    if (i % 3 === 0) {
      acc.push(
        arr.slice(i, i + 3).join(". ") + (i < arr.length - 3 ? "." : "")
      );
    }
    return acc;
  }, []);

  return (
    <section id="about" className="py-20">
      <h1 className="mb-16 mt-10 text-4xl text-center font-light">
        About <span className="text-neutral-500 font-light">Me</span>
      </h1>

      <div className="flex flex-col gap-12 lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-[rgba(120,119,198,0.1)] blur-lg"></div>
            <img
              className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
              src={aboutImg}
              alt="Profile"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 lg:pt-0">
          <div className="space-y-6">
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-neutral-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="mt-16 border-b border-neutral-900"></div>
    </section>
  );
};

export default About;
