export default function Contact() {
  return (
    <section className="p-10">
      <h2 className="text-3xl mb-6 font-bold text-center">Contact Me</h2>

      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <input className="p-3 border rounded" placeholder="Your Name" />
        <input className="p-3 border rounded" placeholder="Your Email" />
        <textarea className="p-3 border rounded" placeholder="Your Message"></textarea>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">Send</button>
      </form>
    </section>
  );
}
