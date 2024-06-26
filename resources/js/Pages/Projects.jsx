import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/Components/ui/tabs";
import ProjectCard from "@/Components/ProjectCard";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

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

function Projects({ projects }) {
    const uniqueCategories = [
        "all projects",
        ...new Set(projects.map((item) => item.category)),
    ];

    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState("all projects");

    const filteredProjects = projects.filter((project) => {
        // if category is 'all projects' return all projects, else filter by category
        return category === "all projects"
            ? project
            : project.category === category;
    });

    return (
        <MainLayout>
            <Head title="Projects" />
            <section className="min-h-screen pt-12">
                <div className="container mx-auto">
                    <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                        My Projects
                    </h2>
                    {/* tabs */}
                    <Tabs defaultValue={category} className="mb-24 xl:mb-48">
                        <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
                            {categories.map((category, index) => {
                                return (
                                    <TabsTrigger
                                        onClick={() => setCategory(category)}
                                        value={category}
                                        key={index}
                                        className="capitalize w-[162px] md:w-auto"
                                    >
                                        {category}
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>
                        {/* tabs content */}
                        <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {filteredProjects.map((project, index) => {
                                return (
                                    <TabsContent value={category} key={index}>
                                        <ProjectCard project={project} />
                                    </TabsContent>
                                );
                            })}
                        </div>
                    </Tabs>
                </div>
            </section>
        </MainLayout>
    );
}

export default Projects;
