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
    title: "Ebook Conversion",
    para: "Convert your book into digital formats for seamless distribution on major e-book platforms.",
  },
  {
    img: Two,
    title: "Custom Illustration Services",
    para: "Bring your characters and stories to life with captivating artwork tailored for young readers.",
  },
  {
    img: Three,
    title: "Manuscript Preparation",
    para: "Refine your text for clarity, flow, and age-appropriateness, preparing it for publication.",
  },
  {
    img: Four,
    title: "Book Design & Layout",
    para: "Create an engaging and visually appealing interior and cover design for your children's book.",
  },
  {
    img: Five,
    title: "Editorial & Proofreading",
    para: "Ensure your manuscript is polished and error-free, meeting publishing standards.",
  },
  {
    img: Six,
    title: "Print-Ready File Creation",
    para: "Prepare high-quality files optimized for various printing methods, from paperback to hardcover.",
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
