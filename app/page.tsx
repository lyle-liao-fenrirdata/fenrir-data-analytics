import { Metadata } from 'next';
import Image from 'next/image';
import { BookmarkFilledIcon } from '@radix-ui/react-icons';
import {
  Flex,
  Text,
  Grid,
  AspectRatio,
  Box,
  Heading,
  Card,
  Inset,
  Blockquote,
  Separator,
} from '@radix-ui/themes';
import BussinessDeal from '../components/svgs/BussinessDeal';
import ProjectManagement from '../components/svgs/ProjectManagement';

export const metadata: Metadata = {
  title: 'Next.js',
};

export default function Page() {
  return (
    <Grid columns='1' gap='9' px='5' className='pb-96'>
      {/* hero image */}
      <AspectRatio className='relative -mx-6' ratio={2.3}>
        <Image
          src='/home-hero.jpg'
          alt='Fenrir Data Analytics'
          fill={true}
          className='relative object-cover object-center'
        />
        <Box
          display='block'
          position='absolute'
          top='0'
          left='0'
          width='100%'
          height='100%'
          className='bg-gradient-to-r from-white/100 to-white/0 to-10%'
        ></Box>
        <Box
          display='block'
          position='absolute'
          top='0'
          left='0'
          width='100%'
          height='100%'
          className='bg-gradient-to-l from-white/100 to-white/0 to-10%'
        ></Box>
        <Box
          display='block'
          position='absolute'
          top='0'
          left='0'
          width='100%'
          height='100%'
          className='bg-gradient-to-b from-white/100 to-white/0 to-10%'
        ></Box>
        <Box
          display='block'
          position='absolute'
          top='0'
          left='0'
          width='100%'
          height='100%'
          className='bg-gradient-to-t from-white/100 to-white/0 to-10% backdrop-blur-sm'
        >
          <Flex align='center' justify='center' width='100%' height='100%'>
            <Heading
              as='h1'
              size='9'
              trim='both'
              align='center'
              className='flex flex-col gap-4 text-white drop-shadow-[0_10px_8px_rgba(255,0,0,0.25)]'
            >
              <span>FENRIR</span>
              <span>DATA</span>
              <span>ANALYTICS</span>
            </Heading>
          </Flex>
        </Box>
      </AspectRatio>

      {/* services overview */}
      <div
        className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4'
        id='about'
      >
        {[
          {
            title: 'TEMPORARY STAFFING',
            desc: 'Unpredictable market fluctuations and increased government regulations...',
          },
          {
            title: 'FULLTIME',
            desc: 'FENRIR commits to provide you with optimal employment matches.',
          },
          {
            title: 'CONTRACT BASED',
            desc: "We pride ourselves in exceeding our clients' expectations and target",
          },
          {
            title: 'CONSULTING SERVICES',
            desc: 'Whether in Project Management, Retail Banking, or Data Security,',
          },
        ].map(({ title, desc }) => (
          <Card size='3' key={title}>
            <Flex height='100%'>
              <Flex direction='column' justify='between' align='start' grow='1'>
                <Text size='5' mb='1'>
                  {title}
                </Text>
                <Text as='p' color='gray' size='2'>
                  {desc}
                </Text>
              </Flex>
              <Inset side='right' pl='current'>
                <Flex
                  align='center'
                  justify='center'
                  px='7'
                  className='h-full bg-slate-700'
                >
                  <BookmarkFilledIcon color='white' height='40' width='40' />
                </Flex>
              </Inset>
            </Flex>
          </Card>
        ))}
      </div>

      {/* why us section */}
      <div className='grid grid-cols-12 gap-6'>
        <Heading as='h2' size='8' weight='light' className='col-span-12'>
          WHY US
        </Heading>
        <div className='col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8'>
          <Text size='4' weight='light' className='col-span-1 md:col-span-2'>
            Fenrir Data Analytics is a leading data analytics company that
            provides data analytics services for all industries.
          </Text>
          <Blockquote>
            Our consultants have expertise across a broad range of industries.
            Within those industries, we maintain a dedicated focus on IT.
          </Blockquote>
          <Blockquote>
            We normally have very qualified candidates available to our clients
            for screening within 48 to 72 hours.
          </Blockquote>
          <Blockquote>
            We have dedicated Account Managers to provide oversight and guidance
            on resource management. This ensures all problems are identified and
            solved quickly.
          </Blockquote>
          <Blockquote>
            We are flexible, our client’s needs are our guiding principles.
          </Blockquote>
        </div>
        <div className='hidden xl:col-span-1 xl:block'></div>
        <div className='hidden lg:col-span-4 lg:block xl:col-span-3'>
          <BussinessDeal />
        </div>
      </div>

      {/* what we offer */}
      <div className='grid grid-cols-12 gap-6 rounded-3xl bg-slate-700/10 px-6 py-12'>
        <Heading as='h2' size='8' weight='light' className='col-span-12'>
          WHAT WE OFFER
        </Heading>
        <Separator size='4' color='ruby' className='col-span-12' />
        <div className='col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8'>
          <Text size='4' weight='light' className='col-span-1 md:col-span-2'>
            Fenrir Data Analytics is a leading data analytics company that
            provides data analytics services for all industries.
          </Text>
          <ProjectManagement />
        </div>
        <div className='hidden xl:col-span-1 xl:block'></div>
        <div className='hidden lg:col-span-4 lg:block xl:col-span-3'>
          <BussinessDeal />
        </div>
      </div>
    </Grid>
  );
}
