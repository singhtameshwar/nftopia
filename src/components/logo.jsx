import Image from "next/image";
import Marquee from "react-fast-marquee";

export const MARQUE = () => {
  const ClientData = [
    { id: 1, image: "/images/clients/logo1.svg", name: "GoDaddy" },
    { id: 2, image: "/images/clients/logo2.svg", name: "Dribbble" },
    { id: 3, image: "/images/clients/logo3.svg", name: "Framer" },
    { id: 4, image: "/images/clients/logo4.svg", name: "Google" },
    { id: 5, image: "/images/clients/logo5.svg", name: "Webflow" },
  ];

  return (
    
    <div className="w-full container mx-auto bg-black flex items-center justify-center min-h-[150px] md:min-h-[200px]">
      <div className="container bg-gradient-to-r from-gray-900 via-gray-900 to-gray-700 px-4 md:px-8">
        <Marquee 
          pauseOnHover 
          gradient={false} 
          speed={40} 
          className="overflow-hidden"
        >
          {ClientData.map((client) => (
            <div
              className="h-[40px] md:h-[60px] lg:h-[80px] flex items-center justify-center mx-4 md:mx-8 lg:mx-20"
              key={client.id}
            >
              <Image
                src={client.image}
                alt={`${client.name} logo`}
                className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                width={80}
                height={30}
                priority
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MARQUE;