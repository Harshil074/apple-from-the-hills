export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <section className="bg-primary text-white py-16 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact & Orders 📦
        </h1>
        <p className="max-w-2xl mx-auto">
          Have a question, want to place an order, or looking for bulk supply?
          We’d love to hear from you.
        </p>
      </section>

      {/* FORM */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Send Us an Inquiry
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border p-3 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded md:col-span-2"
            />
            <textarea
              placeholder="Your Message / Order Details"
              rows="4"
              className="border p-3 rounded md:col-span-2"
            ></textarea>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-lg md:col-span-2 hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Location 📍</h2>
        <p className="text-gray-600 mb-2">
          Rampur Bushahr, Himachal Pradesh
        </p>
        <p className="text-gray-600">
          Serving fresh fruits directly from the hills
        </p>
      </section>

    </div>
  );
}
