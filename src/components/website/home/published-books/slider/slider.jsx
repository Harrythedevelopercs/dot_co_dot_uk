// Components
import { AutoPlaySlider } from "@/components"
// Media
import One from "media/home/published-books/1.jpg"
import Two from "media/home/published-books/2.jpg"
import Three from "media/home/published-books/3.jpg"
import Four from "media/home/published-books/4.jpg"
import Five from "media/home/published-books/5.jpg"
import Six from "media/home/published-books/6.jpg"
// Next
import Image from "next/image"
// Css
import style from "./slider.module.css"

const data = [
  {
    book: One,
    // title: "Echoes Of Resilience",
  },
  {
    book: Two,
    // title: "I Just Wanna Go Home",
  },
  {
    book: Three,
    // title: "Dirtman",
  },
  {
    book: Four,
    // title: "Japan Time Travel",
  },
  {
    book: Five,
    // title: "Baja Bay",
  },
  {
    book: Six,
    // title: "The Grand Leadership Strategy",
  },
  {
    book: One,
    // title: "Echoes Of Resilience",
  },
  {
    book: Two,
    // title: "I Just Wanna Go Home",
  },
  {
    book: Three,
    // title: "Dirtman",
  },
  {
    book: Four,
    // title: "Japan Time Travel",
  },
  {
    book: Five,
    // title: "Baja Bay",
  },
  {
    book: Six,
    // title: "The Grand Leadership Strategy",
  },
]

export default function Slider() {
  return (
    <AutoPlaySlider
      emblaWrapper="flex [margin-left:calc(50px_*_-1)]"
      wrapperClasses="overflow-visible"
      align="center"
      arrows={false}
    >
      {data.map(({ book, title },i) => (
        <div className={style.slides} key={i}>
          <Image src={book} alt="domain" className="!h-[350px]" />
          {/* <h3 className={style.title}>{title}</h3> */}
        </div>
      ))}
    </AutoPlaySlider>
  )
}
