import MainLayout from "../components/templates/MainLayout";

const card = [
  {
    title: "Product Design",
    desc: "Product design can also include rough sketches, like in SketchUp, to outline features that will be developed later.",
    img: "/assets/skills-assets/icon1.png",
  },
  {
    title: "App Design",
    desc: "Of course, app design includes making the website responsive across various user device sizes. An example of this can be seen in the navbar of my portfolio.",
    img: "/assets/skills-assets/icon2.png",
  },
  {
    title: "Web Design",
    desc: "I have designed a website using Figma to create a project overview before development.",
    img: "/assets/skills-assets/icon3.png",
  },
  {
    title: "Development",
    desc: "For development, I am currently familiar with React (Vite), TypeScript, and Next.js.",
    img: "/assets/skills-assets/icon4.png",
  },
  
];

function Skills() {
  return (
    <MainLayout pageTitle="Rey Skill pages">
      <div className="mx-4 sm:mx-12 md:mx-24 py-4 px-2">
        <div className="w-full text-center">
          <h1 className="uppercase text-lg sm:text-xl text-blue-500 font-medium">
            what i do
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-950 font-semibold">
            Specializing In
          </h2>
        </div>

        {/* Grid lebih responsif */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
          {card.map((item, i) => (
            <div key={i} className="relative flex flex-col items-center">
              {/* Image */}
              <div>
                <img
                  src={item.img}
                  alt="icon"
                  className="h-20 sm:h-24 md:h-28 absolute z-40 left-7"
                />
              </div>

              {/* Card */}
              <div className="relative w-full mt-12">
                <div className="text-base sm:text-lg border-2 rounded-tr-3xl h-48 sm:h-52 md:h-56 pt-16 px-5 border-slate-600">
                  <p className="pb-2 text-lg sm:text-xl font-bold text-blue-950">
                    {item.title}
                  </p>
                  <p className="text-sm sm:text-base">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default Skills;
