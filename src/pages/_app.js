import "@/styles/globals.css";
import { Navbar } from "../components/navbar";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-black ">
      <div className="fixed z-50 w-full ">
        <Navbar />
      </div>
      <div className="">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
