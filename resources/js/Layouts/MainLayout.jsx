import Footer from "../Components/Footer";
import Header from "@/Components/Header";
import { ThemeProvider } from "@/Components/ThemeProvider";
import Template from "@/Components/template";

export default function MainLayout({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark">
            <Header />
            <Template>{children}</Template>
            <Footer />
        </ThemeProvider>
    );
}
