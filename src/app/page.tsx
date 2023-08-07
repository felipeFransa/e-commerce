import { NavBar } from "@/app/components/navBar";
import { Main } from "@/app/components/main";
import { Partners } from "@/app/components/partners";

export default function home () {
  return (
    <div className="container mx-auto">
      <NavBar />
      <Main />
      <Partners />
    </div>
  )
}