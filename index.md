<!--
  File: index.html
  Purpose: Simple responsive portfolio ready for GitHub Pages using Tailwind CSS (CDN).
  How to use:
    1. Rename file to index.html and push to your GitHub repo's root (or branch gh-pages).
    2. Edit the sections below: HERO, ABOUT, PROJECTS, CONTACT.
    3. Replace placeholder images and links with your own.

  Note: This uses Tailwind via CDN (cdn.tailwindcss.com). For production, consider building Tailwind locally.
-->

<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Portfolio - [Nama Kamu] | Frontend Developer & Designer" />
  <title>Portfolio • [Nama Kamu]</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: { primary: '#0ea5a4', accent: '#7c3aed' }
        }
      }
    }
  </script>
  <style>
    /* Small helper to show placeholder images as blurred blocks */
    .placeholder { background: linear-gradient(90deg,#e5e7eb,#f3f4f6); min-height:150px }
  </style>
</head>
<body class="bg-white text-slate-800 antialiased">
  <header class="sticky top-0 z-30 bg-white/60 backdrop-blur-md border-b border-slate-200">
    <div class="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
      <a href="#home" class="font-semibold text-lg text-slate-900">[Nama Kamu]</a>
      <nav class="hidden md:flex gap-4 items-center text-sm">
        <a href="#projects" class="hover:text-primary">Projects</a>
        <a href="#about" class="hover:text-primary">About</a>
        <a href="#contact" class="hover:text-primary">Contact</a>
        <a href="https://github.com/USERNAME" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-3 py-1.5 border rounded-md text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.92 3.18 9.09 7.59 10.56.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.96-3.09.67-3.75-1.49-3.75-1.49-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1.01 1.73 2.64 1.23 3.28.94.1-.74.39-1.23.71-1.51-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.2 1.14-2.98-.12-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.14a10.6 10.6 0 012.78-.37c.94 0 1.88.13 2.78.37 2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.12 2.94.71.78 1.14 1.77 1.14 2.98 0 4.27-2.61 5.22-5.09 5.5.4.35.75 1.05.75 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.21.65.78.54C19.07 20.85 22.25 16.68 22.25 11.76 22.25 5.48 17.27.5 12 .5z"/></svg>
          GitHub
        </a>
      </nav>
      <div class="md:hidden">
        <button id="menuBtn" aria-label="menu" class="p-2 rounded-md border">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>
    <!-- Mobile menu -->
    <div id="mobileMenu" class="md:hidden hidden border-t border-slate-100">
      <div class="px-6 py-4 flex flex-col gap-3">
        <a href="#projects" class="block">Projects</a>
        <a href="#about" class="block">About</a>
        <a href="#contact" class="block">Contact</a>
        <a href="https://github.com/USERNAME" target="_blank" rel="noopener" class="block">GitHub</a>
      </div>
    </div>
  </header>

  <main class="max-w-4xl mx-auto px-6 py-12" id="home">
    <!-- HERO -->
    <section class="grid gap-8 md:grid-cols-2 md:items-center">
      <div>
        <p class="text-sm text-slate-500">Hello, my name is</p>
        <h1 class="text-3xl sm:text-4xl font-bold mt-2">[Nama Kamu]</h1>
        <p class="mt-4 text-slate-700">Frontend developer & designer yang membangun antarmuka yang cepat, rapi, dan mudah dipakai. Spesialisasi: HTML, CSS, Tailwind, JavaScript, React.</p>

        <div class="mt-6 flex gap-3">
          <a href="#projects" class="inline-block px-4 py-2 rounded-md bg-primary text-white">Lihat Project</a>
          <a href="#contact" class="inline-block px-4 py-2 rounded-md border">Kontak</a>
        </div>

        <div class="mt-6 text-sm text-slate-500">
          <span class="font-medium">Availability:</span> Open for freelance & internship
        </div>
      </div>

      <div class="flex items-center justify-center">
        <div class="w-full max-w-xs rounded-2xl overflow-hidden shadow-lg">
          <div class="placeholder flex items-center justify-center">Foto / Screenshot Project</div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="mt-16">
      <h2 class="text-2xl font-semibold">Selected Projects</h2>
      <p class="text-slate-500 mt-1">Proyek-proyek terbaru saya. Klik untuk melihat detail atau demo.</p>

      <div class="mt-6 grid gap-6 sm:grid-cols-2">
        <!-- project card -->
        <article class="border rounded-xl p-4 hover:shadow-md transition">
          <div class="placeholder rounded-md">Screenshot</div>
          <h3 class="mt-3 font-semibold">Project Title 1</h3>
          <p class="mt-1 text-sm text-slate-600">Deskripsi singkat project: teknologi yang dipakai, peran, dan hasil.</p>
          <div class="mt-3 flex items-center gap-3">
            <a href="#" class="text-sm underline">Live demo</a>
            <a href="#" class="text-sm underline">Repo</a>
          </div>
        </article>

        <article class="border rounded-xl p-4 hover:shadow-md transition">
          <div class="placeholder rounded-md">Screenshot</div>
          <h3 class="mt-3 font-semibold">Project Title 2</h3>
          <p class="mt-1 text-sm text-slate-600">Deskripsi singkat project: teknologi yang dipakai, peran, dan hasil.</p>
          <div class="mt-3 flex items-center gap-3">
            <a href="#" class="text-sm underline">Live demo</a>
            <a href="#" class="text-sm underline">Repo</a>
          </div>
        </article>

        <!-- add more cards as needed -->
      </div>

      <div class="mt-6 text-center">
        <a href="#" class="inline-block px-4 py-2 rounded-md border">Lihat semua project</a>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="mt-16">
      <h2 class="text-2xl font-semibold">About Me</h2>
      <div class="mt-4 text-slate-700 space-y-3">
        <p>Saya lulusan Teknologi Informasi (2025) dengan pengalaman di web development, desain UI, dan manajemen proyek. Saya suka membangun UI yang bersih dan performa baik.</p>
        <ul class="list-disc list-inside text-sm text-slate-600">
          <li>Skills: HTML, CSS, Tailwind, JavaScript, React</li>
          <li>Tools: Git, Figma, VSCode</li>
          <li>Languages: Indonesian (native), English (intermediate)</li>
        </ul>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="mt-16">
      <h2 class="text-2xl font-semibold">Contact</h2>
      <p class="text-slate-600 mt-2">Tertarik bekerja sama atau ingin tanya-tanya? Hubungi saya lewat:</p>

      <div class="mt-4 grid gap-4 sm:grid-cols-2">
        <div class="border rounded-lg p-4">
          <h4 class="font-medium">Email</h4>
          <p class="text-sm text-slate-600 mt-1">youremail@example.com</p>
        </div>
        <div class="border rounded-lg p-4">
          <h4 class="font-medium">WhatsApp</h4>
          <p class="text-sm text-slate-600 mt-1"><a href="https://wa.me/628123456789" target="_blank" rel="noopener">+62 812-3456-789</a></p>
        </div>
      </div>

      <div class="mt-6">
        <a href="mailto:youremail@example.com" class="inline-block px-4 py-2 rounded-md bg-accent text-white">Kirim Email</a>
      </div>
    </section>

  </main>

  <footer class="border-t mt-20 py-6">
    <div class="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-sm text-slate-600">© <span id="year"></span> [Nama Kamu]. All rights reserved.</p>
      <div class="flex gap-3">
        <a href="#" aria-label="twitter">Twitter</a>
        <a href="#" aria-label="linkedin">LinkedIn</a>
        <a href="#" aria-label="github">GitHub</a>
      </div>
    </div>
  </footer>

  <script>
    // small interactivity
    document.getElementById('year').textContent = new Date().getFullYear();
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  </script>
</body>
</html>
