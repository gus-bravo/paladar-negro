// navbar.js

document.addEventListener("DOMContentLoaded", () => {
  const navbar = `
    <nav
      aria-label="Barra de navegación"
      class="bg-gray-900 text-white fixed top-0 w-full shadow z-50"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <a href="#home" class="text-xl font-bold">Paladar Negro</a>

          <!-- Menu escritorio -->
          <div class="hidden md:flex space-x-4">
            <a href="#home" class="hover:text-yellow-400">Inicio</a>
            <a href="#products" class="hover:text-yellow-400">Productos</a>
            <a href="#contact" class="hover:text-yellow-400">Contacto</a>
          </div>

          <!-- Botón menú móvil -->
          <div class="md:hidden">
            <button
              id="menu-btn"
              aria-expanded="false"
              aria-controls="mobile-menu"
              aria-label="Abrir menú de navegación"
              class="text-white focus:outline-none"
            >
              <i data-lucide="menu"></i>
            </button>
          </div>
        </div>

        <!-- Menú móvil -->
        <div id="nav-links" class="hidden md:hidden mt-2 space-y-2">
          <a href="#home" class="block hover:text-yellow-400">Inicio</a>
          <a href="#products" class="block hover:text-yellow-400">Productos</a>
          <a href="#contact" class="block hover:text-yellow-400">Contacto</a>
        </div>
      </div>
    </nav>
  `;

  // Insertar al principio del <body>
  document.querySelector("header").innerHTML = navbarHTML;

  // Activar íconos Lucide
  if (window.lucide) lucide.createIcons();

  // Toggle menú móvil
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !expanded);
    navLinks.classList.toggle("hidden");
  });
});
