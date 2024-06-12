import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  w: ['100%', 'auto'],
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      stopOnHover={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Image
          src={img1}
          alt="VR glasses"
          h={'full'}
          w={'full'}
          objectFit={'cover'}
        />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch The Future
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image
          src={img2}
          alt="PS Controllers"
          h={'full'}
          w={'full'}
          objectFit={'cover'}
        />
        <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
          Future Is Gaming
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image
          src={img3}
          alt="controller front view"
          h={'full'}
          w={'full'}
          objectFit={'cover'}
        />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image
          src={img4}
          alt="Night Moon"
          h={'full'}
          w={'full'}
          objectFit={'cover'}
        />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Night life is cool
        </Heading>
      </Box>
    </Carousel>
  );
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          margin={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium temporibus dolorem quisquam provident ducimus ad vel
            totam laborum! Nulla alias minus fugit soluta temporibus nam
            asperiores magnam delectus nihil qui animi porro sunt amet ducimus
            architecto saepe esse obcaecati nesciunt blanditiis perferendis
            expedita magni sit, necessitatibus dolore. Repellendus numquam nihil
            illo nam fuga. Aut quasi amet libero impedit beatae illo laborum in
            tempora delectus. Nam totam dolor voluptatum blanditiis eaque
            sapiente esse, nemo repellendus aspernatur perferendis, modi natus
            quae fuga expedita incidunt quaerat sit et. Dignissimos, at? Illo
            omnis corrupti nisi consequuntur veritatis. Dolorum odit labore
            dolores dolor nihil praesentium?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
