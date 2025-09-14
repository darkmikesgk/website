export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Middleware обрабатывает редирект на локализованные маршруты
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
