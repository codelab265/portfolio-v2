import { Link } from "@inertiajs/react";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/Components/ProjectCard";

const projectData = [
    {
        image: "/images/work/3.png",
        category: "react js",
        name: "Nexa Website",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
        link: "/",
        github: "/",
    },
    {
        image: "/images/work/4.png",
        category: "react js",
        name: "Solstice Website",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
        link: "/",
        github: "/",
    },
    {
        image: "/images/work/2.png",
        category: "next js",
        name: "Lumina Website",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
        link: "/",
        github: "/",
    },
    {
        image: "/images/work/1.png",
        category: "next js",
        name: "Evolve Website",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
        link: "/",
        github: "/",
    },
    {
        image: "/images/work/3.png",
        category: "next js",
        name: "Ignite Website",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
        link: "/",
        github: "/",
    },
    {
        image: "/images/work/4.png",
        category: "next js",
        name: "Envision Website",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
        link: "/",
        github: "/",
    },
    {
        image: "/images/work/1.png",
        category: "fullstack",
        name: "Serenity Website",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
        link: "/",
        github: "/",
    },
    {
        image: "/images/work/3.png",
        category: "fullstack",
        name: "Nova Website",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
        link: "/",
        github: "/",
    },
    {
        image: "/images/work/2.png",
        category: "fullstack",
        name: "Zenith Website",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
        link: "/",
        github: "/",
    },
];

const Work = ({ projects }) => {
    return (
        <section className="relative mb-12 lg:mb-48">
            <div className="container mx-auto flex flex-col lg:flex-row">
                {/* text */}
                <div className="w-full lg:w-[30%] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center lg:items-start">
                    <h2 className="section-title mb-4">My Recent Work</h2>
                    <p className="subtitle mb-8">
                        Here are a few past design projects I've worked on. Want
                        to see more?
                    </p>
                    <Link href="/projects">
                        <Button>Click Me</Button>
                    </Link>
                </div>
                {/* slider */}
                <div className="w-full lg:w-[70%]">
                    <Swiper
                        className="h-[480px]"
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {/* show only the first 4 projects for the slides */}
                        {projects.slice(0, 4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Work;
