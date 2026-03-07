import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "Text Banking | ReSisters CT",
  description:
    "Learn how to text bank with ReSisters CT. Send hundreds of texts to voters in minutes from the comfort of your home.",
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
          <Link
            href="/#about"
            className="hover:text-berry-700 transition-colors"
          >
            Who We Are
          </Link>
          <Link
            href="/#actions"
            className="hover:text-berry-700 transition-colors"
          >
            Take Action
          </Link>
          <Link
            href="/#cafe"
            className="hover:text-berry-700 transition-colors"
          >
            Resistance Cafe
          </Link>
          <Link
            href="/#resources"
            className="hover:text-berry-700 transition-colors"
          >
            Resources
          </Link>
          <a
            href="#signup"
            className="bg-berry-600 text-white px-5 py-2 rounded-full hover:bg-berry-700 transition-colors"
          >
            Join Us
          </a>
        </div>
        <a
          href="#signup"
          className="md:hidden bg-berry-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-berry-700 transition-colors"
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
          Text Banking
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Send hundreds of texts in minutes from the comfort of your home.
          <br />
          It&rsquo;s an efficient way to reach voters.
        </p>
      </div>
    </section>
  );
}

function WhatIsTextBanking() {
  return (
    <section className="py-16 px-6 bg-plum-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-berry-900 mb-4">
          What Is Text Banking?
        </h2>
        <div className="w-16 h-1 bg-green-600 rounded-full mb-8" />
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            When you text bank, you send large numbers of messages to cell phones
            using specialized software provided by partner organizations.
            You do not use your personal texting plan. You can do this from your computer,
            tablet, or any device with internet access.
          </p>
          <p>
            Texting works because people read text messages, especially short direct ones. It also gives recipients an easy, low-pressure way to
            ask questions or engage in conversation. Because you can send
            hundreds of messages quickly, It is an efficient way
            to take action.
          </p>
        </div>
      </div>
    </section>
  );
}

const reasons = [
  {
    title: "Get Out The Vote",
    description:
      "Rally support for specific candidates or groups of candidates in key races.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Voter Registration",
    description:
      "Help people register to vote and make sure they're ready for election day.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    title: "Issue Advocacy",
    description:
      "Encourage people to call their representatives about specific issues or bills.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
        />
      </svg>
    ),
  },
  {
    title: "Voter Identification",
    description:
      "Deeper identification of voters and their attitudes on specific issues.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    ),
  },
];

function WhyTextBank() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-berry-900 mb-4">
          Why Organizations Use Text Banking
        </h2>
        <div className="w-16 h-1 bg-berry-600 rounded-full mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-4 bg-white border border-gray-200 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center shrink-0">
                {reason.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function TrainingResources() {
  const resources = [
    {
      title: "Slack Guide",
      description: "Learn how to use Slack to coordinate with other texters and stay in the loop.",
      href: "https://slack.com/help/articles/360059928654-How-to-use-Slack--your-quick-start-guide",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-berry-900 mb-4">
          Training & Resources
        </h2>
        <div className="w-16 h-1 bg-berry-600 rounded-full mb-8" />
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          We partner with various organizations for our texting activities. They
          provide regular training sessions, tips, and tools to get started.
          It&rsquo;s easy to get started!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-50 text-green-700 rounded-lg flex items-center justify-center group-hover:bg-green-700 group-hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">{resource.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-green-50 to-white text-gray-900">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-berry-800">Ready to Text?</h2>
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
              ReSisters is a grassroots activist organization founded in Westport, CT in 2016.
              Now active throughout Connecticut and beyond, we are dedicated to promoting candidates
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
          <div className="mb-4">
            <Link
              href="/#actions"
              className="text-green-logo hover:text-berry-700 transition-colors"
            >
              &larr; Back to Take Action
            </Link>
          </div>
          &copy; {new Date().getFullYear()} ReSisters CT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function TextBanking() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIsTextBanking />
        <WhyTextBank />
        <TrainingResources />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
