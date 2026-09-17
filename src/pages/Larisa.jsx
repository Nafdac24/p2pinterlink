import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Larisa() {
  const [amaka, setAmaka] = useState(true);
  return (
    <div className="text-xl">
      <div
        className={`${amaka ? "bg-slate-300" : "bg-amber-200"} flex justify-between px-10 py-2 shadow-lg`}
      >
        <p>Larisa</p>
        <button onClick={() => setAmaka(!amaka)}>
          {amaka ? <Menu /> : <X />}
        </button>
      </div>
      {/*  */}
      {amaka ? null : (
        <ul className="flex flex-col items-center bg-cyan-300 space-y-10 divide-y-2">
          <li>Lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
          <li>sit amet</li>
          <li>consectetur</li>
          <li>adipisicing</li>
          <li>Minima</li>
        </ul>
      )}
    </div>
  );
}
