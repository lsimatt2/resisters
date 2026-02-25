import Image from "next/image";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-3">
          <Image src="/logo.png" alt="ReSisters CT" width={60} height={38} />
          <span className="text-lg font-bold text-berry-800 hidden sm:inline">
            ReSisters CT
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#about" className="hover:text-berry-700 transition-colors">
            Who We Are
          </a>
          <a href="#actions" className="hover:text-berry-700 transition-colors">
            Take Action
          </a>
          <a href="#cafe" className="hover:text-berry-700 transition-colors">
            Resistance Cafe
          </a>
          <a
            href="#resources"
            className="hover:text-berry-700 transition-colors"
          >
            Resources
          </a>
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
    <section className="relative bg-gradient-to-br from-green-50 via-green-50 to-emerald-50 pt-32 pb-20 px-6">
      <div className="relative mx-auto max-w-4xl text-center">
        <Image
          src="/logo.png"
          alt="ReSisters CT"
          width={150}
          height={96}
          className="mx-auto mb-8 drop-shadow-md"
        />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-green-logo">
          Educate. Activate.
          <br />
          <span className="!text-purple-logo">Defend Democracy.</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Grassroots activist organization founded in Westport, CT in 2016. Now active throughout
          Connecticut and beyond, promoting candidates and causes in support of American democracy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://resistersct.us18.list-manage.com/subscribe?u=3f5471ab184963199413bde34&id=ffa6171dfe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-logo hover:bg-berry-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors shadow-lg"
          >
            Join the Movement
          </a>
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
            Presidential election, when a group of formerly politically inactive
            women decided to become politically engaged.
          </p>
          <p>
            Founded in Westport, Connecticut in 2016, we have expanded
            throughout CT and beyond. We campaign for pro-democracy candidates at
            local and national levels, research policy impacts, and advocate for
            initiatives that strengthen our democracy.
          </p>
          <p>
            Our strategy centers on building a team of dedicated activists highly
            skilled in letter writing, phone banking, text banking, canvassing,
            and social media communication. We position ourselves as a rapid
            response team available to support Democratic candidates nationwide.
          </p>
          <p className="text-base italic text-gray-500">
            We do not fundraise but encourage donating to organizations also
            working to defend democracy.
          </p>
        </div>
      </div>
    </section>
  );
}

const actions = [
  {
    title: "Phone Bank",
    description: "Make persuasive calls to voters in key districts across the country.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    href: "/take-action/phone",
  },
  {
    title: "Text Bank",
    description: "Reach voters through text messages with mobilize campaigns.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    href: "/take-action/text",
  },
  {
    title: "Write Letters",
    description: "Send letters to legislators and letters to the editor on key issues.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    href: "/take-action/letters",
  },
  {
    title: "Send Postcards",
    description: "Write postcards to voters as a personal touch in outreach campaigns.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
    href: "/take-action/postcards",
  },
  {
    title: "Canvass",
    description: "Go door-to-door in your community for face-to-face voter outreach.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    href: "/take-action/canvass",
  },
  {
    title: "Social Media",
    description: "Amplify our message on Twitter, Bluesky, and other platforms.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    href: "/take-action/social-media",
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
          You are the Power of One! More and more elections are decided by
          razor-thin margins &mdash; your actions can make the difference.
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
              <div className="w-14 h-14 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition-colors">
                {action.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {action.title}
              </h3>
              <p className="text-gray-600">{action.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResistanceCafe() {
  return (
    <section id="cafe" className="py-20 px-6 bg-gradient-to-br from-green-50 via-green-50 to-emerald-50">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-logo">
          Resistance Cafe
        </h2>
        <div className="w-16 h-1 bg-purple-logo mx-auto mb-10 rounded-full" />
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          A weekly gathering of the ReSisters and Misters &mdash; activists
          supporting each other and working to make significant political
          change.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-left">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-green-logo">When</h3>
            <p className="text-gray-600">
              Every Monday
              <br />
              10&ndash;11 a.m. on Zoom
              <br />
              7 p.m. Monday recap session
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-green-logo">Weekly Menu</h3>
            <ul className="text-gray-600 space-y-1">
              <li>
                <strong className="text-gray-800">Lift Your Spirits</strong> &mdash; positive news
              </li>
              <li>
                <strong className="text-gray-800">Starters</strong> &mdash; between-meeting actions
              </li>
              <li>
                <strong className="text-gray-800">Mains</strong> &mdash; group activities & speakers
              </li>
              <li>
                <strong className="text-gray-800">Desserts</strong> &mdash; articles & humor
              </li>
            </ul>
          </div>
        </div>
        <a
          href="https://resistersct.us18.list-manage.com/subscribe?u=3f5471ab184963199413bde34&id=ffa6171dfe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-logo hover:bg-berry-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
        >
          Subscribe to Get the Zoom Link
        </a>
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
          {/* Training Card */}
          <a
            href="/take-action/training"
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow block"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-green-50 text-green-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-logo">How to be an Activist</h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Guides for letters to the editor, phone banking, text banking, Slack, Zoom, and more.
            </p>
            <span className="text-sm text-berry-600 font-medium">
              View activist resources &rarr;
            </span>
          </a>

          {/* Voting Card */}
          <a
            href="/take-action/voting"
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow block"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-green-50 text-green-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-logo">Voting</h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Registration, absentee ballots, and voting information for CT, PA, and other states.
            </p>
            <span className="text-sm text-berry-600 font-medium">
              View voting resources &rarr;
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
              <h3 className="text-xl font-bold text-green-logo">Other Resources</h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Stamps and other helpful links for activists.
            </p>
            <span className="text-sm text-berry-600 font-medium">
              View other resources &rarr;
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-logo">
          New to ReSisters?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join our email list to receive the Weekly Menu with Zoom links,
          action items, and ways to get involved.
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
              Grassroots activist organization founded in Westport, CT in 2016.
              Now active throughout Connecticut and beyond, promoting candidates
              and causes in support of American democracy.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
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
                <a href="#cafe" className="hover:text-white transition-colors">
                  Resistance Cafe
                </a>
              </li>
              <li>
                <a
                  href="#resources"
                  className="hover:text-white transition-colors"
                >
                  Resources
                </a>
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

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-purple-logo text-white text-center py-3 px-6 text-sm font-medium mt-[60px]">
        Website is under development
      </div>
      <main>
        <Hero />
        <About />
        <TakeAction />
        <ResistanceCafe />
        <Resources />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
