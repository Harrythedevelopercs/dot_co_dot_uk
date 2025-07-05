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
} from "@/components/website/children-book-illustrations";

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
      span="<strong>Best Publishing Service, LLC</strong>"
        title="A World of Lively Children's Book Illustration Services"
        desc="Are you looking for visually appealing visuals for your children's book? BPS specializes in children's Book Illustration Services with custom artwork. Our team is easy to work with, highly skilled, and friendly.
        <br/><br/>
        We offer top-quality Book Illustration Services at affordable rates—with no hidden fees. If you're ready to hire a children's book illustrator for professional kid's book illustration or need charming cartoon illustration services, we're here to help you illustrate children's books with precision and passion."
      />
      <Reviews />
      {/* <TrustedClients /> */}
    </>
  );
}
