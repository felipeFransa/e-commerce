import { NavBar } from "@/app/components/navBar";
import { Main } from "@/app/components/main";

export default function home () {
  return (
    <div className="container mx-auto">
      <NavBar />
      <Main />
    </div>
  )
}