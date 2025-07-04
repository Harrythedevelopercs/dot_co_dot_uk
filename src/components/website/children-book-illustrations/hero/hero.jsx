// Next
import Image from "next/image";
// Css
import style from "./hero.module.css";
// Media
import Bg from "media/children-book-illustrations/hero-bg.webp";
import Child1 from "media/children-book-illustrations/slide-01.webp";
import Child2 from "media/children-book-illustrations/slide-02.webp";
import Child3 from "media/children-book-illustrations/slide-03.webp";
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
        <div className="hidden xl:block xl:mt-[-12%] !z-50 relative">
                <div className="flex gap-x-5 items-center justify-center mx-10">
                  <Image src={Child1} width={600} height={600} className="" alt="children-book-illustrations"/>
                  <Image src={Child2} width={600} height={600} className="" alt="children-book-illustrations"/>
                  <Image src={Child3} width={600} height={600} className="" alt="children-book-illustrations"/>
                </div>
            </div>
      </section>
    </>
  );
}
