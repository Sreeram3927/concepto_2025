import Image from "next/image";
import Link from "next/link";

const sponsors = {
//   platinum: [
//     { name: "Platinum Sponsor 1", logo: "/img/sponsors/silver/Logo.jpg", link: "https://example.com" },
//   ],
//   gold: [
//     { name: "Gold Sponsor 1", logo: "/img/sponsors/silver/Logo.jpg", link: "https://example.com" },
//   ],
  silver: [
    { name: "Silver Sponsor 1", logo: "/img/sponsors/silver/Logo.jpg", link: "https://dilinger.org" },
  ],
//   bronze: [
//     { name: "Bronze Sponsor 1", logo: "/img/sponsors/silver/Logo.jpg", link: "https://example.com" },
//   ],
};

export default function SponsorsSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Our Sponsors</h2>
      {Object.entries(sponsors).map(([tier, sponsorsList]) => (
        <div key={tier} className="w-full max-w-5xl mb-8">
          <h3 className={`text-3xl font-semibold capitalize text-center mb-6 ${tier === 'platinum' ? 'text-gray-300' : tier === 'gold' ? 'text-yellow-400' : tier === 'silver' ? 'text-gray-400' : 'text-orange-500'}`}>{tier} Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsorsList.map((sponsor, index) => (
              <Link key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <Image src={sponsor.logo} alt={sponsor.name} width={200} height={100} className="object-contain rounded-lg shadow-lg transition-transform transform hover:scale-105" />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}