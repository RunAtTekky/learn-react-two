import { Button, Heading, Stack, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import videos from '../assets/videosData';

const Videos = () => {
  const [videoNumber, setVideoNumber] = useState(0);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videos[videoNumber].url}
          style={{ width: '100%' }}
        ></video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading textTransform={'capitalize'}>
            {videos[videoNumber].title}
          </Heading>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflowY={'auto'}
      >
        {videos.map((video, index) => (
          <Button
            onClick={() => setVideoNumber(index)}
            variant={index === videoNumber ? 'solid' : 'ghost'}
            colorScheme="purple"
            textTransform={'uppercase'}
            justifyContent={'flex-start'}
          >
            {video.title}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
