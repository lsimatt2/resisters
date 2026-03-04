import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "Write | ReSisters CT",
  description:
    "Put pen to paper for postcards and letters that make a difference.",
};

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="ReSisters CT" width={60} height={38} />
          <span className="text-lg font-bold text-berry-800 hidden sm:inline">
            ReSisters CT
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/#about" className="hover:text-berry-700 transition-colors">
            Who We Are
          </Link>
          <Link href="/#actions" className="hover:text-berry-700 transition-colors">
            Take Action
          </Link>
          <Link href="/#cafe" className="hover:text-berry-700 transition-colors">
            Resistance Cafe
          </Link>
          <Link href="/#resources" className="hover:text-berry-700 transition-colors">
            Resources
          </Link>
          <a
            href="#signup"
            className="bg-purple-logo text-white px-5 py-2 rounded-full hover:bg-berry-700 transition-colors"
          >
            Join Us
          </a>
        </div>
        <a
          href="#signup"
          className="md:hidden bg-purple-logo text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-berry-700 transition-colors"
        >
          Join Us
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative bg-green-50 text-gray-900 pt-28 pb-16 px-6">
      <div className="relative mx-auto max-w-4xl text-center">
        <Link
          href="/#actions"
          className="inline-block text-green-700 hover:text-green-800 text-sm mb-4 transition-colors"
        >
          &larr; Back to Take Action
        </Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-berry-800">
          Write
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Put pen to paper for postcards and letters that make a difference.
        </p>
      </div>
    </section>
  );
}

function WriteOptions() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <a
            href="/take-action/postcards"
            className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-green-50 text-green-700 rounded-xl flex items-center justify-center group-hover:bg-green-700 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Send Postcards</h2>
            </div>
            <p className="text-gray-600 mb-4">
              In a sea of junk mail, a personally addressed handwritten message has real meaning. No internet required!
            </p>
            <span className="inline-block bg-purple-logo hover:bg-berry-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors shadow-md">
              Learn More &rarr;
            </span>
          </a>
          <a
            href="/take-action/letters"
            className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-green-50 text-green-700 rounded-xl flex items-center justify-center group-hover:bg-green-700 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Write Letters</h2>
            </div>
            <p className="text-gray-600 mb-4">
              There is nothing quite like receiving an envelope hand-addressed to you. Your letter won’t get thrown out with the junk mail.
            </p>
            <span className="inline-block bg-purple-logo hover:bg-berry-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors shadow-md">
              Learn More &rarr;
            </span>
          </a>
          <a
            href="/take-action/canvass"
            className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-green-50 text-green-700 rounded-xl flex items-center justify-center group-hover:bg-green-700 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Give Testimony</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Testify in person or virtually before committees and decision-makers. Your personal story is powerful.
            </p>
            <span className="inline-block bg-purple-logo hover:bg-berry-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors shadow-md">
              Learn More &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-50 via-green-50 to-emerald-50">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="signup" className="text-3xl sm:text-4xl font-bold text-berry-800 mb-3">
          New to ReSisters?
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
          Join our email list to receive the Weekly Menu with Zoom links, action
          items, and ways to get involved.
        </p>
        <SignupForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-berry-900 text-pink-200 py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="/logo.png"
              alt="ReSisters CT"
              width={60}
              height={38}
              className="mb-3 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed">
              Grassroots activist organization founded in Westport, CT in 2016.
              Now active throughout Connecticut and beyond, promoting candidates
              and causes in support of American democracy.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/#actions" className="hover:text-white transition-colors">
                  Take Action
                </Link>
              </li>
              <li>
                <Link href="/#cafe" className="hover:text-white transition-colors">
                  Resistance Cafe
                </Link>
              </li>
              <li>
                <Link href="/#resources" className="hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:ReSistersCT@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  ReSistersCT@gmail.com
                </a>
              </li>
              <li>Founded in Westport, CT &mdash; now throughout CT &amp; beyond</li>
              <li>Zoom Mondays at 10 a.m. and 7 p.m.</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-berry-800 pt-6 text-center text-sm text-pink-300">
          &copy; {new Date().getFullYear()} ReSisters CT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function WritePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WriteOptions />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
