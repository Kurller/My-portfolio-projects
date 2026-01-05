export default function Contact() {
  return (
    <section className="p-10">
      <h2 className="text-3xl mb-6 font-bold text-center">Contact Me</h2>

      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <input
          type="text"
          className="p-3 border rounded"
          placeholder="Your Name"
        />

        <input
          type="email"
          className="p-3 border rounded"
          placeholder="Your Email"
        />

        <textarea
          className="p-3 border rounded"
          placeholder="Your Message"
          rows={5}
        />

        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Send
        </button>
      </form>

      {/* Contact CTA */}
      <div className="mt-8 text-center">
        <p className="text-lg font-medium mb-2">
          Interested in working together?
        </p>

        <p className="mb-3">
          📧 Email:{" "}
          <a
            href="mailto:kolaquadry@gmail.com"
            className="text-blue-600 hover:underline"
          >
            kolaquadry@gmail.com
          </a>
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Kurller"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/kolaquadry"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
