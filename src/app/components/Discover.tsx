import SliderCard from "./SliderCard"
import { useSearchParams } from 'next/navigation'

const Discover = () => {
    const searchParams = useSearchParams()
    const userType = searchParams.get('userType')

    const data = userType === "freelance"
        ? [
            { img: "/thumbnail5.png", title: "Personal website examples", description: "Learn how to make a personal website and get inspired by powerful websites from the CrewLance community. " },
            { img: "/thumbnail6.png", title: "Independent Contractors", description: " In recent years, many workers have traded traditional employment for freelance work. But what is an independent Contractor?" },
            { img: "/thumbnail7.png", title: "How to Create Case Studies", description: " Wondering how to create case studies and implement them effectively? This practical guide provides tips and case study examples. " },
            { img: "/thumbnail8.png", title: "How to Find Work as a Freelancer", description: "Wondering how to find work as a freelancer? CrewLance’s handy guide will fill you in with the best freelancing sites and freelance tips. " },

        ]
        : [
            { img: "/thumbnail1.png", title: "For CrewLance Clients", description: " With CrewLance, you can discover and hire top-notch talent, manage payments, Contracts, and projects, and work the way you want. " },
            { img: "/thumbnail2.png", title: "How to Hire on CrewLance", description: "There are three ways to hire on CrewLance — we’ll go through all three of these in this article and when to use each one! " },
            { img: "/thumbnail3.png", title: "Guide to Discover", description: "This guide will provide the steps to finding your perfect match on CrewLance using our Discover tool👇" },
            { img: "/thumbnail4.png", title: "Top Independents on CrewLance", description: " Everything you need to know about our Top Independents! " }
        ];


    return (
        <div>
            <div className="p-4">
                <div className="flex flex-col p-4 pt-10">

                    <div className="flex flex-row">
                        <h1 className="text-5xl mb-5">How to get started on Crewlance</h1>
                    </div>
                    
                    <SliderCard data={data} />
                </div>
            </div>
        </div>

    )
}

export default Discover