import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
import FloatingCTA from "@/components/FloatingCTA";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
