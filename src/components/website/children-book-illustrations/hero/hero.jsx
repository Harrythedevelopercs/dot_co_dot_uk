// Next
import Image from "next/image";
// Css
import style from "./hero.module.css";
// Media
import Bg from "media/book-launch-campaigns/hero-bg.png";
import CheckIcon from "media/children-book-illustrations/checkGreen.png";
// Components
import { CTAGroupDark } from "@/components";

export default function Hero() {
  return (
    <>
      <section>
        <div className={style.root}>
          <Image src={Bg} alt="domain" fill priority className={style.bg} />
          <div className="container">
            <div>
              <h1 className={style.title}>
                From Sketch to Storybook: Perfect Illustrations for Your
                Children's Book
              </h1>
              <p className={style.para}>
                Not all masterpieces are located in the museum. Best Publishing
                Services creates some with our expert children's book
                illustration.
              </p>
              <ul className="mt-8">
                {[
                  "Flexible Revision Services",
                  "24/7 Author Support Available",
                  "Dependable Deadline Management",
                ].map((e, i) => (
                  <li
                    key={i}
                    className="flex font-comfortaa text-base font-medium leading-normal items-center gap-x-2 mb-4"
                  >
                    <Image src={CheckIcon} alt="icon" className="shrink-0 invert brightness-0" />
                    <span className="block">{e}</span>
                  </li>
                ))}
              </ul>
              <div className={style.cta}>
                <CTAGroupDark />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
