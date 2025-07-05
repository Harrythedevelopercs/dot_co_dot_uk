// Components
import { Awards, Reviews, Traditional, TrustedClients, WhyChoose } from "@/components";
import { AboutMarketing, BelieveIn, Hero } from "@/components/website/about-us";
// Media
import Icon1 from "media/about-us/icons/1.png"
import Icon2 from "media/about-us/icons/2.png"
import Icon3 from "media/about-us/icons/3.png"
import Icon4 from "media/about-us/icons/4.png"
export default function AboutUs() {
    return (
        <>
            <Hero />
            <AboutMarketing />
            <BelieveIn />
            <Traditional />
            <WhyChoose title="Why Choose Best Publishing Service, LLC."
                desc="At Best Publishing Service, LLC, we are dedicated to bringing your Audiobook to life. With tailored solutions, innovative tools, and a committed team, we combine creativity and expertise to ensure your Audiobook reaches the listeners it deserves."
                data={[
                    {
                        icon: Icon1,
                        title: "Expert Audiobook Guidance",
                        desc: "Our team brings years of Audiobook expertise to help shape, refine, and elevate your content, ensuring a professional and engaging experience."
                    },
                    {
                        icon: Icon2,
                        title: "Customized Marketing Solutions",
                        desc: "We develop targeted marketing strategies to reach your ideal listeners, amplifying your Audiobook’s reach and growing your audience."
                    },
                    {
                        icon: Icon3,
                        title: "Advanced Recording Tools",
                        desc: "Access cutting-edge technology and high-quality recording tools designed to make your Audiobook sound top-notch and keep your listeners hooked."
                    },
                    {
                        icon: Icon4,
                        title: "Engaged Listener Community",
                        desc: "Join a vibrant community of Audiobook enthusiasts who support, inspire, and connect with you as your Audiobook journey."
                    }
                ]}
            />
            <Reviews />
            {/* <TrustedClients /> */}
        </>
    )
};