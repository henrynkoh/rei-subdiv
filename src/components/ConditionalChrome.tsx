"use client";

import { usePathname } from "next/navigation";
import { SiteChrome } from "@/components/SiteChrome";

export function ConditionalChrome() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <SiteChrome />;
}
