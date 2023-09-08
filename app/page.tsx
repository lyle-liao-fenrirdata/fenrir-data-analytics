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
import EndpointSecurity from '../components/svgs/EndpointSecurity';
import DataLossPrevention from '../components/svgs/DataLossPrevention';
import OnboardProcess from '../components/svgs/OnboardProcess';
import SourcingStrategy from '../components/svgs/SourcingStrategy';
import QualityOnDemandTalent from '../components/svgs/QualityOnDemandTalent';
import CustomerFirst from '../components/svgs/CustomerFirst';
import CustomerProductivity from '../components/svgs/CustomerProductivity';
import ServiceExcellent from '../components/svgs/ServiceExcellent';
import IntegratedInAllWeDo from '../components/svgs/IntegratedInAllWeDo';
import AlwaysAccountable from '../components/svgs/AlwaysAccountable';

export const metadata: Metadata = {
  metadataBase: new URL('https://fenrirdata.com/'),
  title: 'Fenrir Data Analytics',
  description:
    'Fenrir Data Analytics is a leading data analytics company that provides data analytics services for all industries.',
  applicationName: 'Fenrir Data Analytics',
  generator: 'Next.jsg',
  keywords: ['Fenrir, data Analysis, data analytics, consulting'],
  referrer: 'origin',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  creator: 'Fenrir Data Analytics Team',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Fenrir Data Analytics',
    description:
      'Fenrir Data Analytics is a leading data analytics company that provides data analytics services for all industries.',
    siteName: 'Fenrir Data Analytics',
    images: [
      {
        url: '/protrait_logo.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '/',
    creator: '@FenrirDataAnalytics',
    creatorId: '',
    images: {
      url: '/protrait_logo.png',
      alt: 'Fenrir Data Analytics Logo',
    },
  },
};

export default function Page() {
  return (
    <Grid columns='1' gap='9' px='5' className='pb-16'>
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
            <Box position='relative' className='group'>
              <Heading
                as='h1'
                size='9'
                trim='both'
                align='center'
                className='flex flex-col gap-4 text-white transition-transform delay-200 duration-700 group-hover:scale-150  group-hover:backdrop-blur-sm'
              >
                <span>FENRIR</span>
                <span>DATA</span>
                <span>ANALYTICS</span>
              </Heading>
              <Heading
                as='h1'
                size='9'
                trim='both'
                align='center'
                className='absolute left-0 top-0 -z-10 flex -translate-x-2 translate-y-1 flex-col gap-4 text-[#F11C22] opacity-50 transition-all duration-700 group-hover:-translate-y-6 group-hover:translate-x-20'
              >
                <span>FENRIR</span>
                <span>DATA</span>
                <span>ANALYTICS</span>
              </Heading>
              <Heading
                as='h1'
                size='9'
                trim='both'
                align='center'
                className='absolute left-0 top-0 -z-20 flex -translate-y-1 translate-x-1 flex-col gap-4 text-[#333333] opacity-50 transition-all duration-700 group-hover:-translate-x-20 group-hover:translate-y-6'
              >
                <span>FENRIR</span>
                <span>DATA</span>
                <span>ANALYTICS</span>
              </Heading>
            </Box>
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
            title: 'DATA ANALYTICS',
            desc: 'Collect and analyze data to make better decisions, optimize their processes, and improve their products and services.',
          },
          {
            title: 'ENGINERRING & PROGRAMMING',
            desc: 'Help businesses develop new products and services, improve existing products and services, and automate operations',
          },
          {
            title: 'TEMPORARY STAFFING',
            desc: 'Fill short-term or seasonal vacancies to get the right people in the right roles quickly.',
          },
          {
            title: 'CONSULTING SERVICES',
            desc: 'Help businesses develop new technology strategies, improve customer service, or implement new software systems.',
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
            Fenrir Data Analytics has extensive experience in signal processing
            and data analytics, to help businesses in a variety of industries
            improve your operations.
          </Blockquote>
          <Blockquote>
            We can help businesses design and build new software applications,
            develop new hardware devices, and improve their IT infrastructure.
          </Blockquote>
          <Blockquote>
            We provide temporary staffing services to businesses that can be a
            great way for businesses to save money on recruiting and onboarding
            costs.
          </Blockquote>
          <Blockquote>
            We have dedicated Managers to provide provide consulting services to
            businesses that need help with a specific project or issue.
          </Blockquote>
        </div>
        <div className='hidden xl:col-span-1 xl:block'></div>
        <div className='hidden lg:col-span-4 lg:block xl:col-span-3'>
          <BussinessDeal />
        </div>
      </div>
      {/* what we offer */}
      <div
        className='grid grid-cols-12 gap-6 rounded-md bg-slate-700/10 px-6 py-12'
        id='services'
      >
        <Heading as='h2' size='8' weight='light' className='col-span-12'>
          WHAT WE OFFER
        </Heading>
        <Separator size='4' color='ruby' className='col-span-12 pb-1' />
        <div className='col-span-12 pt-4'></div>

        <div className='col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {/* 1 */}
          <div className='col-span-1 flex flex-col items-center gap-6'>
            <div className='flex flex-col items-center gap-4'>
              <Heading align='center' as='h3'>
                PROJECT MANAGEMENT
              </Heading>
              <Text size='4' weight='light'>
                FENRIR aims to reduce the costs affiliated with hiring and
                managing full time employees…
              </Text>
            </div>
            <div className='max-h-52 px-6'>
              <ProjectManagement />
            </div>
          </div>
          {/* 2 */}
          <div className='col-span-1 flex flex-col items-center gap-6 rounded-md bg-white px-6 py-8 md:flex-col-reverse'>
            <div className='flex flex-col items-center gap-4'>
              <Heading align='center' as='h3'>
                ENDPOINT SECURITY
              </Heading>
              <Text size='4' weight='light'>
                Within a typical Endpoint Framework, the end-terminals or end
                users endure a little…
              </Text>
            </div>
            <div className='max-h-52 px-6'>
              <EndpointSecurity />
            </div>
          </div>
          {/* 3 */}
          <div className='col-span-1 flex flex-col items-center gap-6 rounded-md px-6 py-8 md:bg-white xl:bg-transparent'>
            <div className='flex flex-col items-center gap-4'>
              <Heading align='center' as='h3'>
                DATA LOSS PREVENTION
              </Heading>
              <Text size='4' weight='light'>
                Safeguard and monitor your sensitive data with our specialist
                data scientists…
              </Text>
            </div>
            <div className='max-h-52 px-6'>
              <DataLossPrevention />
            </div>
          </div>
          {/* 4 */}
          <div className='col-span-1 flex flex-col items-center gap-6 rounded-md bg-white px-6 py-8 md:flex-col-reverse md:bg-transparent xl:flex-col xl:bg-white'>
            <div className='flex flex-col items-center gap-4'>
              <Heading align='center' as='h3'>
                ONBOARDING PROCESS
              </Heading>
              <Text size='4' weight='light'>
                FENRIR&#39;s talent acquisition abilities are second to none.
                Our targeted efforts…
              </Text>
            </div>
            <div className='max-h-52 px-6'>
              <OnboardProcess />
            </div>
          </div>
          {/* 5 */}
          <div className='col-span-1 flex flex-col items-center gap-6 px-6 py-8 xl:flex-col-reverse'>
            <div className='flex flex-col items-center gap-4'>
              <Heading align='center' as='h3'>
                SOURCING STRATEGIES
              </Heading>
              <Text size='4' weight='light'>
                We will leverage FENRIR&#39;s comprehensive sourcing strategies,
                including, but not limited to…
              </Text>
            </div>
            <div className='max-h-52 px-6'>
              <SourcingStrategy />
            </div>
          </div>
          {/* 6 */}
          <div className='col-span-1 flex flex-col items-center gap-6 rounded-md bg-white px-6 py-8 md:flex-col-reverse xl:flex-col'>
            <div className='flex flex-col items-center gap-4'>
              <Heading align='center' as='h3'>
                QUALITY ON-DEMAND TALENT
              </Heading>
              <Text size='4' weight='light'>
                Our firm prides itself on helping our clients locate with newer
                tech and experience candidates…
              </Text>
            </div>
            <div className='max-h-52 px-6'>
              <QualityOnDemandTalent />
            </div>
          </div>
        </div>
      </div>
      {/* our core value */}
      {/* https://www.svgrepo.com/collection/moriarty-thin-line-vectors */}
      <div className='grid grid-cols-12 gap-6'>
        <Heading as='h2' size='8' weight='light' className='col-span-12'>
          OUR CORE VALUES
        </Heading>
        <div className='col-span-12 flex flex-row flex-wrap justify-center gap-6'>
          {/* 1 */}
          <div className='w-40 sm:w-40 md:w-56 lg:w-44 xl:w-56'>
            <div className='p-6'>
              <CustomerFirst />
            </div>
            <Text
              size='4'
              align='center'
              weight='bold'
              className='col-span-1 md:col-span-2'
            >
              CUSTOMER FIRST
            </Text>
          </div>
          {/* 2 */}
          <div className='w-40 sm:w-40 md:w-56 lg:w-44 xl:w-56'>
            <div className='p-6'>
              <CustomerProductivity />
            </div>
            <Text
              size='4'
              align='center'
              weight='bold'
              className='col-span-1 md:col-span-2'
            >
              CUSTOMER PRODUCTIVITY
            </Text>
          </div>
          {/* 3 */}
          <div className='w-40 sm:w-40 md:w-56 lg:w-44 xl:w-56'>
            <div className='p-6'>
              <ServiceExcellent />
            </div>
            <Text
              size='4'
              align='center'
              weight='bold'
              className='col-span-1 md:col-span-2'
            >
              SERVICE EXCELLENCE
            </Text>
          </div>
          {/* 4 */}
          <div className='w-40 sm:w-40 md:w-56 lg:w-44 xl:w-56'>
            <div className='p-6'>
              <IntegratedInAllWeDo />
            </div>
            <Text
              size='4'
              align='center'
              weight='bold'
              className='col-span-1 md:col-span-2'
            >
              INTEGRITY IN ALL WE DO
            </Text>
          </div>
          {/* 5 */}
          <div className='w-40 sm:w-40 md:w-56 lg:w-44 xl:w-56'>
            <div className='p-6'>
              <AlwaysAccountable />
            </div>
            <Text
              size='4'
              align='center'
              weight='bold'
              className='col-span-1 md:col-span-2'
            >
              WE WILL ALWAYS BE ACCOUNTABLE
            </Text>
          </div>
        </div>
      </div>
    </Grid>
  );
}
