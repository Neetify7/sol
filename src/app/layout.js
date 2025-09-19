export const metadata = {
  title: "Pen Academy",
  description: "a academy for school enthusiasts alike",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}