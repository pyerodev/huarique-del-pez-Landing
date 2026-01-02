import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <Hero />
      <MenuSection />
      <AboutSection />
      <ReviewsSection />
      <ReservationSection />
      <Footer />
    </div>
  );
}
