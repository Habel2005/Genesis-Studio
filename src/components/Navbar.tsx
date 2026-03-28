
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image 
              src="https://picsum.photos/seed/genesis/48/48" 
              alt="Genesis Logo" 
              width={48} 
              height={48} 
              className="rounded-xl"
              data-ai-hint="abstract logo"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-1 liquid-glass rounded-full px-6 py-2">
          {['Home', 'Services', 'Work', 'Process', 'Pricing'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="px-4 py-1.5 text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div>
          <Button className="rounded-full bg-white text-black hover:bg-white/90 font-body group">
            Get Started
            <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
