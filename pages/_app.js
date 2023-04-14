import "@components/styles/globals.css";
import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={robotoSlab.className}>
      <Component {...pageProps} />
    </main>
  );
}
