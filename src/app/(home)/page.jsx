"use client";

import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function Landing() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Handle response as needed
      setMessage("Jobs landing in your inbox soon! ✨");
    } catch (error) {
      console.error("Error submitting form", error);
      setMessage("Hubo un error al enviar el formulario. 😰");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-0 sm:pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-2xl lg:flex-shrink-0 lg:pt-8">
          <FadeIn>
            <Image
              className="h-16 lg:mt-2"
              width={64}
              height={64}
              src="/images/alpha.svg"
              alt="Alpha"
            />
            <h1 className="mt-10 sm:mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <span className="text-wine">FIND</span> great jobs at startups
              that share your <span className="text-secondary">interests</span>{" "}
              and <span className="text-primary">values</span>
            </h1>
          </FadeIn>
          <FadeInStagger faster>
            <FadeIn>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                <span className="text-wine font-bold">Join</span> our waitlist
                for early access.
              </p>
            </FadeIn>
            <FadeIn>
              <div className="mt-10" action="/api/" method="POST">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-center gap-4 w-full"
                >
                  <div className="flex-shrink w-full sm:w-auto">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      id="email"
                      className="block bg-white/30 w-full rounded-xs border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wine sm:text-sm sm:leading-6"
                      placeholder="Write your email here"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-xs bg-wine px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Sign me Up"}
                  </button>
                </form>
                <p
                  className={clsx(
                    message !== "" ? "opacity-100" : "opacity-0",
                    "pt-2 text-lg font-semibold transition-all duration-700"
                  )}
                >
                  {message}
                </p>
              </div>
            </FadeIn>
          </FadeInStagger>
        </div>
        <div className="mx-auto mt-16 flex sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-24">
          <div className="max-w-3xl md:mt-16 flex-none sm:max-w-5xl lg:max-w-none">
            <div className="rounded-xl bg-violette/5 p-2 ring-1 ring-inset ring-violette/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/images/email.png"
                alt="Email screenshot"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAFiCAMAAAAdsVa4AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAMNQTFRF////8fP0+vr6////7e7u9PX28PLz7e/w9fX1/Pz8paamuLi4rq+vy8zM6ejpvr+/5OTkxMXFnp6e3t/f1tbW2trbXl5eQkJC0dLSbm5uSklJioqKUlJSg4ODLy8vOTk5WVlZZ2dndHR0JCQkenp6kJCQlZWVGxsbmJiYExMTfn5+AgICCwsL+zYf/GRW/Ew3+ras+YR4+L4499TO8/T1I8lB+5yR9XNo+si88PHx2tra7E9C4+PkdNOCSM1di2dkAAAAj45/jwAAAEF0Uk5T////zP/M/////////////////////////////////////////////////////////////6f/////Rwb/BP///wAVI3XTAAAgpUlEQVR4nO2dC3vcJtqwGa2qAyAh0Pl8ntHIdg6bfEna7e71/v9f9YHGSTz2pE2bEDvuc9fxzABC2L4LCCFAv/3+69tfAOD78fbtr7/9hn7/dQcA35lff0fgFaCBX9Hbxy4C8Bx5C2IBOniLfnnsIgDPkV9ALEAHf0ssyzfPPgfhhv+dygR8I7b1hYiARfeDTF9i+cHX5m3GXnwv+8hThOeBd8X65Ivt3x7qBxeKaAURi+8GxAJvLPbXlg7Qie19QRMfe/je//2+l0mCKDPvpTUfKHibhaCCnFkRlFSxnCe8I9ab1+/ff1BvPvz73/9+I1+t//7vf/+9X0Y/ymKPnxWDxDxijMX0q7UHNOJnUXTxf/EQx7v7f6PYvz3ifg1CZpnSvK/bDsvqyuLsblCEAyqrlRp7d0M/i2W9fiGRJbL/rZAnyv6f5L/nGXuev4vC7LwMshVULSEJd5a1g2rrcTE938949rCpMQWnhN0L3MRSlda9cEsQsvP28716K5AS+dQq7+YeYebZgTpEnkMZsPFZLP+9EkvWVG82seQJ/6vE+t+9gsgyhMF5e0rCOFT1qRQrFg+KDvxYou2PEzxoyQLMpFf3BVJiWVkWxffqJk/w2Y48add5MImiMIrnuw2qFCtmue/vsFSBitszfBbL3MSSR/ibWLLi4RdqLNWCW955KUj4+dWjUGM9LpYXBl7k3zdohzllbLnXxb5tCkPbu9f3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"
                width={2738}
                height={1614}
                className="w-[50rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
