import Link from "next/link";

export default function CaseStudyNotFound() {
  return (
    <main className="relative z-10 mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center px-5 py-24 md:px-8">
      <p className="section-label">Case study</p>
      <h1 className="section-title">This case study was not found.</h1>
      <Link
        href="/#projects"
        className="btn-ghost mt-8 inline-flex text-sm"
        data-cursor="hover"
      >
        Back to projects
      </Link>
    </main>
  );
}
