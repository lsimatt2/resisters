import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhereToVote from "@/components/WhereToVote";

export const metadata: Metadata = {
  title: "Where Should I Vote? | ReSisters CT",
  description:
    "Students and temporary residents can often choose where to vote. This tool helps you decide which state gives your vote more impact.",
};

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="ReSisters CT" width={60} height={38} />
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
          <Link
            href="/take-action/voting"
            className="bg-purple-logo text-white px-5 py-2 rounded-full hover:bg-berry-700 transition-colors"
          >
            Voting Resources
          </Link>
        </div>
        <Link
          href="/take-action/voting"
          className="md:hidden bg-purple-logo text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-berry-700 transition-colors"
        >
          Voting Resources
        </Link>
      </div>
    </nav>
  );
}

export default function WhereToVotePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#f0f4ef] min-h-screen">
        <div className="mx-auto max-w-4xl px-4 pt-4">
          <Link
            href="/take-action/voting"
            className="inline-block text-green-logo hover:text-berry-700 text-sm mb-2 transition-colors"
          >
            &larr; Back to Voting Resources
          </Link>
        </div>
        <WhereToVote />
      </main>
    </>
  );
}
