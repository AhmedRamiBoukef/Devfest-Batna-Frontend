import { Header } from "../components/Dashboard/components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#f2f7ff]">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
