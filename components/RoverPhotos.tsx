import useSolCount from '@/hooks/useSolCount';
import { Box, Heading, Text } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';

type TSFixMe = any;

const API_HOST = 'https://mars-photos.herokuapp.com';

type Photo = {
  id: number;
  camera: {
    full_name: string;
  };
  img_src: string;
};

const RoverPhotos = () => {
  const [photos, setPhotos] = useState<TSFixMe[]>([]);
  const { sol, show } = useSolCount();

  useEffect(() => {
    const fetchRoverPhotos = async (sol: number) => {
      const response = await fetch(
        `${API_HOST}/api/v1/rovers/perseverance/photos?sol=${sol}`
      );
      const json = await response.json();

      setPhotos(json.photos);
    };

    if (show && sol >= 0) {
      fetchRoverPhotos(sol);
    }
  }, [sol, show]);

  if (show && !photos.length) {
    return <Text mt="2">No photos 😕</Text>;
  }

  return (
    <section>
      {show &&
        photos.map((photo: Photo) => (
          <Box key={photo.id} mt="4">
            <Heading size="md" fontWeight={700} mb="2">
              {photo.camera.full_name}
            </Heading>
            <img src={photo.img_src} alt="{photo.id}" />
          </Box>
        ))}
    </section>
  );
};

export default RoverPhotos;
