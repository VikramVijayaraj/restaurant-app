export default function Footer() {
  return (
    <div className="bg-black px-20">
      <div className="grid grid-cols-4 gap-8 text-white py-10 px-4">
        <div>
          <h3 className="font-bold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Chefs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Appetizers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Main Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Desserts
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Beverages
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Reserve Table
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="py-10 text-white text-sm text-center">
        © 2025 Restaurant. All rights reserved.
      </p>
    </div>
  );
}
