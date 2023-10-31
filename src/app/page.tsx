import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/middleware" className="text-2xl m-10 underline">
        Click to check cookies in middleware
      </Link>
    </>
  );
}
