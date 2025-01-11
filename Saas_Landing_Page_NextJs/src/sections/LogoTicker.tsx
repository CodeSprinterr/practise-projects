import achmelogo from '@/assets/logo-acme.png';
import quantumlogo from '@/assets/logo-quantum.png';
import echologo from '@/assets/logo-echo.png';
import celestiallogo from '@/assets/logo-celestial.png';
import pulselogo from '@/assets/logo-pulse.png';
import apexlogo from '@/assets/logo-apex.png';
import Image from 'next/image';
export const LogoTicker = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image src={achmelogo} alt='Achme Logo'></Image>
            <Image src={quantumlogo} alt='Quantum Logo'></Image>
            <Image src={echologo} alt='Echo Logo'></Image>
            <Image src={celestiallogo} alt='Clestil Logo'></Image>
            <Image src={pulselogo} alt='Pulse Logo'></Image>
            <Image src={apexlogo} alt='Apex Logo'></Image>
          </div>
        </div>
      </div>
    </div >
  );
};
