import { NavBar } from "@/app/components/navBar";
import { Main } from "@/app/components/main";
import { Partners } from "@/app/components/partners";
import { Adverts } from "@/app/components/adverts";
import { Footer } from "@/app/components/footer";

export default function home () {
  return (
    <div className="container mx-auto">
      <NavBar />
      <Main />
      <Partners />
      <Adverts />
      <Footer />
    </div>
  )
}