export default function RootLayout({ children }) {
  const themeScript = `
    (function () {
      try {
        var t = localStorage.getItem("theme");
        document.documentElement.classList.add(t === "light" ? "light" : "dark");
      } catch (e) {
        document.documentElement.classList.add("dark");
      }
    })();
  `;

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
