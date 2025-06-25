// Css
import style from "./publishing.module.css";
// Next
import Image from "next/image";
// Media
import Checkbox from "media/home/checkbox-pink.svg";
import Book from "media/book-pormotion-sesrvices/rework.png";
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
                Build Your Brand with Our Book Marketing Services
              </h2>
              <p className={style.para}>
                With trends changing, understanding the world of book marketing
                may be difficult. As your trusted digital marketing partner, we
                provide customized marketing strategies adapted to your goals
                and budget—ensuring your book is recognized by the readers who
                matter most.
              </p>

              <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4">
                {[
                  ["50+", "Expert"],
                  ["10+", "Years of Experience"],
                  ["20+", "Internationally Best Sellers"],
                  ["600+", "Books Published"],
                ].map(([counter, description], i) => (
                  <li key={i}>
                    <h3 className="xl:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] font-extrabold leading-normal text-blue">
                      {counter}
                    </h3>
                    <span className="block xl:text-[16px] md:text-[15px] text-[13px] font-bold  leading-normal">
                      {description}
                    </span>
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
