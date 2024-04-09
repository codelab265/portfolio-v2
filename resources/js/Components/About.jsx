import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";

import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
} from "lucide-react";

const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Mphatso Mlenga",
    },
    {
        icon: <PhoneCall size={20} />,
        text: "+265 992 374 819",
    },
    {
        icon: <MailIcon size={20} />,
        text: "mphatsomlenga1@gmail.com",
    },

    {
        icon: <HomeIcon size={20} />,
        text: "Lilongwe, Malawi",
    },
];

const qualificationData = [
    {
        title: "experience2",
        data: [
            {
                company: "Computer Security & Networks",
                role: "Lead Developer",
                years: "2019-2020",
            },
            {
                company: "Padziwe Inc",
                role: "Lead Developer",
                years: "2015-2019",
            },
        ],
    },
    {
        title: "experience",
        data: [
            {
                company: "Infinit Solutions",
                role: "Senior Developer",
                years: "2022 - Present",
            },
            {
                company: "Dividend Group",
                role: "Senior Developer",
                years: "2020 - 2022",
            },
        ],
    },
];

const skillData = [
    {
        title: "skills",
        data: [
            {
                name: "Laravel",
            },
            {
                name: "React",
            },
            {
                name: "React native",
            },
            {
                name: "flutter",
            },
            {
                name: "Wordpress",
            },
            {
                name: "Filament",
            },
            {
                name: "Jquery",
            },
            {
                name: "Tailwind css",
            },
        ],
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    About me
                </h2>
                <div className="flex flex-col xl:flex-row">
                    {/* image */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg
                            containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
                            imgSrc="/images/about/developer2.png"
                        />
                    </div>
                    {/* tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger
                                    className="w-[162px] xl:w-auto"
                                    value="personal"
                                >
                                    Personal Info
                                </TabsTrigger>
                                <TabsTrigger
                                    className="w-[162px] xl:w-auto"
                                    value="qualifications"
                                >
                                    Qualifications
                                </TabsTrigger>
                                <TabsTrigger
                                    className="w-[162px] xl:w-auto"
                                    value="skills"
                                >
                                    Skills
                                </TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className="text-lg mt-12 xl:mt-8">
                                {/* personal */}
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">
                                            Hi, I’m Mphatso. Nice to meet you.
                                        </h3>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                            Since beginning my journey as a
                                            freelance designer 9 years ago, I've
                                            done remote work for agencies,
                                            students, and collaborated with
                                            talented people to create digital
                                            products for both business and
                                            consumer use. I'm quietly confident,
                                            naturally curious, and perpetually
                                            working on improving my chops
                                        </p>
                                        {/* icons */}
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div
                                                        className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                                        key={index}
                                                    >
                                                        <div className="text-primary">
                                                            {item.icon}
                                                        </div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* qualifications */}
                                <TabsContent value="qualifications">
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">
                                            My Awesome Journey
                                        </h3>
                                        {/* experience & education wrapper */}
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            {/* experience */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase />
                                                    <h4 className="capitalize font-medium">
                                                        {
                                                            getData(
                                                                qualificationData,
                                                                "experience"
                                                            ).title
                                                        }
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(
                                                        qualificationData,
                                                        "experience"
                                                    ).data.map(
                                                        (item, index) => {
                                                            const {
                                                                company,
                                                                role,
                                                                years,
                                                            } = item;
                                                            return (
                                                                <div
                                                                    className="flex gap-x-8 group"
                                                                    key={index}
                                                                >
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-semibold text-xl leading-none mb-2">
                                                                            {
                                                                                company
                                                                            }
                                                                        </div>
                                                                        <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                            {
                                                                                role
                                                                            }
                                                                        </div>
                                                                        <div className="text-base font-medium">
                                                                            {
                                                                                years
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase />
                                                    <h4 className="capitalize font-medium">
                                                        {
                                                            getData(
                                                                qualificationData,
                                                                "experience"
                                                            ).title
                                                        }
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(
                                                        qualificationData,
                                                        "experience2"
                                                    ).data.map(
                                                        (item, index) => {
                                                            const {
                                                                company,
                                                                role,
                                                                years,
                                                            } = item;
                                                            return (
                                                                <div
                                                                    className="flex gap-x-8 group"
                                                                    key={index}
                                                                >
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-semibold text-xl leading-none mb-2">
                                                                            {
                                                                                company
                                                                            }
                                                                        </div>
                                                                        <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                            {
                                                                                role
                                                                            }
                                                                        </div>
                                                                        <div className="text-base font-medium">
                                                                            {
                                                                                years
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* skills */}
                                <TabsContent value="skills">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-8">
                                            What I Use Everyday
                                        </h3>
                                        {/* skills */}
                                        <div className="mb-16">
                                            <h4 className="text-xl font-semibold mb-2">
                                                Skills
                                            </h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* skill list */}
                                            <div>
                                                {getData(
                                                    skillData,
                                                    "skills"
                                                ).data.map((item, index) => {
                                                    const { name } = item;
                                                    return (
                                                        <div
                                                            className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                                            key={index}
                                                        >
                                                            <div className="font-medium">
                                                                {name}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
