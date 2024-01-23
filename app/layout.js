import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Socket Chat",
  description: "A web based chat app powered by websockets ",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${inter.className} flex flex-col`}>
        <Header />
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
