// footer.js

document.addEventListener("DOMContentLoaded", () => {
  const footer = `
    <footer class="bg-gray-800 text-white py-8 mt-12">
      <div
        class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0"
      >
        <!-- Logo o Nombre -->
        <div>
          <h2 class="text-2xl font-bold">
            <a href="#home" class="hover:underline">Paladar Negro</a>
          </h2>
          <p class="text-sm text-gray-400">
            © <span id="year"></span> Paladar Negro. Todos los derechos
            reservados.
          </p>
        </div>

        <!-- Enlaces rápidos -->
        <div class="space-x-4">
          <a
            href="#home"
            class="hover:underline text-gray-300 transition hover:text-white"
          >Inicio</a>
          <a
            href="#products"
            class="hover:underline text-gray-300 transition hover:text-white"
          >Productos</a>
          <a
            href="#contact"
            class="hover:underline text-gray-300 transition hover:text-white"
          >Contacto</a>
        </div>

        <!-- Redes sociales -->
        <div class="flex space-x-4">
          <a
            href="https://www.instagram.com/paladar_negro_gourmet/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Paladar Negro"
            class="hover:text-pink-400 transition"
          >
            <i data-lucide="instagram" class="w-6 h-6"></i>
          </a>
        </div>
      </div>
    </footer>
  `;

  // Insertar al final del <body>
  document.querySelector("footer").innerHTML = footer;

  // Activar íconos de Lucide
  if (window.lucide) lucide.createIcons();

  // Actualizar año actual
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
