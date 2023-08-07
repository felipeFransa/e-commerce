import { NavBar } from "@/app/components/navBar";
import { Main } from "@/app/components/main";

export default function home () {
  return (
    <div className="container mx-auto bg-gradient-to-r from-cyan-500 to-blue-500">
      <NavBar />
      <Main />
    </div>
  )
}