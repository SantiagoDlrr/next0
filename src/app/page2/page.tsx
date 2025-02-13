import Image from "next/image";
import Link from "next/link";
import GreenRectangle from "@/components/GreenRectangle";
import Rectangle from "@/components/Rectangle";

export default function page2() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-5 gap-2">
        {Array.from({length:25}).map((_, index) => {
          return <Rectangle key={index} color={index % 2 === 0 ? 'white' : 'green'}/>
        })}
      </div>

      {/*<div className="grid gap-4 grid-cols-5">
        <Rectangle color='green'/>
        <Rectangle color='blue'/>
        <Rectangle color='green'/>
        <Rectangle color='blue'/>
        <Rectangle color='green'/>
        <Rectangle color='blue'/>
        <Rectangle color='green'/>
        <Rectangle color='blue'/>
        <Rectangle color='green'/>
        <Rectangle color='blue'/>
        <Rectangle color='green'/>
        <Rectangle color='blue'/>
        <Rectangle color='green'/>
        <Rectangle color='blue'/>
        <Rectangle color='green'/>
        <Rectangle color='blue'/>
        <Rectangle color='green'/>
        <Rectangle color='blue'/>
        <Rectangle color='green'/>
        <Rectangle color='blue'/>
        <Rectangle color='green'/>
        <Rectangle color='blue'/>
        <Rectangle color='green'/>
        <Rectangle color='blue'/>
        <Rectangle color='green'/>

      </div>*/}
      <Link href="../">Ir a page 1</Link>
    </div>
  );
}

