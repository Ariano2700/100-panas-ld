import { useState, useEffect } from "react";
import { testimonials } from "../../../const/testimonials";

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <span className="mb-4 bg-[#E56053] text-white text-sm font-medium px-3 py-1 rounded-full">
            Testimonios
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="mt-4 text-gray-600 md:text-xl">
            Opiniones de quienes han disfrutado de nuestras hamburguesas
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div
              key={current}
              className="p-8 transition-all duration-500 ease-in-out min-h-[450px] min-w-[350px] md:min-w-[900px] md:min-h-[220px]"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center text-3xl font-bold uppercase">
                  {testimonials[current].image && testimonials[current].image.trim() !== "" ? (
                    <img
                      loading="lazy"
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="object-cover w-24 h-24"
                    />
                  ) : (
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center bg-[#E56053]"
                    >
                      <span className="text-white select-none">
                        {testimonials[current].name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-[#E56053] fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    {[...Array(5 - testimonials[current].rating)].map(
                      (_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 text-gray-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      )
                    )}
                  </div>
                  <p className="text-lg md:text-xl italic mb-4">
                    "{testimonials[current].text}"
                  </p>
                  <p className="font-bold">{testimonials[current].name}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6 gap-2">
            <button
              onClick={prev}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
              className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setAutoplay(false);
                }}
                onMouseLeave={() => setAutoplay(true)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-[#E56053]" : "bg-gray-300"
                }`}
              />
            ))}
            <button
              onClick={next}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
              className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
