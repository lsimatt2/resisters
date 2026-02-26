export default function SignupForm() {
  return (
    <div id="signup" className="w-full max-w-2xl mx-auto">
      <form
        action="https://resistersct.us18.list-manage.com/subscribe/post?u=3f5471ab184963199413bde34&amp;id=ffa6171dfe&amp;f_id=00dc9be6f0"
        method="post"
        target="_blank"
        className="space-y-5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="mce-FNAME" className="block text-sm font-medium text-gray-700 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="FNAME"
              id="mce-FNAME"
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-logo focus:border-purple-logo outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="mce-LNAME" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="LNAME"
              id="mce-LNAME"
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-logo focus:border-purple-logo outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-logo focus:border-purple-logo outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <div className="flex items-center gap-1">
            <span className="text-gray-500">(</span>
            <input
              type="text"
              name="PHONE[area]"
              id="mce-PHONE-area"
              maxLength={3}
              pattern="[0-9]*"
              className="w-16 px-2 py-2.5 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-purple-logo focus:border-purple-logo outline-none transition-colors"
            />
            <span className="text-gray-500">)</span>
            <input
              type="text"
              name="PHONE[detail1]"
              id="mce-PHONE-detail1"
              maxLength={3}
              pattern="[0-9]*"
              className="w-16 px-2 py-2.5 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-purple-logo focus:border-purple-logo outline-none transition-colors"
            />
            <span className="text-gray-500">-</span>
            <input
              type="text"
              name="PHONE[detail2]"
              id="mce-PHONE-detail2"
              maxLength={4}
              pattern="[0-9]*"
              className="w-20 px-2 py-2.5 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-purple-logo focus:border-purple-logo outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="mce-MMERGE5" className="block text-sm font-medium text-gray-700 mb-1">
              Zip Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="MMERGE5"
              id="mce-MMERGE5"
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-logo focus:border-purple-logo outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="mce-MMERGE7" className="block text-sm font-medium text-gray-700 mb-1">
              Town <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="MMERGE7"
              id="mce-MMERGE7"
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-logo focus:border-purple-logo outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="mce-MMERGE6" className="block text-sm font-medium text-gray-700 mb-1">
            Notes
          </label>
          <input
            type="text"
            name="MMERGE6"
            id="mce-MMERGE6"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-logo focus:border-purple-logo outline-none transition-colors"
          />
        </div>

        <details className="group">
          <summary className="text-sm font-medium text-gray-700 cursor-pointer hover:text-berry-700 transition-colors">
            Address (optional) ▸
          </summary>
          <div className="mt-3 space-y-3">
            <div>
              <label htmlFor="mce-MMERGE3-addr1" className="block text-sm font-medium text-gray-700 mb-1">
                Address Line 1
              </label>
              <input
                type="text"
                name="MMERGE3[addr1]"
                id="mce-MMERGE3-addr1"
                maxLength={70}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-logo focus:border-purple-logo outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="mce-MMERGE3-addr2" className="block text-sm font-medium text-gray-700 mb-1">
                Address Line 2
              </label>
              <input
                type="text"
                name="MMERGE3[addr2]"
                id="mce-MMERGE3-addr2"
                maxLength={70}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-logo focus:border-purple-logo outline-none transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label htmlFor="mce-MMERGE3-city" className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="MMERGE3[city]"
                  id="mce-MMERGE3-city"
                  maxLength={40}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-logo focus:border-purple-logo outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="mce-MMERGE3-state" className="block text-sm font-medium text-gray-700 mb-1">
                  State
                </label>
                <input
                  type="text"
                  name="MMERGE3[state]"
                  id="mce-MMERGE3-state"
                  maxLength={20}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-logo focus:border-purple-logo outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="mce-MMERGE3-zip" className="block text-sm font-medium text-gray-700 mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="MMERGE3[zip]"
                  id="mce-MMERGE3-zip"
                  maxLength={10}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-logo focus:border-purple-logo outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="mce-MMERGE3-country" className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <select
                name="MMERGE3[country]"
                id="mce-MMERGE3-country"
                defaultValue="USA"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-logo focus:border-purple-logo outline-none transition-colors bg-white"
              >
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
            </div>
          </div>
        </details>

        {/* Honeypot field for spam prevention */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
          <input
            type="text"
            name="b_3f5471ab184963199413bde34_ffa6171dfe"
            tabIndex={-1}
            defaultValue=""
          />
        </div>

        <div className="text-center pt-2">
          <button
            type="submit"
            className="bg-purple-logo hover:bg-berry-700 text-white font-semibold px-10 py-3.5 rounded-full text-lg transition-colors shadow-lg"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
