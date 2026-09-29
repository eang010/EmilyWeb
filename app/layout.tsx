import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: "Emily Ang — Digital Business Analyst",
  description:
    "Digital business analyst. Selected work, a short CV, and a direct way to get in touch.",
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plex.variable} h-full`}>
      <body className="min-h-full bg-paper font-sans text-foreground antialiased">
        <Script id="copy-email" strategy="beforeInteractive">{`
          (function () {
            if (window.__copyEmailBound) return;
            window.__copyEmailBound = true;
            document.addEventListener("click", function (event) {
              var node = event.target;
              if (!node || !node.closest) return;
              var button = node.closest("[data-copy-email]");
              if (!button) return;
              var email = button.getAttribute("data-copy-email");
              function mark() {
                button.setAttribute("data-copied", "true");
                button.setAttribute("aria-label", "Email copied");
                var emailToggle = document.getElementById("email-toggle");
                var contactToggle = document.getElementById("mobile-contact-toggle");
                if (emailToggle) emailToggle.checked = false;
                if (contactToggle) contactToggle.checked = false;
                window.setTimeout(function () {
                  button.removeAttribute("data-copied");
                  button.setAttribute("aria-label", "Copy email address");
                }, 1500);
              }
              function fallback() {
                var area = document.createElement("textarea");
                area.value = email;
                area.setAttribute("readonly", "");
                area.style.position = "fixed";
                area.style.left = "-9999px";
                document.body.appendChild(area);
                area.select();
                try { document.execCommand("copy"); } catch (e) {}
                area.remove();
                mark();
              }
              if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(mark).catch(fallback);
              } else {
                fallback();
              }
            });
          })();
        `}</Script>
        <SiteChrome />
        <main className="px-6 pt-2 pb-28 lg:pt-9 lg:pr-9 lg:pb-16 lg:pl-[calc(15rem+2.25rem)]">
          {children}
        </main>
      </body>
    </html>
  );
}
