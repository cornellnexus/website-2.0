import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Modal from "./component/modal";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Cornell Nexus Project Team",
    template: "%s - Cornell Nexus Project Team",
  },
  description: "Cornell Nexus is a student-run project team at Cornell University building autonomous robots that filter microplastics from beach shores. Creating social impact through sustainable technology and environmental innovation.",
  keywords: ["Cornell", "Nexus", "robotics", "environmental", "microplastics", "sustainability", "technology", "beach cleaning", "project team"],
  openGraph: {
    title: "Cornell Nexus Project Team",
    description: "Cornell Nexus is a student-run project team at Cornell University building autonomous robots that filter microplastics from beach shores. Creating social impact through sustainable technology and environmental innovation.",
    type: "website",
    siteName: "Cornell Nexus Project Team",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <Navbar />
        {children}
        <Modal />
        <Footer />
      </body>
    </html>
  );
}
