import "@/styles/globals.css";
import Headernew from "../component/Headernew";
import Footer1 from "../component/Footer1";
import { SfProDisplay, primary } from "@/configs/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Header from "@/component/header2";

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${primary.className} ${SfProDisplay.variable}`}>
        <Headernew />
      
        <Component {...pageProps} />
        <Footer1 />
      </main>
    </>
  );
}