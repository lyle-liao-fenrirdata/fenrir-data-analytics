import './globals.css';
import { Box, Flex, Theme, ThemePanel, Text } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import MenuPopver from '../components/MenuPopover';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className='scroll-smooth'>
      <body className='relative'>
        <div className='mx-auto w-screen max-w-screen-2xl'>
          <Theme accentColor='ruby' panelBackground='solid' radius='small'>
            <Box
              display='block'
              px='5'
              py='4'
              position='sticky'
              top='0'
              className='z-10 bg-white/80'
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
            {/* <ThemePanel /> */}
          </Theme>
        </div>
      </body>
    </html>
  );
}
