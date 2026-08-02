import React from "react";
import {
  Zap,
  ShoppingCart,
  Users,
  Star,
  Truck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-6">
        

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-lime-400 flex items-center justify-center mx-auto mb-6">
            <Zap className="w-8 h-8 text-black" />
          </div>

          <h2 className="text-5xl font-bold mb-4">
            About <span className="text-lime-400">SkyMart</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-8">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable for everyone.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="border border-gray-700 rounded-2xl p-6 text-center">
            <ShoppingCart className="w-6 h-6 text-lime-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold">20K+</h3>
            <p className="text-gray-500 text-sm mt-2">Products</p>
          </div>

          <div className="border border-gray-700 rounded-2xl p-6 text-center">
            <Users className="w-6 h-6 text-lime-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold">50K+</h3>
            <p className="text-gray-500 text-sm mt-2">Happy Customers</p>
          </div>

          <div className="border border-gray-700 rounded-2xl p-6 text-center">
            <Star className="w-6 h-6 text-lime-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold">4.9</h3>
            <p className="text-gray-500 text-sm mt-2">Average Rating</p>
          </div>

          <div className="border border-gray-700 rounded-2xl p-6 text-center">
            <Truck className="w-6 h-6 text-lime-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold">99%</h3>
            <p className="text-gray-500 text-sm mt-2">On-time Delivery</p>
          </div>
        </div>

        {/* Story */}
        <div className="bg-[#0B0B0B] border border-gray-800 rounded-3xl p-8 mb-10">
          <h3 className="text-3xl font-bold mb-6">Our Story</h3>

          <p className="text-gray-400 leading-8 mb-6">
            SkyMart started in 2022 as a small side project with one goal: build
            an online store that people genuinely enjoy using.
          </p>

          <p className="text-gray-400 leading-8 mb-6">
            Today, SkyMart serves thousands of customers across the country. We
            stock electronics, fashion, home essentials, and everyday products
            at prices that don't require a second mortgage.
          </p>

          <p className="text-gray-400 leading-8">
            We're still the same team at heart: obsessed with speed,
            transparency, and making you feel good about every purchase.
          </p>
        </div>

        {/* Values */}
        <div className="mb-10">
          <h3 className="text-3xl font-bold text-center mb-8">
            What We Stand For
          </h3>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-[#0B0B0B] border border-gray-800 rounded-2xl p-6">
              <ShieldCheck className="w-8 h-8 text-lime-400 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Trust</h4>
              <p className="text-gray-400 leading-7">
                Every product is verified for quality and authenticity before it
                reaches your doorstep.
              </p>
            </div>

            <div className="bg-[#0B0B0B] border border-gray-800 rounded-2xl p-6">
              <Truck className="w-8 h-8 text-lime-400 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Speed</h4>
              <p className="text-gray-400 leading-7">
                Fast shipping and real-time tracking so your orders arrive when
                promised.
              </p>
            </div>

            <div className="bg-[#0B0B0B] border border-gray-800 rounded-2xl p-6">
              <Users className="w-8 h-8 text-lime-400 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Community</h4>
              <p className="text-gray-400 leading-7">
                We listen to customer feedback and build features that solve
                real shopping problems.
              </p>
            </div>

            <div className="bg-[#0B0B0B] border border-gray-800 rounded-2xl p-6">
              <Star className="w-8 h-8 text-lime-400 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Quality</h4>
              <p className="text-gray-400 leading-7">
                We carefully curate products that offer the best value for your
                money.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">Meet the Team</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: "Aryan Shah",
                role: "Founder & CEO",
                color: "bg-lime-400 text-black",
              },
              {
                name: "Priya Mehta",
                role: "Head of Product",
                color: "bg-blue-500",
              },
              {
                name: "Rohan Verma",
                role: "Lead Engineer",
                color: "bg-purple-500",
              },
              {
                name: "Sneha Kapoor",
                role: "Design Director",
                color: "bg-pink-500",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-[#0B0B0B] border border-gray-800 rounded-2xl p-6 text-center"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 font-bold ${member.color}`}
                >
                  {member.name.charAt(0)}
                </div>
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-gray-500 text-sm mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0B0B0B] border border-lime-400/20 rounded-3xl p-10 text-center mb-10">
          <h3 className="text-3xl font-bold mb-4">Ready to shop?</h3>
          <p className="text-gray-400 mb-8">
            Explore thousands of products at unbeatable prices.
          </p>
          <Link to="/shop">
            <button className="bg-lime-400 text-black px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-lime-300 transition">
              Browse Products
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-800 pt-8 text-center">
          <h4 className="text-lime-400 font-bold text-xl">SkyMart</h4>
          <p className="text-gray-500 text-sm mt-2">
            © 2026 SkyMart • Built with React + Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
};

export default About;
