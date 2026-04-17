import React, { useState } from "react";
import boosterImg from "./assets/booster.png";
import "./App.css";

const App = () => {
  const [activeSong, setActiveSong] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const songs = [
    {
      title: "TikToker",
      artist: "Real Roddy",
      embed: "https://www.youtube.com/embed/-16doFw4KaM",
      thumb: "https://img.youtube.com/vi/-16doFw4KaM/maxresdefault.jpg"
    },
    {
      title: "Natinatina",
      artist: "The Real Gasana",
      embed: "https://www.youtube.com/embed/j6e_89i-W5c",
      thumb: "https://img.youtube.com/vi/j6e_89i-W5c/maxresdefault.jpg"
    },
    {
      title: "Underage",
      artist: "Olimah",
      embed: "https://www.youtube.com/embed/cXwl2obH2Rc",
      thumb: "https://img.youtube.com/vi/cXwl2obH2Rc/maxresdefault.jpg"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* ================= NAVBAR (SMALL) ================= */}
      <nav className="fixed top-0 w-full bg-black/60 h-25 backdrop-blur-md border-b border-white/10 z-50">
       <div className="max-w-6xl mx-auto flex  items-center px-4 py-3">

          {/* Logo (small) */}
          <h1 className="text-sm md:text-base font-bold tracking-wide">
            Booster<span className="text-purple-400">Prod</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
          </h1>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-6 text-xs text-gray-300">
            <a href="#about" className="hover:text-purple-400">About</a>
            <a href="#music" className="hover:text-purple-400">Music</a>
            <a href="#contact" className="hover:text-purple-400">Contact</a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-3 text-sm bg-black/90 border-t border-white/10 space-y-2">
            <a href="#about" onClick={() => setMenuOpen(false)} className="block">About</a>
            <a href="#music" onClick={() => setMenuOpen(false)} className="block">Music</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block">Contact</a>
          </div>
        )}
      </nav>

      {/* ================= HERO (FULL SCREEN) ================= */}
      <section className="h-screen flex items-center justify-center px-4 pt-10">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                BoosterProd
              </span>
            </h1>

            <p className="text-gray-300 mt-4 text-base md:text-lg">
              Rwandan music producer blending Afrobeat, Hip-Hop and electronic sounds
              into a modern African wave.
            </p>

            <div className="flex gap-4 mt-6 flex-wrap">
              <a
                href="https://www.instagram.com/boosterprod1/"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-sm font-semibold"
              >
                Instagram
              </a>

              <a
                href="https://www.youtube.com/@ProdBooster"
                className="px-5 py-2 rounded-full bg-red-600 text-sm font-semibold"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
              <img
                src={boosterImg}
                alt="Booster"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= ABOUT (FULL SCREEN STYLE) ================= */}
      <section id="about" className="min-h-screen flex items-center px-4 bg-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-4">About Booster</h2>
            <p className="text-gray-300 mb-3">
              Booster is a Rwandan music producer mixing traditional sounds with modern Afrobeat.
            </p>
            <p className="text-gray-400">
              Known for tracks like "Natinatina" and "TikToker", Booster is shaping the future of Rwandan music with his unique blend of genres.
              
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["Afrobeat", "Hip-Hop", "Electronic", "Rwanda"].map((item, i) => (
              <div
                key={i}
                className="bg-black/40 p-5 rounded-xl border border-white/10 text-center"
              >
                <h3 className="font-bold text-sm md:text-base">{item}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= MUSIC (FULL SCREEN STYLE) ================= */}
      <section id="music" className="min-h-screen flex items-center px-4">
        <div className="max-w-6xl mx-auto w-full">

          <h2 className="text-3xl font-bold text-center mb-8">
            Latest Productions
          </h2>

          {/* PLAYER */}
          <div className="mb-8">
            <iframe
              src={songs[activeSong].embed}
              className="w-full h-[250px] md:h-[450px] rounded-xl"
              allowFullScreen
              title="music"
            />
          </div>

          {/* SONGS */}
          <div className="grid md:grid-cols-3 gap-5">
            {songs.map((song, i) => (
              <div
                key={i}
                onClick={() => setActiveSong(i)}
                className={`cursor-pointer rounded-xl overflow-hidden border transition ${
                  activeSong === i
                    ? "border-purple-500"
                    : "border-white/10"
                }`}
              >
                <img src={song.thumb} className="w-full" />
                <div className="p-4">
                  <h4 className="font-bold">{song.title}</h4>
                  <p className="text-gray-400 text-sm">{song.artist}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="h-screen flex items-center justify-center text-center px-4 bg-white/5">
        <div>
          <h2 className="text-3xl font-bold">Connect With Booster</h2>
          <p className="text-gray-400 mt-3 mb-6">
            Instagram • YouTube • Collaboration
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a className="px-6 py-2 rounded-full bg-pink-600 text-sm">Instagram</a>
            <a className="px-6 py-2 rounded-full bg-red-600 text-sm">YouTube</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-4 text-gray-500 border-t border-white/10 text-sm">
        © BoosterProd • Rwanda Music Producer
      </footer>

    </div>
  );
};

export default App;