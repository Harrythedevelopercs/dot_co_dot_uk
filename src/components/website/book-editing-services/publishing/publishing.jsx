// Css
import style from "./publishing.module.css";
// Next
import Image from "next/image";
// Media
import Checkbox from "media/home/checkbox-pink.svg";
import Book from "media/children-book-illustrations/pso2.png";
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
                Polish Your Pages: A Full Spectrum of Book Editing Services
              </h2>
              <p className={style.para}>
                Whether your manuscript tells a tale of triumph, a fantastic adventure, or a deeply personal journey, our expert book editors ensure your story shines, truly resonating with readers and making a lasting impact.
              </p>

              <ul className="mt-8 grid lg:grid-cols-2 grid-cols-1 gap-5">
                {[
                  "Manuscript Refinement",
                  "Copyediting & Line Editing",
                  "Thorough Proofreading",
                  "Developmental Guidance",
                  "Professional Formatting",
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
