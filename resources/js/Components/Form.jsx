import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { useForm } from "@inertiajs/react";
import emailjs from "@emailjs/browser";

const Form = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        name: "",
        message: "",
    });

    function submit(e) {
        e.preventDefault();

        post("/contact", {
            preserveScroll: true,
            onSuccess: () => {
                sendEmail();
            },
        });
    }

    const sendEmail = () => {
        setLoading(true);
        emailjs
            .sendForm("service_fqsb1vn", "template_jeg9z2w", form.current, {
                publicKey: "uxXPFStbVmBUDB7pl",
            })
            .then(
                () => {
                    reset();
                    alert("You message was sent successfully");
                    setLoading(false);
                },
                (error) => {
                    setLoading(false);
                    console.log("FAILED...", error.text);
                    alert("Sorry the message was not sent");
                }
            );
    };

    return (
        <form className="flex flex-col gap-y-4" ref={form} onSubmit={submit}>
            {/* input */}
            <div className="relative flex items-center">
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                />
                <User className="absolute right-6" size={20} />
            </div>
            {errors.name && (
                <div className="text-sm text-red-500">{errors.name}</div>
            )}
            {/* input */}
            <div className="relative flex items-center">
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                />
                <MailIcon className="absolute right-6" size={20} />
            </div>
            {errors.email && (
                <div className="text-sm text-red-500">{errors.email}</div>
            )}
            {/* textarea */}
            <div className="relative flex items-center">
                <Textarea
                    placeholder="Type Your Message Here."
                    name="message"
                    value={data.message}
                    onChange={(e) => setData("message", e.target.value)}
                />
                <MessageSquare className="absolute top-4 right-6" size={20} />
            </div>
            {errors.message && (
                <div className="text-sm text-red-500">{errors.message}</div>
            )}
            <Button
                className="flex items-center gap-x-1 max-w-[166px]"
                type="submit"
                disabled={loading}
            >
                {loading ? "Sending you message..." : "Let's Talk"}
                <ArrowRightIcon size={20} />
            </Button>
        </form>
    );
};

export default Form;
