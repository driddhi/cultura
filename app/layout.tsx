import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cultura",
  description: "Discover Indian Classical & Cultural Dance Forms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        {/* (Optional) Navbar — I can generate this if you want */}
        {/* <Navbar /> */}

        {children}
      </body>
    </html>
  );
}
