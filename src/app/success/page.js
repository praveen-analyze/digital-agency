import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SuccessPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-100">
        <div className="text-center px-6 py-20">
          <div className="w-24 h-24 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl border border-emerald-500/30">
            ✓
          </div>
          <h1 className="text-4xl font-bold mb-4">Message Sent Successfully!</h1>
          <p className="text-zinc-400 mb-10 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. We have received your message and our team will get back to you as soon as possible.
          </p>
          <Link href="/">
            <span className="bg-emerald-500 text-zinc-950 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-400 transition shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] cursor-pointer inline-block">
              Return Home
            </span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
