import { Link } from "@inertiajs/react";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
    console.log(project.languages);
    return (
        <Card className="group overflow-hidden relative">
            <CardHeader className="p-0">
                {/* image */}
                <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
                    <img
                        className="absolute bottom-0 shadow-2xl"
                        src={`/storage/${project.image_url}`}
                        width={247}
                        height={250}
                        alt=""
                    />
                    {/* btn links */}
                    <div className="flex gap-x-4">
                        <a
                            href={project.link}
                            className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                            target="_blank"
                        >
                            <Link2Icon className="text-white" />
                        </a>
                        <a
                            href={project.github}
                            className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
                            target="_blank"
                        >
                            <Github className="text-white" />
                        </a>
                    </div>
                </div>
            </CardHeader>
            <div className="h-full px-8 py-6">
                <div className="absolute top-4 left-5 flex flex-wrap">
                    {project.languages.map((language) => (
                        <Badge
                            className="uppercase text-sm font-medium mb-2 mr-1"
                            key={language}
                        >
                            {language}
                        </Badge>
                    ))}
                </div>
                <h4 className="h4 mb-1">{project.name}</h4>
                <p className="text-muted-foreground text-lg">
                    {project.description}
                </p>
            </div>
        </Card>
    );
};

export default ProjectCard;
