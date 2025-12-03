<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Portfolio — Coming Soon</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100 p-6">
  <main class="w-full max-w-3xl bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">

    <div class="flex items-center gap-4 mb-6">
      <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center font-bold text-white text-xl shadow-lg">YN</div>
      <div>
        <p class="text-sm text-slate-300 font-semibold">Your Name</p>
        <p class="text-xs text-slate-400">Frontend Developer • UI tinkerer</p>
      </div>
    </div>

    <h1 class="text-3xl font-bold mb-2">Portfolio — Coming Soon</h1>
    <p class="text-slate-300 mb-6">I'm building something clean & fast — subscribe to be notified when it's ready.</p>

    <div class="flex flex-wrap gap-3 mb-6">
      <button onclick="document.getElementById('email').focus()" class="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg border border-white/10 text-sm font-medium">Notify Me</button>
      <a href="https://github.com/" target="_blank" class="px-4 py-2 bg-transparent hover:bg-white/5 rounded-lg border border-white/10 text-sm font-medium">GitHub</a>
      <a href="https://www.linkedin.com/" target="_blank" class="px-4 py-2 bg-transparent hover:bg-white/5 rounded-lg border border-white/10 text-sm font-medium">LinkedIn</a>
    </div>

    <p class="font-semibold text-slate-200 mb-6">Launch in <span id="time" class="text-cyan-400">...</span></p>

    <div class="bg-white/5 p-5 rounded-xl border border-white/10">
      <h3 class="text-lg font-semibold mb-2">Get Notified</h3>
      <p class="text-sm text-slate-300 mb-3">Masukkan emailmu untuk menerima pemberitahuan ketika website sudah live.</p>

      <form id="notifyForm" class="flex gap-2" onsubmit="return submitForm(event)">
        <input id="email" type="email" placeholder="you@example.com" required class="flex-1 bg-transparent border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-cyan-400" />
        <button type="submit" class="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-semibold rounded-lg text-sm">Submit</button>
      </form>

      <p id="msg" class="text-sm mt-2"></p>

      <div class="flex gap-2 mt-4">
        <a href="https://github.com/" class="px-3 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">GitHub</a>
        <a href="https://twitter.com/" class="px-3 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">Twitter</a>
        <a href="https://linkedin.com/" class="px-3 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">LinkedIn</a>
      </div>
    </div>

    <p class="text-xs text-slate-500 mt-6">Upload file ini sebagai <b>index.html</b> ke GitHub Pages untuk langsung online.</p>

  </main>

  <script>
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 10);

    function updateCountdown() {
      const now = new Date();
      const diff = launchDate - now;
      if (diff <= 0) {
        document.getElementById('time').textContent = 'Site is Live!';
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      document.getElementById('time').textContent = `${d}d ${h}h ${m}m ${s}s`;
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();

    function submitForm(e) {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('msg');

      if (!email) {
        msg.textContent = 'Email tidak boleh kosong.';
        msg.className = 'text-red-400 text-sm mt-2';
        return false;
      }

      const list = JSON.parse(localStorage.getItem('subs') || '[]');

      if (list.includes(email)) {
        msg.textContent = 'Email sudah terdaftar.';
        msg.className = 'text-yellow-300 text-sm mt-2';
      } else {
        list.push(email);
        localStorage.setItem('subs', JSON.stringify(list));
        msg.textContent = 'Berhasil! Kamu akan dihubungi saat website selesai.';
        msg.className = 'text-green-400 text-sm mt-2';
        document.getElementById('email').value = '';
      }

      return false;
    }
  </script>
</body>
</html>
