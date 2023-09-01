'use client';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Flex, Popover, Text, IconButton, Separator } from '@radix-ui/themes';
import Link from 'next/link';

const MenuPopver = () => (
  <Popover.Root>
    <Popover.Trigger>
      <IconButton variant='ghost' color='gray'>
        <HamburgerMenuIcon width='36' height='36' />
      </IconButton>
    </Popover.Trigger>
    <Popover.Content className='w-screen max-w-sm sm:max-w-xl'>
      <Flex gap='3' direction='column'>
        <Link href='/about' className='hover:opacity-75'>
          <Text size='4'>ABOUT US</Text>
        </Link>
        <Separator size='4' />
        <Link href='/services' className='hover:opacity-75'>
          <Text size='4'>SERVICES</Text>
        </Link>
        <Separator size='4' />
        <Link href='/contact' className='hover:opacity-75'>
          <Text size='4'>CONTACT US</Text>
        </Link>
      </Flex>
    </Popover.Content>
  </Popover.Root>
);

export default MenuPopver;
