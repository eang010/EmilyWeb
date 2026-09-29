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
  title: "Emily Ang",
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
            function dismissContact(rootSelector, toggleId) {
              var toggle = document.getElementById(toggleId);
              var root = document.querySelector(rootSelector);
              var open = toggle && toggle.checked;
              var copied = root && root.getAttribute("data-copied") === "true";
              if (!open && !copied) return;
              if (toggle) toggle.checked = false;
              if (!root) return;
              window.clearTimeout(root.__copiedTimer);
              root.removeAttribute("data-copied");
              var note = root.querySelector(".copied-note-text");
              if (note) note.textContent = "";
              var copyButton = root.querySelector("[data-copy-email]");
              if (copyButton) copyButton.setAttribute("aria-label", "Copy email address");
            }
            document.addEventListener("click", function (event) {
              var node = event.target;
              if (node && node.nodeType === 3) node = node.parentElement;
              if (!node || !node.closest) return;
              if (!node.closest(".mobile-contact")) dismissContact(".mobile-contact", "mobile-contact-toggle");
              if (!node.closest(".email-slot")) dismissContact(".email-slot", "email-toggle");
              var button = node.closest("[data-copy-email]");
              if (!button) return;
              var email = button.getAttribute("data-copy-email");
              function mark() {
                button.setAttribute("aria-label", "Email copied");
                var emailToggle = document.getElementById("email-toggle");
                var contactToggle = document.getElementById("mobile-contact-toggle");
                if (emailToggle) emailToggle.checked = false;
                if (contactToggle) contactToggle.checked = false;
                var slot = button.closest(".email-slot, .mobile-contact");
                if (!slot) return;
                var note = slot.querySelector(".copied-note-text");
                if (note) note.textContent = "Copied";
                slot.setAttribute("data-copied", "true");
                window.clearTimeout(slot.__copiedTimer);
                slot.__copiedTimer = window.setTimeout(function () {
                  slot.removeAttribute("data-copied");
                  button.setAttribute("aria-label", "Copy email address");
                  window.setTimeout(function () {
                    if (note) note.textContent = "";
                  }, 400);
                }, 1000);
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
        <Script id="scroll-up" strategy="beforeInteractive">{`
          (function () {
            if (window.__scrollUpBound) return;
            window.__scrollUpBound = true;
            function button() {
              return document.querySelector(".scroll-up");
            }
            function sync() {
              var btn = button();
              if (!btn) return;
              var on = window.scrollY > 48;
              btn.classList.toggle("is-on", on);
              btn.setAttribute("aria-label", document.querySelector(".about-page") ? "Back to top" : "Up one section");
              if (on) {
                btn.removeAttribute("aria-hidden");
                btn.tabIndex = 0;
              } else {
                btn.setAttribute("aria-hidden", "true");
                btn.tabIndex = -1;
              }
            }
            function stops() {
              var nodes = document.querySelectorAll("main h1, main h2");
              var tops = [];
              for (var i = 0; i < nodes.length; i++) {
                var node = nodes[i];
                if (node.classList.contains("sr-only") || !node.getClientRects().length) continue;
                tops.push(node.getBoundingClientRect().top + window.scrollY);
              }
              tops.sort(function (a, b) { return a - b; });
              var list = [0];
              for (var j = 0; j < tops.length; j++) {
                if (tops[j] < 160) continue;
                if (tops[j] - list[list.length - 1] > 80) list.push(tops[j]);
              }
              return list;
            }
            document.addEventListener("click", function (event) {
              var node = event.target;
              if (node && node.nodeType === 3) node = node.parentElement;
              if (!node || !node.closest || !node.closest(".scroll-up")) return;
              var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
              if (document.querySelector(".about-page")) {
                window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
                return;
              }
              var header = document.querySelector("[data-site-header]");
              var offset = header ? header.getBoundingClientRect().height : 0;
              var current = window.scrollY;
              var list = stops();
              var target = 0;
              for (var i = 0; i < list.length; i++) {
                if (list[i] < current - 24) target = list[i];
              }
              var top = target === 0 ? 0 : Math.max(0, target - offset);
              window.scrollTo({ top: top, behavior: reduce ? "auto" : "smooth" });
            });
            window.addEventListener("scroll", sync, { passive: true });
            document.addEventListener("DOMContentLoaded", sync);
            if (document.readyState !== "loading") sync();
          })();
        `}</Script>
        <SiteChrome />
        <main className="@container px-6 pt-2 pb-28 lg:pt-9 lg:pr-9 lg:pb-16 lg:pl-[calc(15rem+2.25rem)]">
          {children}
        </main>
      </body>
    </html>
  );
}
