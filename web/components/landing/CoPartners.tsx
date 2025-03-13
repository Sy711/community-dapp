'use client'

import Image from 'next/image'
import { useState } from 'react';

interface Partner {
  id: number;
  name: string;
  logo: string;
  role: string;
  twitterHandle: string;
  links: string[];
  verified?: boolean;
}

export default function CoPartners() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  
  // 示例合作伙伴数据
  const partners: Partner[] = [
    {
      id: 1,
      name: "Mindfrog.Sui",
      logo: "/mindfrog.png",
      role: "Project Director | Sui Developer | Cooking Project",
      twitterHandle: "@MindfrogCrypto",
      links: ["@SuiSecurity", "@pumpsui", "@nextart_io"],
      verified: true
    },
    {
      id: 2,
      name: "Mindfrog.Sui",
      logo: "/mindfrog.png",
      role: "Project Director | Sui Developer | Cooking Project",
      twitterHandle: "@MindfrogCrypto",
      links: ["@SuiSecurity", "@pumpsui", "@nextart_io"],
      verified: true
    },
    {
      id: 3,
      name: "SuiDev.io",
      logo: "/mindfrog.png",
      role: "Head of Development | Smart Contract Expert",
      twitterHandle: "@SuiDev",
      links: ["@SuiNetwork", "@MystenLabs"],
      verified: true
    }
  ];
  
  return (
    <div className="mb-8 md:mb-16 lg:mb-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="bg-black md:rounded-none">
        <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8">
          <div className="text-white p-4 md:p-6 rounded-t-2xl md:rounded-none">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black">CO-PARTERNER</h2>
              {/* <div className="bg-[#FFFC26] rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                <Image 
                  src="/landingpage/activites/solar_list-bold-duotone.png" 
                  alt="列表" 
                  width={48} 
                  height={48} 
                  className="object-contain"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#444444] md:rounded-none">
        {/* <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8"> */}
          <div className="p-4 md:p-6 lg:p-8 rounded-b-2xl md:rounded-none">
            {/* 第一行滚动 - 从左向右 */}
            <div 
              className="py-3 md:py-5 overflow-hidden relative"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <div 
                className="flex space-x-4 md:space-x-6 animate-scroll-left"
                style={{
                  animationPlayState: isHovered1 ? "paused" : "running"
                }}
              >
                {[...partners, ...partners, ...partners].map((partner, index) => (
                  <TwitterCard 
                    key={`row1-${partner.id}-${index}`} 
                    partner={partner} 
                  />
                ))}
              </div>
            </div>
            
            {/* 第二行滚动 - 从右向左 */}
            <div 
              className="py-3 md:py-5 overflow-hidden relative"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <div 
                className="flex space-x-4 md:space-x-6 animate-scroll-right"
                style={{
                  animationPlayState: isHovered2 ? "paused" : "running"
                }}
              >
                {[...partners, ...partners, ...partners].map((partner, index) => (
                  <TwitterCard 
                    key={`row2-${partner.id}-${index}`} 
                    partner={partner} 
                  />
                ))}
              </div>
            </div>
            
            {/* 第三行滚动 - 仅桌面端显示，从左向右但速度不同 */}
            <div 
              className="hidden md:block py-3 md:py-5 overflow-hidden relative"
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              <div 
                className="flex space-x-4 md:space-x-6 animate-scroll-left"
                style={{
                  animationPlayState: isHovered3 ? "paused" : "running",
                  animationDuration: "35s" // 稍微不同的速度，增加视觉变化
                }}
              >
                {[...partners, ...partners, ...partners].map((partner, index) => (
                  <TwitterCard 
                    key={`row3-${partner.id}-${index}`} 
                    partner={partner} 
                  />
                ))}
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}

interface TwitterCardProps {
  partner: Partner;
}

function TwitterCard({ partner }: TwitterCardProps) {
  return (
    <div className="bg-white rounded-3xl p-3 md:p-4 flex flex-col min-w-[320px] md:min-w-[350px] lg:min-w-[380px] hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center">
        <Image 
          src={partner.logo} 
          alt={partner.name} 
          width={48} 
          height={48} 
          className="rounded-full mr-3 md:w-[56px] md:h-[56px]"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <h3 className="font-bold text-[15px] md:text-base text-[#0f1419]">
              {partner.name}
            </h3>
            {partner.verified && (
              <Image 
                src="/mindfrog.png" 
                alt="已验证" 
                width={16} 
                height={16} 
                className="md:w-[18px] md:h-[18px]"
              />
            )}
            <Image 
              src="/mindfrog.png" 
              alt="Sui" 
              width={16} 
              height={16} 
              className="md:w-[18px] md:h-[18px]"
            />
          </div>
          <p className="text-[13px] md:text-sm text-[#536471]">{partner.twitterHandle}</p>
        </div>
        <div className="text-xl md:text-2xl text-[#536471]">𝕏</div>
      </div>
      
      <p className="text-[13px] md:text-sm text-[#0f1419] mt-1 md:mt-2 truncate">{partner.role}</p>
      <p className="text-[13px] md:text-sm text-[#1d9bf0] truncate whitespace-nowrap">
        {partner.links.map((link, index) => (
          <span key={index} className="hover:underline cursor-pointer">
            {link}{index < partner.links.length - 1 ? ' ' : ''}
          </span>
        ))}
      </p>
    </div>
  );
} 