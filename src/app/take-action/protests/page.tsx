import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "Protests & Gatherings | ReSisters CT",
  description:
    "Join ReSisters CT at visibility brigades, activist afternoons, and social gatherings to make our voices heard.",
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
          Protests &amp; Gatherings
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Show up, stand together, and make our voices heard in our communities.
        </p>
      </div>
    </section>
  );
}

function VisibilityBrigade() {
  return (
    <section className="py-16 px-6 bg-plum-50">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-green-50 text-green-700 rounded-xl flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-berry-900">Visibility Brigade</h2>
        </div>
        <div className="w-16 h-1 bg-green-600 rounded-full mb-8" />
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            Our Visibility Brigade takes to the streets with signs, banners, and energy to raise awareness on critical issues. Standing on busy corners and at key locations, we make sure our community sees that people care and are paying attention.
          </p>
          <p>
            Whether it&rsquo;s a response to current events or an ongoing campaign, the Visibility Brigade is a powerful way to show solidarity, spark conversation, and remind our neighbors that democracy requires active participation.
          </p>
        </div>
      </div>
    </section>
  );
}

function ActivistAfternoon() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-green-50 text-green-700 rounded-xl flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-berry-900">Activist Afternoon</h2>
        </div>
        <div className="w-16 h-1 bg-berry-600 rounded-full mb-8" />
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            Activist Afternoons are in-person gatherings where ReSisters come together to take action side by side. Whether it&rsquo;s writing postcards, making phone calls, or preparing materials for an upcoming campaign, we get more done together.
          </p>
          <p>
            These sessions combine the productivity of focused activism with the camaraderie of working alongside fellow ReSisters. It&rsquo;s a great way to learn new skills, stay motivated, and make a tangible impact in just a few hours.
          </p>
        </div>
      </div>
    </section>
  );
}

function Social() {
  return (
    <section className="py-16 px-6 bg-plum-50">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-green-50 text-green-700 rounded-xl flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-berry-900">Social</h2>
        </div>
        <div className="w-16 h-1 bg-green-600 rounded-full mb-8" />
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            Activism is fueled by connection. Our social events bring ReSisters together to celebrate wins, recharge, and build the relationships that sustain our movement. From casual get-togethers to themed gatherings, these events remind us that we&rsquo;re stronger together.
          </p>
          <p>
            Taking time to enjoy each other&rsquo;s company isn&rsquo;t a break from the work &mdash; it&rsquo;s part of the work. Strong bonds make for a stronger, more resilient community of activists.
          </p>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-berry-100 to-green-50 text-gray-900">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-berry-800">Ready to Show Up?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join our email list using this form.
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
              width={80}
              height={51}
              className="mb-4 bg-white/90 rounded-xl p-2"
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
              <li>Founded in Westport, CT — now throughout CT &amp; beyond</li>
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

export default function ProtestsGatherings() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VisibilityBrigade />
        <ActivistAfternoon />
        <Social />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
