export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923214702737?text=Hi%20MJ%20Computer%20👋%20I%20want%20to%20know%20about%20a%20product."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:brightness-90 transition-all z-50"
      style={{ bottom: '55px', right: "10px", backgroundColor: "#25D366", color: "white" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12 .6 11.4 11.4 0 0 0 .6 12a11.33 11.33 0 0 0 1.6 5.84L.6 23.4l5.76-1.92A11.91 11.91 0 0 0 12 23.4 11.4 11.4 0 0 0 23.4 12a11.86 11.86 0 0 0-2.88-8.52Zm-8.52 17.1A9.78 9.78 0 0 1 6.6 19.8l-.42-.24-3.42 1.14 1.14-3.42-.24-.42a9.78 9.78 0 0 1-1.32-4.62 9.9 9.9 0 1 1 19.8 0 9.9 9.9 0 0 1-9.78 9.84Zm5.34-7.32c-.3-.15-1.77-.87-2.1-.99s-.48-.15-.69.15-.78.99-.96 1.2-.36.21-.66.06a8.08 8.08 0 0 1-4.14-3.63c-.3-.48.3-.45.87-1.5a.58.58 0 0 0 0-.54c-.06-.15-.69-1.68-.96-2.28-.27-.57-.54-.48-.75-.48h-.63c-.21 0-.54.09-.84.39s-1.11 1.08-1.11 2.64 1.14 3.06 1.29 3.27 2.19 3.36 5.28 4.62a18 18 0 0 0 1.8.54 4.2 4.2 0 0 0 1.92.12c.6-.09 1.77-.72 2.01-1.41a2.43 2.43 0 0 0 .18-1.41c-.27-.12-.51-.21-.81-.36Z" />
      </svg>
    </a>
  );
}
