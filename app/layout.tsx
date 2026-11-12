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
            function fallbackCopy(email) {
              var area = document.createElement("textarea");
              area.value = email;
              area.setAttribute("readonly", "");
              area.style.position = "fixed";
              area.style.left = "-9999px";
              document.body.appendChild(area);
              area.select();
              try { area.setSelectionRange(0, area.value.length); } catch (e) {}
              var ok = false;
              try { ok = document.execCommand("copy"); } catch (e) {}
              area.remove();
              return ok;
            }
            function copyEmail(email) {
              var legacyOk = fallbackCopy(email);
              if (navigator.clipboard && navigator.clipboard.writeText) {
                var pending = navigator.clipboard.writeText(email).then(function () {
                  return true;
                }).catch(function () {
                  return legacyOk;
                });
                if (legacyOk) return Promise.resolve(true);
                return pending;
              }
              return Promise.resolve(legacyOk);
            }
            function restoreEmail(button) {
              if (!button) return;
              var email = button.getAttribute("data-copy-email");
              if (email) button.textContent = email;
              button.setAttribute("aria-label", "Copy email address");
            }
            function clearCopiedNote(root) {
              if (!root) return;
              root.removeAttribute("data-copied");
              var note = root.querySelector(".copied-note-text");
              if (note) note.textContent = "";
            }
            function cancelMobileAuto(root) {
              if (!root) return;
              window.clearTimeout(root.__autoCloseTimer);
              window.clearTimeout(root.__copiedHoldTimer);
              window.clearTimeout(root.__emailHideTimer);
              root.removeAttribute("data-email-hidden");
              restoreEmail(root.querySelector("[data-copy-email]"));
              clearCopiedNote(root);
            }
            function hideMobileEmail(root, button) {
              root.setAttribute("data-email-hidden", "true");
              root.__emailHideTimer = window.setTimeout(function () {
                if (root.getAttribute("data-email-hidden") !== "true") return;
                restoreEmail(button);
              }, 450);
            }
            function showMobileCopied(root, button) {
              if (!button) return;
              window.clearTimeout(root.__copiedHoldTimer);
              window.clearTimeout(root.__emailHideTimer);
              clearCopiedNote(root);
              button.textContent = "Copied";
              button.setAttribute("aria-label", "Email copied");
              root.__copiedHoldTimer = window.setTimeout(function () {
                var toggle = document.getElementById("mobile-contact-toggle");
                if (!toggle || !toggle.checked) return;
                hideMobileEmail(root, button);
              }, 1000);
            }
            function showCopied(slot, button) {
              if (button) button.setAttribute("aria-label", "Email copied");
              var note = slot.querySelector(".copied-note-text");
              if (note) note.textContent = "Copied";
              slot.setAttribute("data-copied", "true");
              window.clearTimeout(slot.__copiedTimer);
              slot.__copiedTimer = window.setTimeout(function () {
                slot.removeAttribute("data-copied");
                if (button) button.setAttribute("aria-label", "Copy email address");
                window.setTimeout(function () {
                  if (note) note.textContent = "";
                }, 400);
              }, 1000);
            }
            function armMobileCopied(root, toggle, button) {
              window.clearTimeout(root.__autoCloseTimer);
              window.clearTimeout(root.__copiedHoldTimer);
              root.__autoCloseTimer = window.setTimeout(function () {
                if (!toggle.checked) return;
                showMobileCopied(root, button);
              }, 1000);
            }
            function dismissContact(rootSelector, toggleId) {
              var toggle = document.getElementById(toggleId);
              var root = document.querySelector(rootSelector);
              if (rootSelector === ".mobile-contact") cancelMobileAuto(root);
              else if (root) window.clearTimeout(root.__autoCloseTimer);
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
              var toggle = document.getElementById("mobile-contact-toggle");
              var mailLabel = node.closest("label[for='mobile-contact-toggle']");
              if (mailLabel && toggle && !toggle.checked) {
                var contact = document.querySelector(".mobile-contact");
                var mailButton = contact && contact.querySelector("[data-copy-email]");
                var mail = mailButton && mailButton.getAttribute("data-copy-email");
                if (contact && mailButton && mail) {
                  contact.removeAttribute("data-email-hidden");
                  restoreEmail(mailButton);
                  var armed = false;
                  function armOnce() {
                    if (armed) return;
                    armed = true;
                    armMobileCopied(contact, toggle, mailButton);
                  }
                  copyEmail(mail).then(function (ok) {
                    if (ok) armOnce();
                  });
                }
              }
              var button = node.closest("[data-copy-email]");
              if (!button) return;
              var email = button.getAttribute("data-copy-email");
              var slot = button.closest(".email-slot, .mobile-contact");
              if (slot && slot.classList.contains("mobile-contact")) cancelMobileAuto(slot);
              else if (slot) window.clearTimeout(slot.__autoCloseTimer);
              var legacyOk = fallbackCopy(email);
              function mark() {
                if (slot && slot.classList.contains("mobile-contact")) {
                  showMobileCopied(slot, button);
                  return;
                }
                var emailToggle = document.getElementById("email-toggle");
                var contactToggle = document.getElementById("mobile-contact-toggle");
                if (emailToggle) emailToggle.checked = false;
                if (contactToggle) contactToggle.checked = false;
                if (!slot) return;
                showCopied(slot, button);
              }
              if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(mark).catch(function () {
                  if (legacyOk) mark();
                });
              } else if (legacyOk) {
                mark();
              }
            });
            document.addEventListener("change", function (event) {
              var toggle = event.target;
              if (!toggle || toggle.id !== "mobile-contact-toggle" || toggle.checked) return;
              cancelMobileAuto(document.querySelector(".mobile-contact"));
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
