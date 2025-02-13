import GreenRectangle from "@/components/GreenRectangle";
import Rectangle from "@/components/Rectangle";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Rectangle color='green'/>
      <Link href="/page2">Ir a pagina 2</Link>
    </div>
  );
}
