import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Card } from "./card";

interface Testimonial {
  image: string;
  name: string;
  username: string;
  text: string;
  social: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
  title?: string;
  description?: string;
  maxDisplayed?: number;
}

export function Testimonials({
  testimonials,
  className,
  title = "Read what people are saying",
  description = "Dummy feedback from virtual customers using our component library.",
  maxDisplayed = 6,
}: TestimonialsProps) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center pt-5">
        <div className="flex flex-col gap-5 mb-8">
          {title && (
            <h2 className="text-center text-4xl font-medium text-[#064088]">{title}</h2>
          )}
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            {description.split("<br />").map((line, i) => (
              <span key={i}>
                {line}
                {i !== description.split("<br />").length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          className={cn(
            "flex justify-center items-center gap-5 flex-wrap",
            !showAll &&
              testimonials.length > maxDisplayed &&
              "max-h-[720px] overflow-hidden"
          )}
        >
          {testimonials
            .slice(0, showAll ? undefined : maxDisplayed)
            .map((testimonial, index) => (
              <Card
                key={index}
                className="w-80 h-auto p-5 relative bg-white border-gray-200"
              >
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col pl-4">
                    <span className="font-semibold text-base">
                      {testimonial.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {testimonial.username}
                    </span>
                  </div>
                </div>
                <div className="mt-5 mb-5">
                  <p className="text-gray-700 font-medium">
                    {testimonial.text}
                  </p>
                </div>
              </Card>
            ))}
        </div>

        {testimonials.length > maxDisplayed && !showAll && (
          <>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
              <Button variant="secondary" onClick={() => setShowAll(true)}>
                Load More
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
