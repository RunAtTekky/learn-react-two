import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={'purple'}
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
        zIndex={'10'}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>MIME</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'stretch'}>
              <Button
                justifyContent={'flex-start'}
                onClick={onClose}
                colorScheme="purple"
                variant={'ghost'}
              >
                <Link to={'/'}>Home</Link>
              </Button>
              <Button
                justifyContent={'flex-start'}
                onClick={onClose}
                colorScheme="purple"
                variant={'ghost'}
              >
                <Link to={'/videos'}>Video</Link>
              </Button>
              <Button
                justifyContent={'flex-start'}
                onClick={onClose}
                colorScheme="purple"
                variant={'ghost'}
              >
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>
              <Button
                justifyContent={'flex-start'}
                onClick={onClose}
                colorScheme="purple"
                variant={'ghost'}
              >
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>
            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme="purple">
                <Link to={'/login'}>Login</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'outline'}
                colorScheme="purple"
              >
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
