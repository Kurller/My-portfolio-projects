import passport from "../assets/passport.JPG";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center p-10">
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Kolawole Oladejo</h1>

        <p className="mt-4 text-gray-600 text-lg">
          A passionate frontend developer skilled in React, Tailwind, and modern web technologies.
        </p>

        <a
          href="/OLADEJO-KOLAWOLE.pdf.pdf"
          download
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </div>

      <img
        src={passport}
        alt="profile"
        className="w-52 h-52 rounded-full border-4 border-blue-600 object-cover"
      />
    </section>
  );
}
