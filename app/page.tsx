import { About } from "@/src/components/about";
import { Contact } from "@/src/components/contact";
import { Events } from "@/src/components/events";
import { Footer } from "@/src/components/footer";
import { Gallery } from "@/src/components/gallery";
import { Hero } from "@/src/components/hero";
import { Menu } from "@/src/components/menu";
import { Navbar } from "@/src/components/navbar";
import { Reservations } from "@/src/components/reservations";
import { Team } from "@/src/components/team";
import { Testimonials } from "@/src/components/testimonials";

export default function Home(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Events />
      <Testimonials />
      <Team />
      <Reservations />
      <Contact />
      <Footer />
    </div>
  )
}