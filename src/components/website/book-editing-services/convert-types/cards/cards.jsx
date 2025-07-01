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
    title: "Developmental Editing",
    para: "Hone your narrative structure, plot, and character development.",
  },
  {
    img: Two,
    title: "Copyediting & Line Editing",
    para: "Refine your prose, grammar, syntax, and style for maximum clarity.",
  },
  {
    img: Three,
    title: "Proofreading",
    para: "Eliminate final errors in spelling, punctuation, and formatting.",
  },
  {
    img: Four,
    title: "Manuscript Critique",
    para: "Receive detailed feedback to understand your book's strengths and areas for improvement.",
  },
  {
    img: Five,
    title: "Formatting Services",
    para: "Ensure your manuscript is professionally formatted for publication.",
  },
  {
    img: Six,
    title: "Editorial Consulting",
    para: "Develop a comprehensive editing plan aligning with your book's vision.",
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
