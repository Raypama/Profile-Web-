import MainLayout from "../components/templates/MainLayout"



const card = [
    {
        title: "Product Design",
        desc: "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
        img: "/src/assets/skills-assets/icon1.png"
    },
    {
        title: "App Design",
        desc: "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
        img: "/src/assets/skills-assets/icon2.png"
    },
    {
        title: "Web Design",
        desc: "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
        img: "/src/assets/skills-assets/icon3.png"
    },
    {
        title: "Development",
        desc: "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
        img: "/src/assets/skills-assets/icon4.png"
    },
    {
        title: "Ilustration",
        desc: "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
        img: "/src/assets/skills-assets/icon5.png"
    },
    {
        title: "Motion",
        desc: "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
        img: "/src/assets/skills-assets/icon6.png"
    },
]

function Skills() {
    return (
        <MainLayout pageTitle="Rey Skill pages">
            <div className="h-screen mx-24 ">
                <div className="pt-28 w-full text-center">
                    <h1 className="uppercase text-xl text-blue-500 font-medium">what i do</h1>
                    <h2 className=" text-2xl text-blue-950 font-semibold">Specializing In</h2>
                </div>
                <div className="grid grid-cols-3 gap-6 h-2/3 mt-8  ">
                    {card.map((item, i) => (
                        <div key={i} className=" h-full relative ">
                            <div>
                                <img src={item.img} alt="icon" className="h-24 absolute z-40 left-7" />
                            </div>
                            <div className="  max-h-full relative h-full mt-10 w-full " >
                                <div className="text-lg border-2 rounded-tr-3xl h-52 absolite pt-16 px-5 bottom-0 border-slate-600 ">
                                <p className=" pb-2 text-xl font-bold text-blue-950">{item.title}</p>
                                <p className="">{item.desc}</p>

                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </MainLayout>
    )
}

export default Skills