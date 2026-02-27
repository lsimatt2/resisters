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
          Send 100&ndash;500 texts in minutes from the comfort of your home.
          It&rsquo;s one of the most efficient ways to reach voters.
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
            When we text bank, we send large numbers of messages to cell phones
            using specialized software provided by partner organizations &mdash;
            not your personal texting plan. You can do this from your computer,
            iPad, or any device with internet access.
          </p>
          <p>
            Texting works because people read text messages, especially short,
            direct ones. It also gives recipients an easy, low-pressure way to
            ask questions or engage in conversation. Because you can send
            hundreds of messages quickly, it&rsquo;s an incredibly efficient use
            of your time.
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

function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Join a training session",
      description:
        "Our partner organizations provide regular training sessions to get you started. We recommend taking the training once, trying a bit of texting, then taking the training again.",
    },
    {
      number: "2",
      title: "Log into the texting platform",
      description:
        "You'll use software like Spoke provided by partner organizations — not your personal phone plan. Works on computers, tablets, and phones.",
    },
    {
      number: "3",
      title: "Send your texts",
      description:
        "Follow the provided scripts and send texts to voters. You can send 100–500 messages in just minutes. Short, direct messages get the best responses.",
    },
    {
      number: "4",
      title: "Handle replies",
      description:
        "When voters respond, you'll have suggested replies ready. It's a low-pressure, largely anonymous way to have meaningful conversations with voters.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-plum-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-berry-900 mb-4">
          How It Works
        </h2>
        <div className="w-16 h-1 bg-green-600 rounded-full mb-10" />
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-5 items-start">
              <div className="w-10 h-10 bg-berry-600 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
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
      title: "Text Banking Step-by-Step",
      description: "A handy recap guide from Lean Left VT covering everything you need to know.",
      href: "https://docs.google.com/document/d/1RSlwbPxRbzDQc84s0Ixd85zrbXf9hCXhHnILKrD3c-o/edit?usp=sharing",
    },
    {
      title: "Slack Guide",
      description: "Learn how to use Slack to coordinate with other texters and stay in the loop.",
      href: "https://standuply.com/how-to-use-slack",
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
          When you first start texting it can seem confusing &mdash; but
          it&rsquo;s easy once you&rsquo;ve done it a few times!
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
    <section className="py-16 px-6 bg-gradient-to-r from-berry-100 to-green-50 text-gray-900">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-berry-800">Ready to Start Texting?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join our email list to get the Weekly Menu with texting opportunities,
          training sessions, and Zoom links.
        </p>
        <SignupForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-berry-100 text-gray-700 py-12 px-6">
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
            <h3 className="text-berry-900 font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="hover:text-berry-700 transition-colors"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/#actions"
                  className="hover:text-berry-700 transition-colors"
                >
                  Take Action
                </Link>
              </li>
              <li>
                <Link
                  href="/#cafe"
                  className="hover:text-berry-700 transition-colors"
                >
                  Resistance Cafe
                </Link>
              </li>
              <li>
                <Link
                  href="/#resources"
                  className="hover:text-berry-700 transition-colors"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-berry-900 font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:ReSistersCT@gmail.com"
                  className="hover:text-berry-700 transition-colors"
                >
                  ReSistersCT@gmail.com
                </a>
              </li>
              <li>Founded in Westport, CT — now throughout CT &amp; beyond</li>
              <li>Zoom Mondays at 10 a.m. and 7 p.m.</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-berry-300 pt-6 text-center text-sm text-gray-500">
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
        <HowItWorks />
        <TrainingResources />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
