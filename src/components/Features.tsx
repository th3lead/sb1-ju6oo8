import React from 'react';
import { Calendar, FileText, Users, CheckCircle } from 'lucide-react';

const features = [
  {
    name: 'Easy Scheduling',
    description: 'Streamlined appointment booking and management system for efficient counseling sessions.',
    icon: Calendar,
  },
  {
    name: 'Resource Sharing',
    description: 'Secure document storage and sharing capabilities for educational materials and worksheets.',
    icon: FileText,
  },
  {
    name: 'Progress Tracking',
    description: 'Comprehensive tools for monitoring and analyzing student progress over time.',
    icon: CheckCircle,
  },
  {
    name: 'Community Support',
    description: 'Connect with other educators and share best practices in student counseling.',
    icon: Users,
  },
];

const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#4567b7]">Comprehensive Tools</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to support your students
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform provides all the essential tools for effective student counseling and support, helping you make a lasting impact.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-[#4567b7]" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;