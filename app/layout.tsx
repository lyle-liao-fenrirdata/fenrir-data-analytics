import './globals.css';
import {
  Box,
  Flex,
  Theme,
  ThemePanel,
  Text,
  Separator,
  Heading,
} from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import MenuPopver from '../components/MenuPopover';
import {
  EnvelopeClosedIcon,
  PaperPlaneIcon,
  VercelLogoIcon,
} from '@radix-ui/react-icons';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className='scroll-smooth'>
      <body className='relative'>
        <div className='mx-auto w-full max-w-screen-2xl'>
          <Theme accentColor='ruby' panelBackground='solid' radius='small'>
            <Box
              display='block'
              px='5'
              py='4'
              position='sticky'
              top='0'
              className='z-50 bg-white/80'
            >
              <Flex direction='row' align='center'>
                <a href='/'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt='Fenrir Data Analytics'
                    loading='lazy'
                    decoding='async'
                    className='relative h-[32px] w-[139px] object-contain sm:h-[48px] sm:w-[208px]'
                    src='/protrait_logo.png'
                  ></img>
                </a>
                <div className='ml-auto inline-block md:hidden'>
                  <MenuPopver />
                </div>

                <div className='ml-auto hidden md:inline-block'>
                  <Flex gap='5' direction='row'>
                    <a href='#about' className='hover:opacity-75'>
                      <Text size='3' weight='bold'>
                        ABOUT US
                      </Text>
                    </a>
                    <a href='#services' className='hover:opacity-75'>
                      <Text size='3' weight='bold'>
                        SERVICES
                      </Text>
                    </a>
                    <a href='#contact' className='hover:opacity-75'>
                      <Text size='3' weight='bold'>
                        CONTACT US
                      </Text>
                    </a>
                  </Flex>
                </div>
              </Flex>
            </Box>
            {children}
            <div className='w-full px-6 py-4'>
              <Separator size='4' color='gray' />
            </div>

            {/* CONTACT US */}
            <div
              className='flex flex-col items-center justify-center gap-8 px-6 py-16 sm:flex-row'
              id='contact'
            >
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt='Fenrir Data Analytics'
                  loading='lazy'
                  decoding='async'
                  className='relative mx-auto w-4/5 object-contain sm:h-[60px] sm:w-[260px] md:h-[75px] md:w-[325px] lg:h-[120px] lg:w-[520px]'
                  src='/protrait_logo.png'
                ></img>
              </div>
              <div className='flex w-4/5 max-w-xl grow flex-col gap-4 sm:w-auto'>
                <div className='bg-[#333333] p-2 md:p-3 lg:p-4'></div>
                <p className='text-right text-xl text-[#333333] md:text-2xl lg:text-3xl'>
                  Where Data Meets Discovery.
                </p>
                <div className='ml-auto w-1/2 bg-[#F11C22] p-2 md:p-3 lg:p-4'></div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-8 px-6 pb-16 md:flex-row'>
              <p className='max-w-xl text-[#333333] md:w-1/2'>
                Fenrir Data Analytics is a company with extensive experience in
                signal processing, data analytics, engineering, and programming.
                <br />
                <br />
                We use our cumulative experience in the military, government,
                and transportation industries to bring you the best talent for
                every project. <br />
                We are committed to building trust and integrity with our
                clients, and we strive to maintain lasting relationships. <br />
                <br />
                Our experienced consultants, engineers, and programmers have a
                deep knowledge of their respective fields, and they are
                passionate about providing exceptional service that will help
                your business succeed.
              </p>
              <div className='flex flex-col gap-4'>
                <Heading as='h2' size='8' weight='light'>
                  CONTACT US
                </Heading>
                <p className='flex flex-row items-center gap-4 rounded hover:bg-slate-50 hover:opacity-70 active:bg-slate-100 active:opacity-90'>
                  <VercelLogoIcon className='rotate-180' />
                  <span>
                    Fenrir Data Analytics Ltd. <br />
                    <span className='text-sm'>( Tax ID Number 82985610 )</span>
                  </span>
                </p>
                <a
                  href='mailto:director@fenrirdata.com'
                  target='_blank'
                  className='flex flex-row items-center gap-4 rounded hover:bg-slate-50 hover:opacity-70 active:bg-slate-100 active:opacity-90'
                >
                  <EnvelopeClosedIcon />
                  <span>support@fenrirdata.com</span>
                </a>
                <a
                  href='https://goo.gl/maps/C7adVEgC6es9goeW7'
                  target='_blank'
                  referrerPolicy='no-referrer'
                  className='flex flex-row items-center gap-4 rounded hover:bg-slate-50 hover:opacity-80 active:bg-slate-100 active:opacity-90'
                >
                  <PaperPlaneIcon className='-rotate-45' />
                  <span>
                    3 F., No. 17, Ln. 49, Sec. 1, Zhongxiao E. Rd., <br />
                    Zhongzheng Dist., Taipei City 100009, <br />
                    Taiwan (R.O.C.)
                  </span>
                </a>
              </div>
            </div>
            <div className='w-full px-6 py-4'>
              <Separator size='4' color='gray' />
            </div>
            {/* footer */}
            <div className='w-full px-6 pb-4'>
              <span className='text-xs'>
                © 2023 Fenrir Data Analytics Ltd. All rights reserved.
              </span>
            </div>
            {/* <ThemePanel /> */}
          </Theme>
        </div>
      </body>
    </html>
  );
}
