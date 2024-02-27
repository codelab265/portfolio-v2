
import Footer from "../Components/Footer";
import Header from "@/Components/Header";
import { ThemeProvider } from "@/Components/ThemeProvider";
import Template from "@/Components/template";


export default function MainLayout({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            <Template>
                <Header />
                {children}
                <Footer />
            </Template>
        </ThemeProvider>
    );
}
