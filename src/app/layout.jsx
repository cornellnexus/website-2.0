import Navbar from "./component/navbar";
import Footer from "./component/footer";

import "./globals.css";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Nexus at Cornell",
  description: "Student-run project team at Cornell University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <Navbar />
        <div className="page-wrapper pb-16 mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
