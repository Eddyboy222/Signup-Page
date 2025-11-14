import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1020] via-[#0f1724] to-[#071021] text-gray-100">
      {/* NAVBAR */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff7a3c] to-[#ff3c00] flex items-center justify-center font-bold text-black">A</div>
          <div className="text-white font-semibold text-lg">AcmeClass</div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link to="#features" className="hover:text-white">Features</Link>
          <Link to="#pricing" className="hover:text-white">Pricing</Link>
          <Link to="#testimonials" className="hover:text-white">Customers</Link>
          <Link to="#contact" className="hover:text-white">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/login" className="px-4 py-2 rounded-md text-sm border border-white/10 hover:bg-white/5">Log in</Link>
          <Link to="/signuppage" className="hidden md:inline-block bg-gradient-to-r from-[#ff7a3c] to-[#ff3c00] px-4 py-2 rounded-md text-sm font-medium shadow-lg">Get Started</Link>
        </div>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6">
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">Teach, Learn & Grow — Faster</h1>
            <p className="mt-4 text-gray-300 max-w-xl">Build courses, track student progress, and collaborate with a sleek, simple platform made for modern classrooms. Fast onboarding, beautiful UI, and powerful tools to keep your learners engaged.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link to="/signup" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-[#ff7a3c] to-[#ff3c00] shadow-md hover:scale-105 transition-transform">Start Free</Link>
              <Link to="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/10 text-sm hover:bg-white/3">See Features</Link>
            </div>

            <div className="mt-6 flex gap-6 text-sm text-gray-400">
              <div>
                <div className="font-bold text-white">120+</div>
                <div className="text-xs">Active Courses</div>
              </div>
              <div>
                <div className="font-bold text-white">8k+</div>
                <div className="text-xs">Students</div>
              </div>
              <div>
                <div className="font-bold text-white">99.9%</div>
                <div className="text-xs">Uptime</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/10">
              <div className="text-sm text-gray-300 mb-4">Preview</div>
              <div className="bg-gradient-to-b from-[#0b1220] to-[#071021] rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs text-gray-400">Course</div>
                    <div className="text-white font-semibold">Intro to React</div>
                  </div>
                  <div className="text-xs text-gray-400">3h 12m</div>
                </div>
                <div className="h-36 bg-white/3 rounded-md flex items-center justify-center text-gray-200">Course thumbnail</div>
              </div>
            </div>

            <div className="absolute -right-6 -bottom-6 transform rotate-6 opacity-60 w-40 h-24 bg-gradient-to-r from-[#ff7a3c] to-[#ff3c00] rounded-xl blur-[30px]"></div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-8">
          <h2 className="text-2xl font-bold text-white mb-6">Powerful features that scale</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {title: 'Interactive Quizzes', desc: 'Create auto-graded quizzes that give instant feedback.'},
              {title: 'Progress Tracking', desc: 'Monitor student progress with visual dashboards.'},
              {title: 'Video Hosting', desc: 'Stream lessons with adaptive bitrate.'},
              {title: 'Collaborative Notes', desc: 'Students can highlight and discuss lessons.'}
            ].map((f, i) => (
              <div key={i} className="p-5 rounded-xl bg-white/3 border border-white/6">
                <div className="w-12 h-12 rounded-lg bg-white/6 flex items-center justify-center mb-3">{f.title.charAt(0)}</div>
                <div className="font-semibold text-white">{f.title}</div>
                <div className="text-sm text-gray-300 mt-2">{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-8">
          <h2 className="text-2xl font-bold text-white mb-6">Choose a plan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/4 border border-white/6">
              <div className="text-sm text-gray-300">Starter</div>
              <div className="text-3xl font-extrabold mt-3">Free</div>
              <div className="text-sm text-gray-300 mt-3">Basic features for individuals</div>
              <button className="mt-6 w-full py-3 rounded-lg bg-white/6 hover:bg-white/8">Get started</button>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#0b1220] to-[#071021] border border-white/10 shadow-lg">
              <div className="text-sm text-gray-300">Team</div>
              <div className="text-3xl font-extrabold mt-3">$12<span className="text-sm font-medium">/mo</span></div>
              <div className="text-sm text-gray-300 mt-3">Collaboration tools + analytics</div>
              <button className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-[#ff7a3c] to-[#ff3c00]">Choose Team</button>
            </div>
            <div className="p-6 rounded-xl bg-white/4 border border-white/6">
              <div className="text-sm text-gray-300">Enterprise</div>
              <div className="text-3xl font-extrabold mt-3">Contact</div>
              <div className="text-sm text-gray-300 mt-3">SLA, SSO and dedicated support</div>
              <button className="mt-6 w-full py-3 rounded-lg bg-white/6 hover:bg-white/8">Contact sales</button>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-8">
          <h2 className="text-2xl font-bold text-white mb-6">What teachers say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {name: 'Amina', text: 'Transformed how I run my classes — students actually enjoy the quizzes.'},
              {name: 'David', text: 'Simple to set up and the analytics helped me spot struggling students.'},
              {name: 'Priya', text: 'Great performance and lovely UI.'}
            ].map((t, i) => (
              <div key={i} className="p-5 rounded-xl bg-white/3 border border-white/6">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-sm text-gray-300 mt-2">“{t.text}”</div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="mt-12 pb-12 border-t border-white/6 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <div className="text-white font-bold">AcmeClass</div>
              <div className="text-sm text-gray-400 mt-2">Helping teachers make learning delightful.</div>
            </div>

            <div className="flex gap-8">
              <div>
                <div className="font-semibold">Product</div>
                <ul className="text-sm text-gray-400 mt-2">
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Roadmap</li>
                </ul>
              </div>

              <div>
                <div className="font-semibold">Company</div>
                <ul className="text-sm text-gray-400 mt-2">
                  <li>About</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-500">© {new Date().getFullYear()} AcmeClass. All rights reserved.</div>
        </footer>
      </main>
    </div>
  );
}
