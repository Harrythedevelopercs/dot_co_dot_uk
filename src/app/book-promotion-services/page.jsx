import { Awards, Banner1, Reviews, Traditional, TrustedClients } from "@/components";
import { BestSellers, ConvertTypes, Hero, Publishing, Publishing2, Solutions, Statistics } from "@/components/website/book-promotion-services";

export default function BookLaunchCampaigns() {
    return (
        <>
            <Hero />
            {/* <Awards /> */}
            <Publishing />
            {/* <Publishing2 /> */}
            <ConvertTypes />
            <BestSellers />
            <Solutions />
            <Statistics />
            <Traditional />
            <Banner1
                title="Need Help Fixing Book Launch Campaigns? Free Reputation Consultation"
                desc="Most of our clients were too… until they started working with us. Because at our Online Reputation Management company, we only make promises that we can keep. Book A Consultation to find out if our ORM agency can get you the results that you’re after."
            />
            <Reviews />
            {/* <TrustedClients /> */}
        </>
    )
}