import { Awards, Banner1, Reviews, Traditional, TrustedClients } from "@/components";
import { Campaign, ConvertTypes, EmailsSlap, Hero, MailBenefit, Templates } from "@/components/website/email-newsletter";

export default function EmailNewsletter() {
    return (
        <>
            <Hero />
            <Awards />
            <MailBenefit />
            <ConvertTypes />
            <EmailsSlap />
            <Templates />
            <Campaign />
            <Traditional />
            <Banner1
                title="Tired of Best Publishing Services Companies That Ghost?"
                desc="Unlike other companies, Best Publishing Services is committed to delivering every promise made. With our  help, you’re never at risk of being left stranded."
            />
            <Reviews />
            <TrustedClients />
        </>
    )
}