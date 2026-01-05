export default function Projects() {
  const projects = [
    {
      title: "Registration Form",
      desc: "React + Html + css",
      link:"https://registration-form-one-mu.vercel.app/",
      Tech_used:"React, Tailwind, Hooks",
      Skills_shown: "State management, side effects, UI logic"
    },
    {
      title: "Landing Page",
      desc: "React + TailwindCss",
      link:"https://landing-page-blue-ten-52.vercel.app/",
      Tech_used:"React, Tailwind, Hooks",
      Skills_shown:"State management, side effects, UI logic"
    },
    {
      title: "OTP Generator App",
      desc: "A React-based OTP generator with countdown timer and automatic expiration using hooks.",
      link:"https://otp-generator-green.vercel.app/",
      Tech_used: "React, Tailwind, Hooks",
      Skills_shown: "State management, side effects, UI logic"
    },
    {
      title:"Login Form App",
      desc:"Modern authentication UI with toggle mode and smooth transitions",
      link:"https://login-form-sepia-psi.vercel.app/",
      Tech_used: "React, Tailwind, Hooks",
      Skills_shown: "State management, side effects, UI logic"
    }
  ];

  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="p-5 bg-white rounded-lg shadow">
            <h3 className="font-bold text-xl">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.desc}</p>
            <p className="text-gray-600 mt-2">{p.Tech_used}</p>
            <p className="text-gray-600 mt-2">{p.Skills_shown}</p>
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
