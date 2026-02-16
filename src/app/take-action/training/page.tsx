import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to be an Activist | ReSisters CT",
  description:
    "Learn how to be an activist with ReSisters CT — guides for letters to the editor, phone banking, text banking, Slack, Zoom, and more.",
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
            href="https://resistersct.us18.list-manage.com/subscribe?u=3f5471ab184963199413bde34&id=ffa6171dfe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-logo text-white px-5 py-2 rounded-full hover:bg-berry-700 transition-colors"
          >
            Join Us
          </a>
        </div>
        <a
          href="https://resistersct.us18.list-manage.com/subscribe?u=3f5471ab184963199413bde34&id=ffa6171dfe"
          target="_blank"
          rel="noopener noreferrer"
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
          How to be an Activist
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Guides, toolkits, and training materials to help you become a more
          effective activist.
        </p>
      </div>
    </section>
  );
}

function StrategiesForActivists() {
  return (
    <section className="py-16 px-6 bg-plum-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-berry-900 mb-4">
          Strategies for Activists
        </h2>
        <div className="w-16 h-1 bg-green-600 rounded-full mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="https://docs.google.com/document/d/1zBqcDj9Tyt983MWCEeg0qbmBB1IAcO6llzdCJuqsVu8/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">How to Avoid Burnout</h3>
            <p className="text-gray-600 text-sm">Summary of Zoom with Robert Hubbell on sustaining activism long-term.</p>
          </a>
        </div>
      </div>
    </section>
  );
}

function LettersToTheEditor() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-berry-900 mb-4">
          Letters to the Editor
        </h2>
        <div className="w-16 h-1 bg-green-600 rounded-full mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="https://drive.google.com/file/d/1O7aOqyF04VeCVBVxVgpCxrqTdxiSCeT2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">ReSisters LTE Toolkit</h3>
            <p className="text-gray-600 text-sm">A comprehensive toolkit for writing effective letters to the editor.</p>
          </a>
        </div>
      </div>
    </section>
  );
}

function TextsTraining() {
  return (
    <section className="py-16 px-6 bg-plum-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-berry-900 mb-4">
          Texts
        </h2>
        <div className="w-16 h-1 bg-green-600 rounded-full mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="https://docs.google.com/document/d/14xu3kdfz696Th9AmV1lVJHT2YDgKvgRfgydB7_FNfUk/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Step By Step Instructions</h3>
            <p className="text-gray-600 text-sm">A guide to text banking for voter outreach campaigns.</p>
          </a>
        </div>
      </div>
    </section>
  );
}

function PhoneCallsTraining() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-berry-900 mb-4">
          Phone Calls
        </h2>
        <div className="w-16 h-1 bg-green-600 rounded-full mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="https://www.youtube.com/watch?v=nAqb9zRCUlo&feature=youtu.be"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Why Phone Banking is Effective</h3>
            <p className="text-gray-600 text-sm">Video explaining the impact and effectiveness of phone banking.</p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=wMla1q2BdNY&feature=youtu.be"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">How to Make a Persuasive Phone Call</h3>
            <p className="text-gray-600 text-sm">Video training on making effective and persuasive calls to voters.</p>
          </a>
        </div>
      </div>
    </section>
  );
}

function ToolsTraining() {
  return (
    <section className="py-16 px-6 bg-plum-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-berry-900 mb-4">
          Tools &amp; Platforms
        </h2>
        <div className="w-16 h-1 bg-green-600 rounded-full mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="https://standuply.com/how-to-use-slack"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Slack Guide</h3>
            <p className="text-gray-600 text-sm">Learn how to use Slack to stay connected with the ReSisters team.</p>
          </a>
          <a
            href="https://docs.google.com/presentation/d/1Np1xjsk92ggdknxQlBUCMST74jgEZeri6E_qgirtcaQ/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Connecting to Zoom</h3>
            <p className="text-gray-600 text-sm">Step-by-step guide for joining our weekly Zoom meetings.</p>
          </a>
          <a
            href="https://docs.google.com/document/d/1RFLkJq6LDGE-T9oHw-qHGmqsmMyhfCl-cV1gS4lygdY/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M18 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Adding a ReSistersCT Zoom Background</h3>
            <p className="text-gray-600 text-sm">Instructions for adding the ReSisters CT background to your Zoom screen.</p>
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-logo">
          Ready to Take Action?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join our email list to receive the Weekly Menu with action items
          and ways to get involved.
        </p>
        <a
          href="https://resistersct.us18.list-manage.com/subscribe?u=3f5471ab184963199413bde34&id=ffa6171dfe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-logo text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-berry-700 transition-colors shadow-lg"
        >
          Sign Up Now
        </a>
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
              Grassroots activists founded in Westport, CT in 2016, now active
              throughout Connecticut and beyond, promoting candidates and causes
              that support democracy.
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

export default function Training() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StrategiesForActivists />
        <LettersToTheEditor />
        <TextsTraining />
        <PhoneCallsTraining />
        <ToolsTraining />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
