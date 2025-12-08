export default function Projects() {
  const projects = [
    {
      title: "Registration Form",
      desc: "React + Html + css",
      link:"https://registration-form-one-mu.vercel.app/",
    },
    {
      title: "FruitSearch App",
      desc: "React + Html + css",
      link:"https://fruit-search-beige.vercel.app/",
    },
    {
      title: "OTP Generator App",
      desc: "Uses React + Html",
      link:"https://otp-generator-green.vercel.app/",
    },
  ];

  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="p-5 bg-white rounded-lg shadow">
            <h3 className="font-bold text-xl">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline mt-3 inline-block"
            >
              Visit Project →
              </a>
          </div>
        ))}
      </div>
    </section>
  );
}
