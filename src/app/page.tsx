'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Play, Zap, Palette, BarChart3, Shield } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { BlurText } from '@/components/BlurText';
import { HLSVideo } from '@/components/HLSVideo';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[1000px] overflow-visible flex flex-col items-center">
        <div className="absolute top-[20%] w-full h-auto z-0 flex justify-center overflow-hidden">
          <video 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[1400px] object-contain opacity-80"
            poster="https://picsum.photos/seed/hero/1920/1080"
          />
        </div>
        
        <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 z-[1] h-[300px] bg-gradient-to-t from-black to-transparent" />

        <div className="relative z-10 pt-[150px] px-6 text-center max-w-5xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="liquid-glass rounded-full px-4 py-1.5 flex items-center gap-3 mb-8"
          >
            <span className="bg-white text-black rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">New</span>
            <span className="text-xs font-medium text-white/80">Introducing AI-powered web design.</span>
          </motion.div>

          <BlurText 
            text="The Website Your Brand Deserves" 
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white tracking-[-4px] leading-[0.8] mb-8"
          />

          <motion.p 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-body-sm text-lg max-w-2xl mb-12 text-white/60 font-light"
          >
            Stunning design. Blazing performance. Built by AI, refined by experts. This is web design, wildly reimagined.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <Button className="liquid-glass-strong rounded-full px-8 h-14 font-body group">
              Get Started
              <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
            <button className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
              <span className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 group-hover:bg-white/5 transition-colors">
                <Play className="w-5 h-5 fill-white" />
              </span>
              <span className="font-medium text-sm">Watch the Film</span>
            </button>
          </motion.div>
        </div>

        {/* Partners Bar */}
        <div className="mt-auto pb-12 pt-16 flex flex-col items-center gap-12 z-10">
          <div className="liquid-glass rounded-full px-4 py-1 text-[10px] uppercase font-bold tracking-widest text-white/50">
            Trusted by the teams behind
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma'].map((brand) => (
              <span key={brand} className="text-2xl md:text-4xl font-heading italic text-white/30 hover:text-white transition-all cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative min-h-[700px] py-32 px-6 md:px-16 lg:px-24 flex items-center justify-center overflow-hidden">
        <HLSVideo 
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-[1]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="liquid-glass rounded-full px-4 py-1 text-xs font-medium text-white inline-block mb-8">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading italic text-white leading-[0.9] mb-8">
            You dream it. We ship it.
          </h2>
          <p className="text-body-sm text-lg mb-12 max-w-2xl mx-auto">
            Share your vision. Our AI handles the rest—wireframes, design, code, launch. All in days, not quarters.
          </p>
          <Button className="liquid-glass-strong rounded-full px-8 h-14 group">
            Get Started
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Features Chess */}
      <section className="py-32 px-6 md:px-16 lg:px-24 space-y-40">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <div className="liquid-glass rounded-full px-4 py-1 text-xs font-medium text-white inline-block mb-8">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-6xl font-heading italic text-white">Pro features. Zero complexity.</h2>
        </div>

        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-7xl mx-auto">
          <div className="flex-1 space-y-8">
            <h3 className="text-4xl md:text-5xl font-heading italic text-white leading-[1]">
              Designed to convert.<br />Built to perform.
            </h3>
            <p className="text-body-sm text-base">
              Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all.
            </p>
            <Button className="liquid-glass-strong rounded-full px-6 h-12">
              Learn more
            </Button>
          </div>
          <div className="flex-1 w-full lg:w-auto">
            <div className="liquid-glass rounded-3xl overflow-hidden aspect-video relative group">
              <Image 
                src="https://picsum.photos/seed/feature1/800/600"
                alt="Feature visual"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint="ui design"
              />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-20 max-w-7xl mx-auto">
          <div className="flex-1 space-y-8">
            <h3 className="text-4xl md:text-5xl font-heading italic text-white leading-[1]">
              It gets smarter.<br />Automatically.
            </h3>
            <p className="text-body-sm text-base">
              Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever.
            </p>
            <Button className="liquid-glass-strong rounded-full px-6 h-12">
              See how it works
            </Button>
          </div>
          <div className="flex-1 w-full lg:w-auto">
            <div className="liquid-glass rounded-3xl overflow-hidden aspect-video relative group">
              <Image 
                src="https://picsum.photos/seed/feature2/800/600"
                alt="Feature visual"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint="ai digital"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <div className="liquid-glass rounded-full px-4 py-1 text-xs font-medium text-white inline-block mb-8">
            Why Us
          </div>
          <h2 className="text-4xl md:text-6xl font-heading italic text-white leading-[0.9]">The difference is everything.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { icon: Zap, title: "Days, Not Months", desc: "Concept to launch at a pace that redefines fast." },
            { icon: Palette, title: "Obsessively Crafted", desc: "Every detail considered. Every element refined." },
            { icon: BarChart3, title: "Built to Convert", desc: "Layouts informed by data. Decisions backed by performance." },
            { icon: Shield, title: "Secure by Default", desc: "Enterprise-grade protection comes standard." },
          ].map((item, idx) => (
            <div key={idx} className="liquid-glass rounded-2xl p-8 hover:bg-white/[0.03] transition-colors group">
              <div className="liquid-glass-strong w-12 h-12 rounded-full flex items-center justify-center mb-8">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-2xl font-heading italic text-white mb-4 tracking-tight">{item.title}</h4>
              <p className="text-body-sm text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-40 overflow-hidden">
        <HLSVideo 
          src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: 'saturate(0)' }}
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-[1]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="liquid-glass rounded-[3rem] p-16 md:p-24 backdrop-blur-3xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 text-center">
              {[
                { value: "200+", label: "Sites launched" },
                { value: "98%", label: "Client satisfaction" },
                { value: "3.2x", label: "More conversions" },
                { value: "5 days", label: "Average delivery" },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="text-4xl md:text-6xl font-heading italic text-white tracking-tighter">{stat.value}</div>
                  <div className="text-body-sm uppercase tracking-widest text-[10px] opacity-40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <div className="liquid-glass rounded-full px-4 py-1 text-xs font-medium text-white inline-block mb-8">
            What They Say
          </div>
          <h2 className="text-4xl md:text-6xl font-heading italic text-white">Don't take our word for it.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              name: "Sarah Chen",
              role: "CEO, Luminary",
              quote: "A complete rebuild in five days. The performance metrics are unlike anything we've seen. Simply world-class."
            },
            {
              name: "Marcus Webb",
              role: "Head of Growth, Arcline",
              quote: "Conversions up 4x since launch. Studio delivered on every promise—and then some. The AI refinement is a game-changer."
            },
            {
              name: "Elena Voss",
              role: "Brand Director, Helix",
              quote: "They didn't just design our site; they redefined our entire digital presence. Efficient, brilliant, and ahead of its time."
            }
          ].map((t, idx) => (
            <div key={idx} className="liquid-glass rounded-2xl p-10 flex flex-col justify-between h-full hover:bg-white/[0.02] transition-colors">
              <p className="text-white/80 font-body font-light text-lg italic leading-relaxed mb-12">"{t.quote}"</p>
              <div>
                <div className="text-white font-body font-medium text-sm">{t.name}</div>
                <div className="text-white/40 font-body font-light text-xs tracking-wider uppercase mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="relative py-48 px-6 text-center overflow-hidden">
        <HLSVideo 
          src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading italic text-white mb-8 tracking-tighter leading-[0.8]">
            Your next website<br />starts here.
          </h2>
          <p className="text-body-sm text-xl mb-12 opacity-80 max-w-xl mx-auto">
            Book a free strategy call. See what AI-powered design can do.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Button className="liquid-glass-strong rounded-full px-10 h-16 text-lg font-medium group">
              Book a Call
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-10 h-16 text-lg font-medium">
              View Pricing
            </Button>
          </div>

          <div className="mt-48 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white/40 text-xs font-body tracking-widest uppercase">© 2026 Studio</div>
            <div className="flex items-center gap-8">
              {['Privacy', 'Terms', 'Contact'].map((link) => (
                <Link key={link} href="#" className="text-white/40 text-xs font-body hover:text-white transition-colors uppercase tracking-widest">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
