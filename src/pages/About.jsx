import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Sparkles,
  Award,
  ShieldCheck,
  Compass,
  Utensils,
  HeartHandshake,
  ArrowRight,
  Quote
} from 'lucide-react'

const About = () => {
  const stats = [
    { value: '14+', label: 'Years of Timeless Excellence' },
    { value: '50+', label: 'Global Hospitality Awards' },
    { value: '120k+', label: 'Delighted Global Guests' },
    { value: '99.6%', label: 'Guest Satisfaction Index' }
  ]

  const pillars = [
    {
      icon: <Compass className="text-[#c56206]" size={26} />,
      title: 'Bespoke Concierge',
      desc: 'Intuitive, 24/7 personalized service designed to fulfill your every wish effortlessly before you even ask.'
    },
    {
      icon: <Utensils className="text-[#c56206]" size={26} />,
      title: 'Haute Gastronomy',
      desc: 'Michelin-starred culinary mastery celebrating the world’s rarest ingredients and regional artisanal delicacies.'
    },
    {
      icon: <Sparkles className="text-[#c56206]" size={26} />,
      title: 'Sanctuary of Wellness',
      desc: 'Holistic restorative therapies, geothermal mineral baths, and signature treatments tailored for renewal.'
    },
    {
      icon: <ShieldCheck className="text-[#c56206]" size={26} />,
      title: 'Sustainable Grandeur',
      desc: 'Eco-conscious architecture blending timeless marble craftsmanship with carbon-neutral modern technology.'
    }
  ]

  const leadership = [
    {
      name: 'Alexander Vance',
      role: 'Managing Director & Co-Founder',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
      bio: 'Over two decades curating legendary luxury retreats across Monaco, Zurich, and Milan.'
    },
    {
      name: 'Elena Rostova',
      role: 'Chief Experience Officer',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
      bio: 'Pioneering bespoke guest journeys that blend quiet elegance with heartfelt human touch.'
    },
    {
      name: 'Marcus Chen',
      role: 'Executive Master Chef',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80',
      bio: 'Triple Michelin-trained virtuoso redefining modern hospitality gastronomy.'
    }
  ]

  return (
    <div className="w-full bg-[#F6F2ED] text-[#1B1A1B] overflow-hidden">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-[#0B1528]/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#fef3c7] text-xs uppercase tracking-widest mb-6">
            <Sparkles size={14} className="text-[#c56206]" />
            Elevating Hospitality Since 2012
          </div>
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight leading-tight mb-6">
            A Legacy of <span className="text-[#c56206] italic">Timeless Elegance</span> & Bespoke Sanctuary
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl font-light leading-relaxed">
            Conceived as an intimate oasis for the world’s most discerning travelers, LuxuryStay embodies the art of gracious hospitality, architectural serenity, and unforgettable moments.
          </p>
        </div>
      </section>

      {/* 2. Story & Heritage Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Overlapping Classy Photography */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-[85%]">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900&auto=format&fit=crop"
                alt="Luxury Hotel Architecture"
                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-2 md:right-4 w-[60%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop"
                alt="Presidential Suite Interior"
                className="w-full h-[260px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="hidden md:block absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#c56206] pointer-events-none"></div>
          </div>

          {/* Narrative Content */}
          <div className="flex flex-col gap-6 lg:pl-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[2px] bg-[#c56206]"></div>
              <span className="uppercase text-xs font-bold tracking-widest text-[#c56206]">
                Our Heritage & Ethos
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-snug">
              Crafted for Those Who Seek More Than Just a Stay
            </h2>

            <p className="text-gray-600 leading-relaxed text-base">
              LuxuryStay was born out of an unwavering passion: to create an enduring sanctuary where architectural poise, warm intuition, and refined aesthetics coalesce. Located in prime metropolitan and coastal enclaves, our property is a celebrated gateway to restorative living.
            </p>

            <p className="text-gray-600 leading-relaxed text-base">
              Every curated detail—from handwoven Italian linens and private ambient terraces to bespoke scent architecture—is thoughtfully designed to celebrate understated luxury and timeless serenity.
            </p>

            {/* Founder Quote Card */}
            <div className="relative mt-2 p-6 rounded-xl bg-white border-l-4 border-[#c56206] shadow-sm">
              <Quote className="text-[#c56206]/30 absolute top-4 right-4" size={32} />
              <p className="italic text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                “True luxury is never loud or superfluous. It is the subtle feeling of being completely understood, deeply cared for, and utterly at peace.”
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-gray-300"></div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-900">
                  Julian St. Claire, Founder
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Metrics & Numbers (Dark Elegant Strip) */}
      

      {/* 4. Pillars of Excellence */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[#c56206]"></div>
            <span className="uppercase text-xs font-bold tracking-widest text-[#c56206]">
              Uncompromising Standards
            </span>
            <div className="w-8 h-[2px] bg-[#c56206]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
            The Pillars of LuxuryStay
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-4 font-light">
            Every moment of your experience is anchored in our four foundational promises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-amber-50 group-hover:bg-[#c56206]/10 flex items-center justify-center mb-6 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="w-8 h-[2px] bg-[#c56206]/30 group-hover:w-full group-hover:bg-[#c56206] transition-all duration-300 mt-6"></div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Visual Storytelling (Gallery Showcase) */}
      

      {/* 6. Leadership & Visionaries */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="uppercase text-xs font-bold tracking-widest text-[#c56206]">
            The Curators
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2">
            Meet the Visionaries
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-4 font-light">
            Behind every bespoke detail is a devoted collective of hospitality artisans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {leadership.map((person, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border border-gray-100 flex flex-col">
              <div className="h-72 overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-serif font-bold text-gray-900">{person.name}</h3>
                <span className="text-xs uppercase tracking-wider text-[#c56206] font-semibold mt-1 mb-3">
                  {person.role}
                </span>
                <p className="text-gray-600 text-sm leading-relaxed font-light">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  )
}

export default About
