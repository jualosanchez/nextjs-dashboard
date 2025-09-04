export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true} data-lt-installed="true">
      <body>{children}</body>
    </html>
  );
}
