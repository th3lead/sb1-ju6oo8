import React from 'react';
import { Users, School, Award, Clock } from 'lucide-react';

const stats = [
  { name: 'Active Users', value: '10,000+', icon: Users },
  { name: 'Schools', value: '500+', icon: School },
  { name: 'Success Rate', value: '95%', icon: Award },
  { name: 'Hours Saved Weekly', value: '20+', icon: Clock },
];

const Statistics = () => {
  return (
    <div className="bg-[#4567b7] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by educators worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Join thousands of educators who are making a difference with CounselHub
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.name} className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    <div className="flex justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Statistics;