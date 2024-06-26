import About from "@/Components/About";
import Cta from "@/Components/Cta";
import Hero from "@/Components/Hero";
import Reviews from "@/Components/Reviews";
import Services from "@/Components/Services";
import Work from "@/Components/Work";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Home({ projects, reviews }) {
    return (
        <MainLayout>
            <Head title="Home" />
            <main>
                <Hero />
                <About />
                {/* <Services /> */}
                <Work projects={projects} />
                <Reviews reviews={reviews} />
                <Cta />
            </main>
        </MainLayout>
    );
}
