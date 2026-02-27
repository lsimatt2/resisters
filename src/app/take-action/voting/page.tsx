import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "Voting Resources | ReSisters CT",
  description:
    "Find voter registration, absentee ballot, and voting information for Connecticut, Pennsylvania, and other states.",
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
    <section className="relative bg-gradient-to-br from-green-50 via-green-50 to-emerald-50 pt-28 pb-16 px-6">
      <div className="relative mx-auto max-w-4xl text-center">
        <Link
          href="/#resources"
          className="inline-block text-green-logo hover:text-berry-700 text-sm mb-4 transition-colors"
        >
          &larr; Back to Resources
        </Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-green-logo">
          Voting Resources
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Everything you need to check your registration, register to vote,
          and request an absentee ballot.
        </p>
      </div>
    </section>
  );
}

function CTVoting() {
  return (
    <section className="py-16 px-6 bg-plum-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-berry-900 mb-4">
          Connecticut Voting
        </h2>
        <div className="w-16 h-1 bg-green-600 rounded-full mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a
            href="https://portaldir.ct.gov/sots/LookUp.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Check Your Voter Registration</h3>
            <p className="text-gray-600 text-sm">Look up your current voter registration status in Connecticut.</p>
          </a>
          <a
            href="https://voterregistration.ct.gov/OLVR/prefix.do"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Register to Vote Online</h3>
            <p className="text-gray-600 text-sm">Complete your Connecticut voter registration online.</p>
          </a>
          <a
            href="https://portal.ct.gov/SOTS/Election-Services/Voter-Information/Absentee-Voting"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Absentee Ballot Process</h3>
            <p className="text-gray-600 text-sm">Learn about absentee voting options in Connecticut.</p>
          </a>
        </div>
        <div className="mt-6">
          <a
            href="https://iwillvote.com/?state=CT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-berry-600 hover:text-berry-800 underline underline-offset-4 font-medium"
          >
            IWillVote.com &mdash; CT
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function PAVoting() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-berry-900 mb-4">
          Pennsylvania Voting
        </h2>
        <div className="w-16 h-1 bg-green-600 rounded-full mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a
            href="https://www.pavoterservices.pa.gov/pages/voterregistrationstatus.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Check Your Voter Registration</h3>
            <p className="text-gray-600 text-sm">Look up your current voter registration status in Pennsylvania.</p>
          </a>
          <a
            href="https://www.pavoterservices.pa.gov/Pages/VoterRegistrationApplication.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Register to Vote Online</h3>
            <p className="text-gray-600 text-sm">Complete your Pennsylvania voter registration online.</p>
          </a>
          <a
            href="https://www.pavoterservices.pa.gov/OnlineAbsenteeApplication/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Absentee Ballot Process</h3>
            <p className="text-gray-600 text-sm">Apply for an absentee ballot in Pennsylvania.</p>
          </a>
        </div>
      </div>
    </section>
  );
}

function OtherStates() {
  return (
    <section className="py-16 px-6 bg-plum-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-berry-900 mb-4">
          Other States
        </h2>
        <div className="w-16 h-1 bg-green-600 rounded-full mb-8" />
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Find voting information for any state in the country using these nonpartisan resources.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="https://www.vote411.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center group-hover:bg-green-700 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Vote411.org</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Find voting information for your state &mdash; registration, polling locations, ballot information, and more.
            </p>
          </a>
          <a
            href="https://iwillvote.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center group-hover:bg-green-700 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">IWillVote.com</h3>
            </div>
            <p className="text-gray-600 text-sm">
              DNC site for understanding how to vote in your state.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-berry-100 to-green-50">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-berry-800">
          Ready to Take Action?
        </h2>
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
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/groups/493346374331322/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-200 hover:text-white transition-colors"
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
                className="text-pink-200 hover:text-white transition-colors"
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
                className="text-pink-200 hover:text-white transition-colors"
                aria-label="Follow on Bluesky"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.643 3.593 3.519 6.178 3.279-3.91.567-7.369 2.17-2.977 7.594 4.913 5.207 6.852-1.39 7.447-3.346.141-.465.226-.742.728-.742s.587.277.728.742c.595 1.956 2.534 8.553 7.447 3.346 4.392-5.424.933-7.027-2.977-7.594 2.585.24 5.393-.636 6.178-3.279C23.622 9.418 24 4.458 24 3.768c0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24C16.046 4.747 13.087 8.686 12 10.8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-berry-800 pt-6 text-center text-sm text-pink-300">
          &copy; {new Date().getFullYear()} ReSisters CT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function Voting() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CTVoting />
        <PAVoting />
        <OtherStates />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
