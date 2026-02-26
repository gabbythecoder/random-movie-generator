import { Montserrat, Luckiest_Guy } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const luckiestGuy = Luckiest_Guy({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-luckiestguy"
})

export const metadata = {
  title: "Random Movie Generator",
  description: "An app that randomly generates your next movie to watch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${luckiestGuy.variable} h-full w-full overflow-x-hidden`}
      >
        <div className="flex flex-col min-h-screen">
          <main className="flex-1 overflow-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}
