import { ReactNode } from "react";
import Header from "../../src/navSection/Header";
import Footer from "../../src/navSection/Footer";


export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-375 mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
}