import "./globals.css";
import AppLayout from "@/components/AppLayout";

export const metadata = {
  title: "IPhub — Центр интеллектуальной собственности",
  description: "Индивидуальные правовые решения для защиты и охраны нематериальных активов в России и по всему миру.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
