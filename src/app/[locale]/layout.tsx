import * as React from "react";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

import Box from "@mui/material/Box";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import DefaultLayout from "@/components/DefaultLayout";

export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};

const DRAWER_WIDTH = 240;
const locales = ["en", "bn"];

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  console.log(locale);

  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);

  if (!isValidLocale) notFound();

  return (
    <html lang={locale}>
      <body>
        <ThemeRegistry>
          <DefaultLayout>{children}</DefaultLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
