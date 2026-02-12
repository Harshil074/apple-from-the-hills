export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-xl font-bold text-white mb-2">
            Apple from the Hills 🍎
          </h3>
          <p>
            Fresh fruits directly from Rampur Bushahr, Himachal Pradesh.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">
            Why Trust Us?
          </h4>
          <ul className="space-y-1">
            <li>✔ 50+ Local Farmers</li>
            <li>✔ Farm to Home</li>
            <li>✔ Chemical-minimal farming</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">
            Location 📍
          </h4>
          <p>Rampur Bushahr</p>
          <p>Himachal Pradesh, India</p>
        </div>

      </div>

      <p className="text-center text-sm mt-8">
        © {new Date().getFullYear()} Apple from the Hills
      </p>
    </footer>
  );
}
