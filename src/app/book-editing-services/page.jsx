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
      <Traditional />
      <Banner1
      span="Best Publishing Service"
        title="A World of Lively Children's Book Illustration Services"
        desc="Are you looking for visually appealing visuals for your children's book? BPS specializes in children's book illustration services with custom artwork. Our team is easy to work with, highly skilled, and friendly.
        <br/><br/>
        We offer top-quality book illustration services at affordable rates—with no hidden fees. If you're ready to hire a children's book illustrator for professional kid's book illustration or need charming cartoon illustration services, we're here to help you illustrate children's books with precision and passion."
      />
      <Reviews />
      {/* <TrustedClients /> */}
    </>
  );
}
