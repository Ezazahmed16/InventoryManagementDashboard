import { Inter } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "@/components/layout/DashboardWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inventory Managment",
  description: "Inventory Managment create Ezaz Ahmed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardWrapper>
          {children}
        </DashboardWrapper>
      </body>
    </html>
  );
}
