import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "@/Components/Form";

function Contact() {
    return (
        <MainLayout>
            <Head title="Contact" />
            <section>
                <div className="container mx-auto">
                    {/* text & illustration */}
                    <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
                        {/* text */}
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                                <span className="w-[30px] h-[2px] bg-primary"></span>
                                Say Hello 👋
                            </div>
                            <h1 className="h1 max-w-md mb-8">
                                Let's Work Together.
                            </h1>
                            <p className="subtitle max-w-[400px]">
                                Feel free to Contact me by submitting the form
                                below and I will get back to you as soon as
                                possible.
                            </p>
                        </div>
                        {/* illustration */}
                        <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
                    </div>
                    {/* info text & form */}
                    <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
                        {/* info text */}
                        <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
                            {/* mail */}
                            <div className="flex items-center gap-x-8">
                                <MailIcon size={18} className="text-primary" />
                                <div>mphatsomlenga1@gmail.com</div>
                            </div>
                            {/* address */}
                            <div className="flex items-center gap-x-8">
                                <HomeIcon size={18} className="text-primary" />
                                <div>Lilongwe, Malawi</div>
                            </div>
                            {/* phone */}
                            <div className="flex items-center gap-x-8">
                                <PhoneCall size={18} className="text-primary" />
                                <div>+265 992 347 819</div>
                            </div>
                        </div>
                        <Form />
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

export default Contact;
