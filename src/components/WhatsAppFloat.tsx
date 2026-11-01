
import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/919407072008?text=" +
  encodeURIComponent(
    "Hello Imperial Wellness Spa, I would like to know more about your massage services and book an appointment."
  );

export default function WhatsAppFloat() {
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Imperial Wellness Spa on WhatsApp"
      className="fixed bottom-5 right-5 z-[9999] flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_5px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)] sm:bottom-7 sm:right-7 sm:size-16"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-8 sm:size-9"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.48 0 .13 5.35.13 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.26-1.64a11.9 11.9 0 0 0 5.8 1.48h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.18-3.48-8.43ZM12.06 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.84 9.84 0 0 1-1.51-5.26c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.9a9.87 9.87 0 0 1 2.9 7.02c0 5.47-4.45 9.87-9.94 9.87Zm5.45-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.1 4.49.71.3 1.27.48 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.58-.35Z" />
      </svg>
    </Link>
  );
}
