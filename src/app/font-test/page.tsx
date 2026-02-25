import Image from "next/image";
import {
  Inter,
  Montserrat,
  Playfair_Display,
  Lora,
  Raleway,
  Open_Sans,
  Merriweather,
  Poppins,
  Source_Sans_3,
  DM_Serif_Display,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });
const merriweather = Merriweather({ weight: ["300", "400", "700", "900"], subsets: ["latin"], variable: "--font-merriweather" });
const poppins = Poppins({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin"], variable: "--font-poppins" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-sourcesans" });
const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-dmserif" });

function HeroBlock({
  label,
  headingFont,
  bodyFont,
  headingName,
  bodyName,
}: {
  label: string;
  headingFont: string;
  bodyFont: string;
  headingName: string;
  bodyName: string;
}) {
  return (
    <div className="mb-16">
      {/* Label */}
      <div className="text-center mb-6">
        <span className="inline-block bg-berry-900 text-white text-sm font-bold px-4 py-2 rounded-full tracking-wide">
          {label}
        </span>
        <p className="text-gray-500 text-sm mt-2">
          Headings: <strong>{headingName}</strong> &middot; Body: <strong>{bodyName}</strong>
        </p>
      </div>

      {/* Hero replica */}
      <section className="relative bg-gradient-to-br from-green-50 via-green-50 to-emerald-50 pt-16 pb-16 px-6 rounded-2xl border border-gray-200 shadow-sm">
        <div className="relative mx-auto max-w-4xl text-center">
          <Image
            src="/logo.png"
            alt="ReSisters CT"
            width={120}
            height={77}
            className="mx-auto mb-6 drop-shadow-md"
          />
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-green-logo ${headingFont}`}
          >
            Educate. Activate.
            <br />
            <span className="!text-purple-logo">Defend Democracy.</span>
          </h1>
          <p
            className={`text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed ${bodyFont}`}
          >
            Grassroots activist organization founded in Westport, CT in 2016. Now active throughout
          Connecticut and beyond, promoting candidates and causes in support of American democracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <span
              className={`bg-purple-logo text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg cursor-default ${bodyFont}`}
            >
              Join the Movement
            </span>
            <span
              className={`border-2 border-berry-300 text-berry-700 font-semibold px-8 py-4 rounded-full text-lg cursor-default ${bodyFont}`}
            >
              Learn More
            </span>
          </div>

          {/* Nav preview */}
          <div className={`mt-8 pt-6 border-t border-gray-200 flex items-center justify-center gap-8 text-sm font-medium text-gray-600 ${bodyFont}`}>
            <span>Who We Are</span>
            <span>Take Action</span>
            <span>Resistance Cafe</span>
            <span>Resources</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function FontTest() {
  return (
    <div
      className={`min-h-screen bg-white py-12 px-6 ${inter.variable} ${montserrat.variable} ${playfairDisplay.variable} ${lora.variable} ${raleway.variable} ${openSans.variable} ${merriweather.variable} ${poppins.variable} ${sourceSans.variable} ${dmSerifDisplay.variable}`}
    >
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-center text-berry-900 mb-2 font-[family-name:var(--font-inter)]">
          Font Pairing Test
        </h1>
        <p className="text-center text-gray-500 mb-12 font-[family-name:var(--font-inter)]">
          Compare 5 font pairings for the ReSisters CT site. Each shows the hero section with different heading &amp; body fonts.
        </p>

        {/* Pairing 1: Current — Inter / Inter */}
        <HeroBlock
          label="Option 1 — Current"
          headingFont="font-[family-name:var(--font-inter)]"
          bodyFont="font-[family-name:var(--font-inter)]"
          headingName="Inter"
          bodyName="Inter"
        />

        {/* Pairing 2: Montserrat / Open Sans */}
        <HeroBlock
          label="Option 2"
          headingFont="font-[family-name:var(--font-montserrat)]"
          bodyFont="font-[family-name:var(--font-opensans)]"
          headingName="Montserrat"
          bodyName="Open Sans"
        />

        {/* Pairing 3: Playfair Display / Source Sans 3 */}
        <HeroBlock
          label="Option 3"
          headingFont="font-[family-name:var(--font-playfair)]"
          bodyFont="font-[family-name:var(--font-sourcesans)]"
          headingName="Playfair Display"
          bodyName="Source Sans 3"
        />

        {/* Pairing 4: Raleway / Lora */}
        <HeroBlock
          label="Option 4"
          headingFont="font-[family-name:var(--font-raleway)]"
          bodyFont="font-[family-name:var(--font-lora)]"
          headingName="Raleway"
          bodyName="Lora"
        />

        {/* Pairing 5: DM Serif Display / Poppins */}
        <HeroBlock
          label="Option 5"
          headingFont="font-[family-name:var(--font-dmserif)]"
          bodyFont="font-[family-name:var(--font-poppins)]"
          headingName="DM Serif Display"
          bodyName="Poppins"
        />
      </div>
    </div>
  );
}
