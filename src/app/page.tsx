"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Heart, Sparkles, ShoppingBag, DollarSign, TrendingUp, Users, MessageCircle, Handshake, Crown, Award, Star } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="small"
      background="fluid"
      cardStyle="glass-flat"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Services", id: "feature" },
            { name: "Products", id: "product" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="PawCare Pro"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Complete Care for Your Beloved Pets"
          description="Professional grooming, veterinary care, training, and premium supplies - everything your furry friends need under one roof"
          tag="Premium Pet Care"
          tagIcon={Heart}
          buttons={[
            { text: "Book Service", href: "contact" },
            { text: "View Services", href: "feature" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763290727482-5z45zh8x.jpg"
          imageAlt="Professional pet care services"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Why Choose PawCare Pro"
          description={[
            "With over 15 years of experience in pet care, we understand that your pets are family members who deserve the highest quality care and attention.",
            "Our certified professionals use the latest techniques and premium products to ensure your pets are healthy, happy, and well-groomed."
          ]}
          buttons={[
            { text: "Learn More", href: "feature" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Our Premium Pet Services"
          description="Comprehensive care solutions designed to keep your pets healthy, happy, and looking their best"
          tag="Services"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Professional Grooming",
              description: "Full-service grooming including baths, haircuts, nail trimming, and ear cleaning by certified professionals",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763290728403-fj88632i.jpg",
              imageAlt: "Professional dog grooming service"
            },
            {
              title: "Veterinary Care",
              description: "Complete health checkups, vaccinations, and medical treatments by licensed veterinarians",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763290729181-k4bvh4oc.jpg",
              imageAlt: "Veterinarian examining pet"
            },
            {
              title: "Training & Behavior",
              description: "Obedience training and behavioral modification programs for dogs of all ages and breeds",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763290729867-co8ob5nc.jpg",
              imageAlt: "Professional dog training session"
            },
            {
              title: "Boarding & Daycare",
              description: "Safe and comfortable overnight boarding and daily care in our supervised facility",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763290730398-x3x2xyfr.jpg",
              imageAlt: "Pet boarding facility"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Premium Pet Products"
          description="High-quality supplies and accessories for your beloved companions"
          tag="Shop"
          tagIcon={ShoppingBag}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "premium-food",
              name: "Premium Nutrition Food",
              price: "$45.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763290731139-os3gj58q.jpg",
              imageAlt: "Premium pet food"
            },
            {
              id: "interactive-toys",
              name: "Interactive Toy Set",
              price: "$29.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763290731880-7h1pblzw.jpg",
              imageAlt: "Pet toy collection"
            },
            {
              id: "luxury-accessories",
              name: "Luxury Collar & Leash",
              price: "$39.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763290732531-ws45wfka.jpg",
              imageAlt: "Premium pet accessories"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Service Packages"
          description="Choose the perfect care plan for your pet's needs"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              badge: "Essential Care",
              badgeIcon: Heart,
              price: "$89",
              subtitle: "Perfect for basic grooming needs",
              features: [
                "Full service bath and dry",
                "Nail trimming",
                "Ear cleaning",
                "Basic brush out"
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$149",
              subtitle: "Complete grooming and care package",
              features: [
                "Everything in Essential Care",
                "Professional haircut and styling",
                "Teeth cleaning",
                "Health checkup",
                "Premium shampoo treatment"
              ]
            },
            {
              id: "luxury",
              badge: "Ultimate Care",
              badgeIcon: Crown,
              price: "$229",
              subtitle: "VIP treatment for your precious pet",
              features: [
                "Everything in Premium",
                "Aromatherapy spa treatment",
                "Professional photo session",
                "Luxury transport service",
                "Personalized care plan"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Trusted by Pet Owners"
          description="See why thousands of pet families choose PawCare Pro for their beloved companions"
          tag="Our Impact"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "5000+",
              title: "Happy Pets",
              description: "Pets cared for with love and professionalism",
              icon: Heart
            },
            {
              id: "2",
              value: "15",
              title: "Years Experience",
              description: "Decades of expertise in pet care services",
              icon: Award
            },
            {
              id: "3",
              value: "98%",
              title: "Satisfaction Rate",
              description: "Pet owners who return for our services",
              icon: Star
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Expert Team"
          description="Certified professionals dedicated to your pet's health and happiness"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Dr. Sarah Johnson",
              role: "Head Veterinarian",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763290733238-t4pw1vji.jpg",
              imageAlt: "Dr. Sarah Johnson"
            },
            {
              id: "2",
              name: "Mike Rodriguez",
              role: "Senior Groomer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763290733917-1kf4d2hu.jpg",
              imageAlt: "Mike Rodriguez"
            },
            {
              id: "3",
              name: "Emma Davis",
              role: "Pet Trainer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763290734685-fu5ofpk0.jpg",
              imageAlt: "Emma Davis"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Pet Parents Say"
          description="Real stories from satisfied customers who trust us with their furry family members"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Jennifer Smith",
              role: "Dog Owner",
              company: "Golden Retriever Parent",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763290733238-t4pw1vji.jpg",
              imageAlt: "Jennifer Smith with her dog"
            },
            {
              id: "2",
              name: "Robert Chen",
              role: "Cat Owner",
              company: "Persian Cat Parent",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763290733917-1kf4d2hu.jpg",
              imageAlt: "Robert Chen with his cat"
            },
            {
              id: "3",
              name: "Maria Lopez",
              role: "Pet Owner",
              company: "Multi-Pet Family",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763290734685-fu5ofpk0.jpg",
              imageAlt: "Maria Lopez with her pets"
            },
            {
              id: "4",
              name: "David Wilson",
              role: "Puppy Owner",
              company: "New Pet Parent",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763290735535-szjb2fd7.jpg",
              imageAlt: "David Wilson with his puppy"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted Partners"
          description="Working with leading pet industry brands to provide the best for your pets"
          tag="Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Book Your Pet's Appointment"
          description="Ready to give your pet the care they deserve? Contact us today to schedule a service or ask any questions."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "petName", type: "text", placeholder: "Pet's Name", required: true },
            { name: "service", type: "text", placeholder: "Service Needed", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your pet and any special requirements...",
            rows: 4,
            required: false
          }}
          buttonText="Book Appointment"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763290737022-5txedswj.jpg"
          imageAlt="Happy pets waiting for care"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                { label: "Pet Grooming", href: "feature" },
                { label: "Veterinary Care", href: "feature" },
                { label: "Pet Training", href: "feature" },
                { label: "Boarding", href: "feature" }
              ]
            },
            {
              title: "Products",
              items: [
                { label: "Premium Food", href: "product" },
                { label: "Pet Toys", href: "product" },
                { label: "Accessories", href: "product" },
                { label: "Health Supplies", href: "product" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Contact", href: "contact" },
                { label: "Reviews", href: "testimonial" }
              ]
            }
          ]}
          copyrightText="© 2025 | PawCare Pro - Your Pet's Best Friend"
        />
      </div>
    </ThemeProvider>
  );
}