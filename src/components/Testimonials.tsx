import React from 'react';

const testimonials = [
  {
    content: "CounselHub has transformed how I manage student support. The scheduling and progress tracking features are invaluable.",
    author: "Sarah Johnson",
    role: "School Counselor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The resource sharing capabilities have made collaboration with other teachers seamless. It's an essential tool for modern education.",
    author: "Michael Chen",
    role: "High School Teacher",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "As a guidance counselor, I appreciate how CounselHub helps me stay organized and focused on what matters most - supporting students.",
    author: "Emily Rodriguez",
    role: "Guidance Counselor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#4567b7]">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Educators Everywhere
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="flex flex-col justify-between bg-white p-8 shadow-lg rounded-xl">
                <blockquote className="text-lg text-gray-600 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="mt-8 flex items-center gap-x-4">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="h-12 w-12 rounded-full bg-gray-50"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;