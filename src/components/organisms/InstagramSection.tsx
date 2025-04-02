import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const instagramPosts = [
  {
    id: "1",
    imageUrl: "/byPay.png",
    link: "https://www.instagram.com/bypay_official",
  },
  {
    id: "2",
    imageUrl: "/byPay.png",
    link: "https://www.instagram.com/bypay_official",
  },
  {
    id: "3",
    imageUrl: "/byPay.png",
    link: "https://www.instagram.com/bypay_official",
  },
  {
    id: "4",
    imageUrl: "/byPay.png",
    link: "https://www.instagram.com/bypay_official",
  },
  {
    id: "5",
    imageUrl: "/byPay.png",
    link: "https://www.instagram.com/bypay_official",
  },
  {
    id: "6",
    imageUrl: "/byPay.png",
    link: "https://www.instagram.com/bypay_official",
  },
];

const InstagramSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Instagram"
          subtitle="@bypay_official"
          centered
          className="mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {instagramPosts.map((post, index) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 50}
            >
              <Image
                src={post.imageUrl}
                alt="Instagram post"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <FaInstagram className="text-white text-2xl" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
