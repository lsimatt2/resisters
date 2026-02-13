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
            className="bg-berry-600 text-white px-5 py-2 rounded-full hover:bg-berry-700 transition-colors"
          >
            Join Us
          </a>
        </div>
        <a
          href="https://resistersct.us18.list-manage.com/subscribe?u=3f5471ab184963199413bde34&id=ffa6171dfe"
          target="_blank"
          rel="noopener noreferrer"
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
    <section className="relative bg-gradient-to-br from-berry-900 via-berry-800 to-green-800 text-white pt-32 pb-20 px-6">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzMuMzEzIDAgNiAyLjY4NyA2IDZzLTIuNjg3IDYtNiA2LTYtMi42ODctNi02IDIuNjg3LTYgNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Image
          src="/logo.png"
          alt="ReSisters CT"
          width={150}
          height={96}
          className="mx-auto mb-8 drop-shadow-lg bg-white/90 rounded-2xl p-4"
        />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          Educate. Activate.{" "}
          <span className="text-green-400">Defend Democracy.</span>
        </h1>
        <p className="text-lg sm:text-xl text-pink-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Grassroots activists in lower Fairfield County, Connecticut promoting
          candidates and causes that support democracy at every level.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://resistersct.us18.list-manage.com/subscribe?u=3f5471ab184963199413bde34&id=ffa6171dfe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-berry-500 hover:bg-berry-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors shadow-lg"
          >
            Join the Movement
          </a>
          <a
            href="#about"
            className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
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
            We are grassroots activists based in lower Fairfield County,
            Connecticut. We campaign for pro-democracy candidates at local and
            national levels, research policy impacts, and advocate for initiatives
            that strengthen our democracy.
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
    href: "https://resistersct.org/take-action/make-phone-calls/",
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
    href: "https://resistersct.org/take-action/letters/",
  },
  {
    title: "Send Postcards",
    description: "Write postcards to voters as a personal touch in outreach campaigns.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
    href: "https://resistersct.org/take-action/postcards/",
  },
  {
    title: "Canvass",
    description: "Go door-to-door in your community for face-to-face voter outreach.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    href: "https://resistersct.org/take-action/personal-connections/",
  },
  {
    title: "Social Media",
    description: "Amplify our message on Twitter, Bluesky, and other platforms.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    href: "https://resistersct.org/take-action/tweets/",
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
    <section id="cafe" className="py-20 px-6 bg-berry-900 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Resistance Cafe
        </h2>
        <div className="w-16 h-1 bg-green-400 mx-auto mb-10 rounded-full" />
        <p className="text-xl text-pink-100 mb-8 leading-relaxed">
          A weekly gathering of the ReSisters and Misters &mdash; activists
          supporting each other and working to make significant political
          change.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-left">
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="font-semibold text-lg mb-2">When</h3>
            <p className="text-pink-100">
              Every Monday
              <br />
              10&ndash;11 a.m. on Zoom
              <br />
              7 p.m. Monday recap session
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="font-semibold text-lg mb-2">Weekly Menu</h3>
            <ul className="text-pink-100 space-y-1">
              <li>
                <strong>Lift Your Spirits</strong> &mdash; positive news
              </li>
              <li>
                <strong>Starters</strong> &mdash; between-meeting actions
              </li>
              <li>
                <strong>Mains</strong> &mdash; group activities & speakers
              </li>
              <li>
                <strong>Desserts</strong> &mdash; articles & humor
              </li>
            </ul>
          </div>
        </div>
        <a
          href="https://resistersct.us18.list-manage.com/subscribe?u=3f5471ab184963199413bde34&id=ffa6171dfe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
        >
          Subscribe to Get the Zoom Link
        </a>
      </div>
    </section>
  );
}

function Priorities() {
  return (
    <section className="py-20 px-6 bg-plum-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-berry-900 mb-4">
          Our Priorities
        </h2>
        <div className="w-16 h-1 bg-berry-600 mx-auto mb-12 rounded-full" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="https://resistersct.org/candidates/local-candidates/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div className="w-14 h-14 bg-berry-100 text-berry-700 rounded-xl flex items-center justify-center mb-4 mx-auto text-2xl">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-berry-800 mb-2">
              CT / Local
            </h3>
            <p className="text-gray-600">
              Supporting pro-democracy candidates in Connecticut and local races.
            </p>
          </a>
          <a
            href="https://resistersct.org/candidates/pa-candidates/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div className="w-14 h-14 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4 mx-auto text-2xl">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-berry-800 mb-2">
              State Priorities
            </h3>
            <p className="text-gray-600">
              Focused campaigns in key swing states to flip and keep seats blue.
            </p>
          </a>
          <a
            href="https://resistersct.org/candidates/national-candidates/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div className="w-14 h-14 bg-berry-100 text-berry-700 rounded-xl flex items-center justify-center mb-4 mx-auto text-2xl">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-berry-800 mb-2">
              Federal Priorities
            </h3>
            <p className="text-gray-600">
              National races where your actions can make the greatest impact.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

function Resources() {
  const partners = [
    { name: "Turn PA Blue", url: "https://www.turnpablue.org/" },
    { name: "Lean Left VT", url: "https://www.leanleftvt.org/" },
    { name: "Swing Left", url: "https://swingleft.org/" },
    { name: "Sister District", url: "https://sisterdistrict.com" },
    { name: "Vote Forward", url: "https://votefwd.org/" },
    { name: "Vote411", url: "https://www.vote411.org/" },
  ];

  return (
    <section id="resources" className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-berry-900 mb-4">
          Resources & Partners
        </h2>
        <div className="w-16 h-1 bg-green-600 mx-auto mb-12 rounded-full" />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-plum-50 hover:bg-plum-100 border border-plum-200 hover:border-berry-300 rounded-xl p-5 text-center font-medium text-gray-700 hover:text-berry-700 transition-all"
            >
              {partner.name}
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://resistersct.org/resources/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-berry-600 hover:text-berry-800 font-medium underline underline-offset-4"
          >
            View all training resources and toolkits &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-berry-600 to-green-700 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          New to ReSisters?
        </h2>
        <p className="text-xl text-pink-100 mb-8">
          Join our email list to receive the Weekly Menu with Zoom links,
          action items, and ways to get involved.
        </p>
        <a
          href="https://resistersct.us18.list-manage.com/subscribe?u=3f5471ab184963199413bde34&id=ffa6171dfe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-berry-700 font-bold px-10 py-4 rounded-full text-lg hover:bg-pink-50 transition-colors shadow-lg"
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
              Grassroots activists in lower Fairfield County, CT promoting
              candidates and causes that support democracy.
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
              <li>Lower Fairfield County, Connecticut</li>
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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TakeAction />
        <ResistanceCafe />
        <Priorities />
        <Resources />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
