import React from "react";

export default function InvoicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>Este es el layout del invoices</h1>
      {children}
    </section>
  );
}
