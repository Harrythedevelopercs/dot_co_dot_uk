// Css
import style from "./publishing.module.css";
// Next
import Image from "next/image";
// Media
import Checkbox from "media/home/checkbox-pink.svg";
import Book from "media/children-book-illustrations/child-img.png";
import CheckIcon from "media/children-book-illustrations/checkGreen.png";
// Components
import { CTAGroupLight } from "@/components";

export default function Publishing() {
  return (
    <section>
      <div className={style.root}>
        <Image src={Book} alt="domain" className={style.img} />
        <div className="container">
          <div className={style.grids}>
            <div className={style.cols}>
              <h2 className={style.title}>
                Can't Seem to Get Your Book Together?
              </h2>
              <p className={style.para}>
                Have an idea but can't seem to execute it? Our experts know why.
              </p>

              <ul className="mt-8 grid lg:grid-cols-2 grid-cols-1 gap-5">
                {[
                  "Not enough time.",
                  "Unsure how to publish.",
                  "Stuck in the story.",
                  "Worried about costs.",
                  "Where to hire children's book illustrator?",
                  "Lack of guidance.",
                  "No clear direction.",
                  "Marketing feels hard.",
                  "Inconsistent writing routine.",
                  "Trying to make it perfect.", 
                  "Feels overwhelming.",
                ].map((e, i) => (
                  <li
                    key={i}
                    className="flex font-comfortaa xl:text-base lg:text-[14px] text-[12px] font-medium leading-normal items-center gap-x-2"
                  >
                    <Image src={CheckIcon} alt="icon" className="shrink-0 brightness-0" />
                    <span className="block">{e}</span>
                  </li>
                ))}
              </ul>
              <div className={style.cta}>
                <CTAGroupLight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
