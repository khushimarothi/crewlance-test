"use client"
import TooglleBtn from "./components/TooglleBtn"
import { useSearchParams } from 'next/navigation'
import ForHiring from "./pages/ForHiring"
import ForFreelancer from "./pages/ForFreelancer"
import Start from "./components/Start"
import Footer from "./components/Footer"
import Discover from "./components/Discover"

export default function Home() {
  const searchParams = useSearchParams()
  const userType = searchParams.get('userType')

  const startContent =
    userType === "freelance"
      ? { title: "Try CrewLance", subtitle: "for free", description: "Everything you need to launch, build, and grow your freelance career." }
      : { title: "Start Hiring", subtitle: "top freelancer", description: "Get Started for free. Plus, Independents on CrewLance keep 100% of what you pay them." };

  return (
    <div>
      <div
        className={`main ${userType != "freelance" ? "" : "bg-black text-white"}`}
        style={{ height: "calc(100vh - 40px)" }}
      >
        {/* toogle button */}
        <div className={`flex items-center justify-center py-8`}>
          FOR HIRING
          <TooglleBtn />
          FOR FREELANCERS
        </div>

        {/* hiring */}
        {userType!= "freelance" && <ForHiring />}

        {/* freelancers */}
        {userType== "freelance" && <ForFreelancer />}

      </div>

      <Start {...startContent}/>

      <Discover  />
    </div>
  )
}
