import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "Gather | ReSisters CT",
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
          Gather
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
    <section className="py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-green-50 text-green-700 rounded-xl flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-berry-900">Visibility Brigade</h2>
        </div>
        <div className="w-16 h-1 bg-berry-600 rounded-full mb-8" />
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            Our Visibility Brigade takes to the streets with signs, banners, and energy to raise awareness on critical issues. Standing on busy corners and at key locations, we make sure our community sees that people care.
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
        <div className="w-16 h-1 bg-green-600 rounded-full mb-8" />
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            Activist Afternoons are in-person gatherings where ReSisters come together to take action side by side. Whether it&rsquo;s writing postcards, making phone calls, or preparing materials for an upcoming campaign, we get more done together.
          </p>
          <p>
            These sessions combine the productivity of focused activism with the camaraderie of working alongside fellow reSisters and Misters. It&rsquo;s a great way to learn new skills, stay motivated, and make a tangible impact in just a few hours.
          </p>
        </div>
      </div>
    </section>
  );
}

function Social() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-green-50 text-green-700 rounded-xl flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-berry-900">Social</h2>
        </div>
        <div className="w-16 h-1 bg-berry-600 rounded-full mb-8" />
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            Activism is fueled by connection. Our social events bring us together to celebrate wins, recharge, and build the relationships that sustain our movement. From casual get-togethers to themed gatherings, these events remind us that we&rsquo;re stronger together.
          </p>
          <p>
            Taking time to enjoy each other&rsquo;s company isn&rsquo;t a break from the work; it&rsquo;s part of the work. Strong bonds make for a stronger, more resilient community of activists.
          </p>
        </div>
      </div>
    </section>
  );
}


function ResistanceCafe() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-green-50 text-green-700 rounded-xl flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-berry-900">Resistance Caf&eacute;</h2>
        </div>
        <div className="w-16 h-1 bg-green-600 rounded-full mb-8" />
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            A weekly gathering where activists come together to support each
            other and work to make significant political change. Every Monday
            morning from 10 &ndash; 11 a.m. on Zoom, with a 7 p.m. recap for
            those who cannot attend in the morning.
          </p>
          <p>
            Each week features a &ldquo;menu&rdquo; of options for engagement,
            action, and education, from positive news and between-meeting
            actions to group activities, guest speakers, and more.
          </p>
        </div>
      </div>
    </section>
  );
}
function CTA() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-green-50 to-white text-gray-900">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-berry-800">Ready to Gather?</h2>
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
    <footer className="bg-plum-50 text-black py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="/logo.png"
              alt="ReSisters CT"
              width={80}
              height={51}
              className="mb-4"
            />
            <p className="text-sm leading-relaxed">
              ReSistersCT is a grassroots activist organization founded in Westport, CT in 2016.
              Now active throughout Connecticut and beyond, promoting candidates
              and causes in support of American democracy.
            </p>
          </div>
          <div>
            <h3 className="text-black font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-gray-600 transition-colors">
                  Who We Are
                </a>
              </li>
              <li>
                <a
                  href="#actions"
                  className="hover:text-white transition-colors"
                >
                  Take Action
                </a>
              </li>
              <li>
                <a href="#cafe" className="hover:text-gray-600 transition-colors">
                  Resistance Cafe
                </a>
              </li>
              <li>
                <a
                  href="#resources"
                  className="hover:text-gray-600 transition-colors"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-black font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:ReSistersCT@gmail.com"
                  className="hover:text-gray-600 transition-colors"
                >
                  ReSistersCT@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/groups/493346374331322/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-berry-700 hover:text-gray-600 transition-colors"
                aria-label="Follow on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/resistersct/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-berry-700 hover:text-gray-600 transition-colors"
                aria-label="Follow on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://bsky.app/profile/resistersct.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-berry-700 hover:text-gray-600 transition-colors"
                aria-label="Follow on Bluesky"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.643 3.593 3.519 6.178 3.279-3.91.567-7.369 2.17-2.977 7.594 4.913 5.207 6.852-1.39 7.447-3.346.141-.465.226-.742.728-.742s.587.277.728.742c.595 1.956 2.534 8.553 7.447 3.346 4.392-5.424.933-7.027-2.977-7.594 2.585.24 5.393-.636 6.178-3.279C23.622 9.418 24 4.458 24 3.768c0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24C16.046 4.747 13.087 8.686 12 10.8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-6 text-center text-sm text-black">
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
        <ResistanceCafe />
        <VisibilityBrigade />
        <ActivistAfternoon />
        <Social />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
