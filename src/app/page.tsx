"use client";

import { useState } from "react";
import Image from "next/image";
import SignupForm from "@/components/SignupForm";

function SignupModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-berry-900 mb-2">
          Join the Movement
        </h2>
        <div className="w-12 h-1 bg-green-600 mx-auto mb-6 rounded-full" />
        <SignupForm />
      </div>
    </div>
  );
}

function Navbar({ onOpenSignup }: { onOpenSignup: () => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-50/95 backdrop-blur-sm border-b border-green-100 shadow-sm">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-3">
          <Image src="/logo.png" alt="ReSisters CT" width={60} height={38} />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#about" className="hover:text-berry-700 transition-colors">
            Who We Are
          </a>
          <a href="#cafe" className="hover:text-berry-700 transition-colors">
            Resistance Cafe
          </a>
          <a href="#actions" className="hover:text-berry-700 transition-colors">
            Take Action
          </a>
          <a
            href="#resources"
            className="hover:text-berry-700 transition-colors"
          >
            Resources
          </a>
          <button
            onClick={onOpenSignup}
            className="bg-purple-logo text-white px-5 py-2 rounded-full hover:bg-berry-700 transition-colors"
          >
            Join Us
          </button>
        </div>
        <button
          onClick={onOpenSignup}
          className="md:hidden bg-purple-logo text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-berry-700 transition-colors"
        >
          Join Us
        </button>
      </div>
    </nav>
  );
}

function Hero({ onOpenSignup }: { onOpenSignup: () => void }) {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-white pt-32 pb-20 px-6">
      <div className="relative mx-auto max-w-4xl text-center">
        <Image
          src="/logo.png"
          alt="ReSisters CT"
          width={200}
          height={128}
          className="mx-auto mb-8 drop-shadow-md"
        />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-green-logo">
          Educate. Activate.
          <br />
          <span className="!text-purple-logo">Defend Democracy.</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          ReSisters is a grassroots activist organization founded in Westport, CT in 2016. Now active throughout
          Connecticut and beyond, we are dedicated to promoting candidates and causes in support of American democracy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOpenSignup}
            className="bg-purple-logo hover:bg-berry-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors shadow-lg"
          >
            Join Us
          </button>
          <a
            href="#about"
            className="border-2 border-berry-300 hover:border-berry-500 text-berry-700 font-semibold px-8 py-4 rounded-full text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}



function About() {
  return (
    <section id="about" className="py-20 px-6 bg-plum-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-berry-900 mb-4">
          Who We Are
        </h2>
        <div className="w-16 h-1 bg-green-600 mx-auto mb-10 rounded-full" />
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            The ReSisters began meeting weekly shortly after the 2016
            Presidential Election, when a group of formerly politically
            inactive women felt compelled to become politically engaged.
          </p>
          <p>
            Our mission is to campaign for pro-democracy candidates at local and
            national levels, research policy impacts, and advocate for
            initiatives that strengthen our democracy.
          </p>
          <p>
            Our strategy centers on building a team of dedicated activists
            skilled in writing letters and postcards, phone and text banking,
            canvassing, and social media communication. We position ourselves as a rapid
            response team available to support Democratic candidates nationwide.
          </p>
          <p className="text-base italic text-gray-500">
            We do not fundraise but encourage donating to organizations also
            working to defend democracy and we work with our members to help
            them donate effectively.
          </p>
        </div>
      </div>
    </section>
  );
}

const actions = [
  {
    title: "Amplify",
    description: "Get the message out on your own on social media platforms.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    href: "/take-action/social-media",
  },
  {
    title: "Canvass",
    description: "Go door-to-door for face-to-face voter outreach.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 20H2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4H8a2 2 0 0 0-2 2v14" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 12h.01" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 20h-3" />
      </svg>
    ),
    href: "/take-action/canvass",
  },
  {
    title: "Gather",
    description: "Join rallies, marches, and community gatherings.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    href: "/take-action/protests",
  },
  {
    title: "Phone",
    description: "Make persuasive calls for voters and legislators.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    href: "/take-action/phone",
  },
  {
    title: "Text",
    description: "Mobilize voters by sending text messages.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    href: "/take-action/text",
  },
  {
    title: "Write",
    description: "Put pen to paper for postcards and letters that make a difference.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
      </svg>
    ),
    href: "/take-action/write",
  },

];

function TakeAction() {
  return (
    <section id="actions" className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-berry-900 mb-4">
          Take Action
        </h2>
        <div className="w-16 h-1 bg-green-600 mx-auto mb-4 rounded-full" />
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          You have power! Your actions can make the difference because more
          and more elections are decided by razor-thin margins.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((action) => (
            <a
              key={action.title}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-berry-200 transition-all duration-200"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-700 group-hover:text-white transition-colors">
                  {action.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {action.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{action.description}</p>
              <span className="inline-block bg-purple-logo hover:bg-berry-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors shadow-md">
                Learn More &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResistanceCafe({ onOpenSignup }: { onOpenSignup: () => void }) {
  return (
    <section id="cafe" className="py-20 px-6 bg-gradient-to-br from-green-50 to-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-berry-800">
          Resistance Cafe
        </h2>
        <div className="w-16 h-1 bg-purple-logo mx-auto mb-10 rounded-full" />
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          A weekly gathering where activists come together to support each
          other and work to make significant political change.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-left">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-green-logo">When</h3>
            <p className="text-green-800">
              Every Monday morning from 10 - 11 a.m. on Zoom.
            </p>
            <p className="text-green-800 mt-2">
              Every Monday evening at 7 p.m. on Zoom, a recap for those not able to attend the earlier Zoom.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-green-logo">Weekly Menu</h3>
            <p className="text-green-logo ml-6 mb-2">
              A literal menu of options for engagement, action and education.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>
                <strong className="text-gray-800">Lift Your Spirits</strong>
                <div className="ml-6">Positive news</div>
              </li>
              <li>
                <strong className="text-gray-800">Starters</strong>
                <div className="ml-6">Between-meeting actions</div>
              </li>
              <li>
                <strong className="text-gray-800">Mains</strong>
                <div className="ml-6">Priority issues &amp; guest speakers</div>
              </li>
              <li>
                <strong className="text-gray-800">Desserts</strong>
                <div className="ml-6">Articles &amp; humor</div>
              </li>
            </ul>
          </div>
        </div>
        <button
          onClick={onOpenSignup}
          className="inline-block bg-purple-logo hover:bg-berry-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
        >
          Join Us
        </button>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section id="resources" className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-berry-900 mb-4">
          Resources
        </h2>
        <div className="w-16 h-1 bg-green-600 mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Voting Card */}
          <a
            href="/take-action/voting"
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow block"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-green-50 text-green-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="4" y="11" width="16" height="10" rx="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11h8" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3h6v6l-3 2-3-2V3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 5l1.5 1.5L14 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-berry-800">Voting</h3>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Registration, absentee ballots, and voting information.
            </p>
            <span className="inline-block bg-purple-logo hover:bg-berry-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors shadow-md">
              View Resources &rarr;
            </span>
          </a>

          {/* Other Resources Card */}
          <a
            href="/resources/other"
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow block"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-green-50 text-green-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.54a4.5 4.5 0 00-6.364-6.364L4.5 8.188" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-berry-800">Other Resources</h3>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Helpful links for activists.
            </p>
            <span className="inline-block bg-purple-logo hover:bg-berry-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors shadow-md">
              View Resources &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function CTA({ onOpenSignup }: { onOpenSignup: () => void }) {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-logo">
          New to ReSisters?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join our email list to receive the Weekly Menu with Zoom links,
          action items, and ways to get involved.
        </p>
        <button
          onClick={onOpenSignup}
          className="inline-block bg-purple-logo text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-berry-700 transition-colors shadow-lg"
        >
          Sign Up Now
        </button>
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
              ReSisters is a grassroots activist organization founded in Westport, CT in 2016. Now active throughout Connecticut and beyond, we are dedicated to promoting candidates and causes in support of American democracy.
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
                <a href="#cafe" className="hover:text-gray-600 transition-colors">
                  Resistance Cafe
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

              <a
                href="https://www.threads.net/@resistersct"
                target="_blank"
                rel="noopener noreferrer"
                className="text-berry-700 hover:text-gray-600 transition-colors"
                aria-label="Follow on Threads"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.26 1.33-3.017.88-.724 2.105-1.133 3.552-1.186 1.14-.042 2.172.078 3.089.343-.09-.783-.318-1.404-.683-1.857-.475-.588-1.222-.9-2.22-.929h-.068c-.752 0-1.702.216-2.37.838l-1.353-1.562c1.04-.903 2.378-1.394 3.723-1.394h.094c2.467.07 4.163 1.548 4.5 3.925.138.96.168 2.065.089 3.297l-.005.084c.688.382 1.282.85 1.772 1.396 1.293 1.446 1.882 3.345 1.658 5.348-.295 2.633-1.827 4.964-4.327 6.572C17.7 23.4 15.193 24.02 12.186 24zM10.39 14.906c-.07 0-.14.002-.21.006-.963.052-1.713.364-2.173.904-.345.405-.505.913-.476 1.472.043.78.477 1.382 1.257 1.746.615.287 1.357.397 2.102.355 1.073-.059 1.896-.44 2.446-1.133.394-.495.667-1.17.81-2.005-1.06-.394-2.27-.568-3.544-.53l-.212.005v.18z" />
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

export default function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const openSignup = () => setIsSignupOpen(true);
  const closeSignup = () => setIsSignupOpen(false);

  return (
    <>
      <SignupModal isOpen={isSignupOpen} onClose={closeSignup} />
      <Navbar onOpenSignup={openSignup} />
      <div className="bg-purple-logo text-white text-center py-6 px-6 text-2xl font-bold mt-[60px]">
        Website is under development
      </div>
      <main>
        <Hero onOpenSignup={openSignup} />
        <About />
        <ResistanceCafe onOpenSignup={openSignup} />
        <TakeAction />
        <Resources />
        <CTA onOpenSignup={openSignup} />
      </main>
      <Footer />
    </>
  );
}
