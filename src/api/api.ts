interface BreedsListResponse {
  message: [];
  status: string;
}

interface BreedResponse {
  message: [];
  status: string;
}

interface SubBreedResponse {
  message: [];
  status: string;
}

export const getBreedsList = async (): Promise<BreedsListResponse> => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  return data;
};

export const getBreed = async (breed: string): Promise<BreedResponse> => {
  const response = await fetch(`https://dog.ceo/api/breed/${breed}/list`);
  const data = await response.json();
  return data;
};

export const getSubBreedImages = async (
  breed: string,
  subBreed: string
): Promise<SubBreedResponse> => {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/${subBreed}/images`
  );
  const data = await response.json();
  return data;
};
