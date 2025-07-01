import {
  Awards,
  Banner1,
  Reviews,
  Traditional,
  TrustedClients,
} from "@/components";
import {
  BestSellers,
  ConvertTypes,
  Hero,
  Publishing,
  Publishing2,
  Solutions,
  Statistics,
} from "@/components/website/book-editing-services";

export default function BookLaunchCampaigns() {
  return (
    <>
      <Hero />
      {/* <Awards /> */}
      <Publishing />
      <ConvertTypes />
      <BestSellers />
      <Publishing2 />
      <Solutions />
      <Statistics />
      {/* <Traditional /> */}
      <Banner1
      span="Best Publishing Service"
        title="A World of Expert Book Editing Services"
        desc="Are you looking for a polished, impactful manuscript for your book? BPS specializes in professional book editing services with meticulous attention to detail. Our team is easy to work with, highly skilled, and dedicated.
</br></br>
We offer top-quality book editing services at affordable rates—with no hidden fees. If you're ready to hire a professional book editor for developmental, copy, or proofreading services, we're here to help you refine your manuscript with precision and passion.
"
      />
      <Reviews />
      {/* <TrustedClients /> */}
    </>
  );
}
