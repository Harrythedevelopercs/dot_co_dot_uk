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
       
        <div className="container">
          <div className={style.grids}>
            <div className={style.cols}>
              <h2 className={style.title}>
                Supercharge Your Book's Success with Expert Marketing from Best Publishing Service, LLC
              </h2>
              <p className={style.para}>
                Our comprehensive book marketing services help you create a strong author brand, boost sales, and connect with ideal readers through effective book promotion services.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-x-5 gap-y-2">
                {[
                  ["Find your perfect audience with targeted book advertising services"],
                  ["Tailored book promotion strategies to promote your book."],
                  ["Drive sales with our book marketing agency."],
                ].map(([description], i) => (
                  <li key={i} className="list-inside list-disc marker:text-[20px]">
                    {/* <h3 className="xl:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] font-extrabold leading-normal text-blue">
                      {counter}
                    </h3> */}
                    
                      {description}
                  </li>
                ))}
              </ul>

              <div className={style.cta}>
                <CTAGroupLight />
              </div>
            </div>
            <Image src={Book} alt="domain" className={style.img} width={500} height={300} />
          </div>
          
        </div>
         
      </div>
    </section>
  );
}
