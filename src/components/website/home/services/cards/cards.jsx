// Components
import { CTA, MobileRender } from "@/components"
// Next
import Image from "next/image"
// Media
import Promo from "media/home/services/promo.png"
// Css
import styles from "./cards.module.css"

const data = [
  {
    title: "Author Seller </br> Badge",
    para: "Achieve the coveted Best Seller Badge and boost your book’s credibility, sales, and visibility on the world’s largest book marketplace. Unlock unparalleled recognition and stand out in a competitive market.",
    cta: "Read More",
    ctaLink: "javascript:;",
  },
  {
    title: "Online <br class='hidden sm:block' /> Reputation Management",
    para: "Enhance your author brand with expert reputation management, ensuring positive reviews, media presence, and trust-building across online platforms.",
    cta: "Read More",
    ctaLink: "javascript:;",
  },
  {
    title: "Building an  <br class='hidden sm:block' /> Online Presence",
    para: "Establish a powerful online presence with strategic Best Publishing Services, helping you connect with readers, increase engagement, and boost book sales by creating a strong online presence. Start with your website now!",
    cta: "Read More",
    ctaLink: "javascript:;",
  },
  {
    title: "Search Engine <br class='hidden sm:block' /> Optimization (SEO)",
    para: "Optimize your book and author website with advanced SEO strategies, ensuring higher search rankings, increased traffic, and maximum discoverability.",
    cta: "Read More",
    ctaLink: "javascript:;",
  },
  {
    title: "Social Media <br class='hidden sm:block' /> Marketing (SMM)",
    para: "Leverage powerful social media marketing to promote your book, grow your audience, and drive engagement across Facebook, Instagram, Twitter, and more.",
    cta: "Read More",
    ctaLink: "javascript:;",
  },
  {
    title: "Book Video <br class='hidden sm:block' /> Trailer",
    para: "Captivate readers with a professional book video trailer, designed to visually showcase your story and generate excitement across digital platforms.",
    cta: "Read More",
    ctaLink: "javascript:;",
  },
  {
    title: "Influencer <br class='hidden sm:block' /> Marketing",
    para: "Boost book sales with strategic influencer marketing, connecting your book withinfluencers, bloggers, and reviewers in your genre. Get the word around with influencers your Target Audience can connect and relate with.",
    cta: "Read More",
    ctaLink: "javascript:;",
  },
  {
    title: "Press Release<br class='hidden sm:block' /> & Publications",
    para: "Get your book featured in major media outlets with a compelling press release, enhancing credibility, visibility, and reader interest. We have some of the best platforms on board to spread the word around. ",
    cta: "Read More",
    ctaLink: "javascript:;",
  },
  {
    title: "Paid Ad  <br class='hidden sm:block' /> Campaigns",
    para: "Maximize book sales with targeted paid ad campaigns on Amazon, Facebook, and Google, reaching your ideal audience with precision.",
    cta: "Read More",
    ctaLink: "javascript:;",
  },
  {
    title: "TV <br class='hidden sm:block' /> Interviews",
    para: "Increase your author brand’s credibility with expert-arranged TV interviews, putting your book in front of a massive audience.",
    cta: "Read More",
    ctaLink: "javascript:;",
  },
  {
    title: "Podcasts & <br class='hidden sm:block' />  TV Interviews",
    para: "Expand your reach with exclusive podcast and TV interviews, positioning you as an expert and promoting your book to the right audience.",
    cta: "Read More",
    ctaLink: "javascript:;",
  },
  {
    title: "Email <br class='hidden sm:block' /> Marketing",
    para: "Drive book sales with high-converting email marketing, connecting directly with readers through engaging newsletters and promotional campaigns.",
    cta: "Read More",
    ctaLink: "javascript:;",
  },
  {
    title: "Times Square <br class='hidden sm:block' /> Advertising",
    para: "Magazines are the perfect resolution to get your book the international recognition it deserves. ",
    cta: "Read More",
    ctaLink: "javascript:;",
  },
]

export default function Cards() {
  return (
    <div className={styles.root}>
      {data.map(({ title, para, cta, ctaLink }) => (
        <div key={title} className={`${styles.cards} group`}>
          <h3
            className={`${styles.title} group-hover:text-white`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className={`${styles.para} group-hover:text-white`}>{para}</p>
          <div
            className={styles.cta}
            dangerouslySetInnerHTML={{
              __html: `<a href=${ctaLink} onclick="parent.LC_API.open_chat_window();return false;">
                                ${cta}
                                <img src="/icons/right-chevron.svg" width="8" height="13" alt="domain" />
                            </a>`,
            }}
          />
        </div>
      ))}
      <MobileRender>
        <div className={styles.promo}>
          <div>
            <h3 className={styles.title}>Start Your Book Publishing Now!</h3>
            <p className={styles.para}>
              Get in touch with our Publishing Services Experts and get the best plan
              tailored as per your needs.
            </p>
            <CTA
              css="bg-white text-purple font-manrope font-medium capitalize [boxShadow:0px_5px_15px_rgba(15,_23,_42,_0.1)] hover:bg-black hover:border hover:border-white hover:text-white"
              text="Let’s Talk!"
              icon="chat-pink"
            />
          </div>
          <Image src={Promo} alt="domain" />
        </div>
      </MobileRender>
    </div>
  )
}
