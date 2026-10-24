const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const copyButton = document.getElementById("copyEmail");
const copyStatus = document.getElementById("copyStatus");
copyButton?.addEventListener("click", async () => {
  const email = copyButton.dataset.email;
  if (!email || email === "ADD_YOUR_EMAIL_HERE") {
    copyStatus.textContent = "Add your professional email in index.html first.";
    return;
  }
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = "Email copied!";
  } catch {
    copyStatus.textContent = `Email: ${email}`;
  }
});
