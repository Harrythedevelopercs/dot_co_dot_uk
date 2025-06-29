// Css
import style from "./cards.module.css"
// Next
import Image from "next/image"
// Media
import One from "media/online-reputation-management/icons/2.png"
import Two from "media/online-reputation-management/icons/3.png"
import Three from "media/online-reputation-management/icons/4.png"
import Four from "media/online-reputation-management/icons/5.png"
import Five from "media/online-reputation-management/icons/6.png"
import Six from "media/online-reputation-management/icons/7.png"
const data = [
  {
    img: One,
    title: "Researching and Drafting The Outline",
    para: "Do you need a trusted team to refine your writing and make it flawless? Our skilled editors are ready to elevate your script with precision and utmost care.",
  },
  {
    img: Two,
    title: "Writing Genuine Content Based On Your Idea",
    para: "Do you need a trusted team to refine your writing and make it flawless? Our skilled editors are ready to elevate your script with precision and utmost care.",
  },
  {
    img: Three,
    title: "Critical Review, Editing, And Proofreading",
    para: "Do you need a trusted team to refine your writing and make it flawless? Our skilled editors are ready to elevate your script with precision and utmost care.",
  },
  {
    img: Four,
    title: "Formatting, Typesetting, And Designing",
    para: "Do you need a trusted team to refine your writing and make it flawless? Our skilled editors are ready to elevate your script with precision and utmost care.",
  },
  {
    img: Five,
    title: "Publishing, Branding, Marketing, And Promotions",
    para: "Do you need a trusted team to refine your writing and make it flawless? Our skilled editors are ready to elevate your script with precision and utmost care.",
  },
  {
    img: Six,
    title: "Content Strategy",
    para: "Craft a detailed and data-driven content plan tailored to your launch objectives. Align messaging across platforms, target the right audience, and build momentum with strategic content that drives engagement and conversions.",
  },
]

export default function Cards() {
  return (
    <div className={style.root}>
      {data.map(({ img, title, para }, i) => (
        <div key={i} className={`${style.cards} group`}>
          <Image
            src={img}
            alt="domain"
            className="group-hover:brightness-0 group-hover:invert"
          />
          <h3 className={`${style.title} group-hover:text-white`}>{title}</h3>
          <p className={`${style.para} group-hover:text-white`}>{para}</p>
        </div>
      ))}
    </div>
  )
}
