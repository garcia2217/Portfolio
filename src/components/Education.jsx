import { EDUCATIONS } from "../constants";

const Education = () => {
  return (
    <div id="education" className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Educations</h2>
      <div>
        {EDUCATIONS.map((education, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:flex-nowrap lg:justify-center items-center"
          >
            <div className="w-full lg:w-1/4 lg:p-8">
              <div className="flex items-center justify-center">
                <img
                  className="rounded-2xl"
                  src={education.image}
                  alt={education.school}
                />
              </div>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
              <h6 className="mb-2 font-semibold">
                {education.school} -{" "}
                <span className="text-sm text-purple-100">
                  {education.grade}
                </span>
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
