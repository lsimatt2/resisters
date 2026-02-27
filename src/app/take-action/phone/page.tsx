import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "Phone Banking | ReSisters CT",
  description:
    "Learn how to phone bank with ReSisters CT. Make persuasive calls to voters and help defend democracy.",
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
    <section className="relative bg-gradient-to-br from-berry-900 via-berry-800 to-green-800 text-white pt-28 pb-16 px-6">
      <div className="relative mx-auto max-w-4xl text-center">
        <Link
          href="/#actions"
          className="inline-block text-pink-200 hover:text-white text-sm mb-4 transition-colors"
        >
          &larr; Back to Take Action
        </Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Phone Banking
        </h1>
        <p className="text-lg sm:text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
          Outside of face-to-face canvassing, phone banking is the most
          effective way to Get Out The Vote.
        </p>
      </div>
    </section>
  );
}

function WhyPhoneBank() {
  return (
    <section className="py-16 px-6 bg-plum-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-berry-900 mb-4">
          Why Phone Banking?
        </h2>
        <div className="w-16 h-1 bg-green-600 rounded-full mb-8" />
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            Some people are annoyed by phone calls but, for someone who has been
            purged from the voter rolls, your call can be a conversation of hope.
            There are many stories of reluctant phone bankers who had such
            inspiring conversations that they are now phone bankers for life.
          </p>
          <p>
            Phone banking is an effective way to personally connect with people
            and encourage them to vote. Engaging a potential voter over the phone
            gives them an opportunity to talk, ask questions, and perhaps discuss
            issues they can&rsquo;t discuss at home.
          </p>
          <p>
            Amazing technology tools now let you phone without revealing your
            phone number. The rewards of a successful call are substantial
            &mdash; imagine helping someone get registered so they can exercise
            their most fundamental democratic right.
          </p>
        </div>
      </div>
    </section>
  );
}

function TheImpact() {
  const points = [
    {
      title: "It's a Movement",
      description:
        "While one call might not do a lot, it's not about one call. Hundreds of people making dozens of calls reach thousands of voters. Combined, we make a difference.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
    },
    {
      title: "Clean Up Voter Lists",
      description:
        "A secondary benefit is that phone banking helps clean up lists so that future phone bankers and campaigns can be more efficient with their calls.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
        </svg>
      ),
    },
    {
      title: "Research-Backed",
      description:
        "According to the Yale Institution for Social and Policy Studies, phone banking is one of the most effective GOTV strategies, second only to in-person canvassing.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
    },
    {
      title: "Community Support",
      description:
        "As a ReSister, you can phone bank during our Resistance Cafe. It's great to have company — share tips, celebrate successes, and commiserate with others.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-berry-900 mb-4">
          Why It Works
        </h2>
        <div className="w-16 h-1 bg-berry-600 rounded-full mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {points.map((point) => (
            <div
              key={point.title}
              className="flex gap-4 bg-white border border-gray-200 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center shrink-0">
                {point.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">
                  {point.title}
                </h3>
                <p className="text-gray-600">{point.description}</p>
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
      title: "Get trained",
      description:
        "We partner with various organizations that provide regular training sessions. If you've never phone banked, you'll be impressed with the slick, easy-to-use tools that let you make a maximum number of calls with minimum effort.",
    },
    {
      number: "2",
      title: "Grab your devices",
      description:
        "You'll need your smartphone and a computer or iPad. Technology tools let you phone without revealing your personal number.",
    },
    {
      number: "3",
      title: "Pick your time",
      description:
        "Phone bank with fellow ReSisters during our Resistance Cafe action sessions, or on your own. Organizations typically limit calling to daytime hours in the recipient's time zone.",
    },
    {
      number: "4",
      title: "Make the call",
      description:
        "Follow the provided scripts. Listen, be genuine, and remember — you're helping people exercise their most fundamental right. Check the Weekly Menu for current phone banking actions.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-plum-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-berry-900 mb-4">
          How to Get Started
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

function Resources() {
  const resources = [
    {
      title: "How to Make a Persuasive Phone Call",
      description: "Video guide from Resistance Labs on effective phone banking techniques.",
      href: "https://www.youtube.com/watch?v=wMla1q2BdNY&feature=youtu.be",
    },
    {
      title: "Masking Your Phone Number",
      description: "Instructions for how to mask your personal number when making calls.",
      href: "https://docs.google.com/document/d/1saXUBNnRAbvPBS8YSRD_EMw2xv4tVm7zlZEv8XOaxYc/edit",
    },
    {
      title: "Slack Guide",
      description: "Learn how to use Slack to connect with coaches and get quick answers during campaigns.",
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

        <h3 className="text-2xl font-bold text-berry-900 mt-12 mb-6">
          Phone Bank Training Videos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="https://youtu.be/mgQsjCl06vE?feature=shared"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Open VPB</h3>
            </div>
            <p className="text-gray-600 text-sm">
              You dial yourself on your own phone (or sometimes on the computer. Depends on how the campaign sets it up.)
            </p>
          </a>

          <a
            href="https://youtu.be/cMqsfqpHPvU?si=2WRygm5QXX3B1OgL"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Scale To Win</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Computer dials and only connects you when someone picks up.
            </p>
          </a>

          <a
            href="https://youtu.be/mgQsjCl06vE?feature=shared"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Hub Dialer</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Computer dials and only connects you when someone picks up. <em className="text-gray-500">May be going out of business.</em>
            </p>
          </a>

          <a
            href="https://youtu.be/l6vpmz01ZDE?si=HR2tvJYbZHrao-4f"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Callfire</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Cool new dialer that a recent Shelton, CT campaign used. Will likely be used again, especially if HubDialer goes away.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-berry-100 to-green-50 text-gray-900">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-berry-800">Ready to Make Calls?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join our email list to get the Weekly Menu with phone banking
          opportunities, training sessions, and Zoom links.
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

export default function PhoneBanking() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyPhoneBank />
        <TheImpact />
        <HowItWorks />
        <Resources />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
