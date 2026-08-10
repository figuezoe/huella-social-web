import "./globals.css";

export const metadata = {
  title: "Huella Social Fundraising",
  description: "Agencia queretana especializada en fundraising Face to Face para organizaciones sociales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
