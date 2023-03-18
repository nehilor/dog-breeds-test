import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { fetchAllBreeds } from "../redux/actions/allBreedsActions";
import { fetchSubBreed } from "../redux/actions/breedActions";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const AllBreeds = () => {
  const dispatch = useDispatch();
  const { breeds, loading, error } = useSelector(
    (state: RootState) => state.allBreeds
  );
  const { breed } = useSelector((state: RootState) => state.breed);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selectedSubBreed, setSelectedSubBreed] = useState("");

  // console.log({ breeds, loading, error });
  console.log({ breed });

  useEffect(() => {
    if (!dataLoaded) {
      dispatch(fetchAllBreeds());
      setDataLoaded(true);
    }
  }, [dataLoaded, dispatch]);

  useEffect(() => {
    if (selectedBreed) {
      dispatch(fetchSubBreed(selectedBreed));
    }
  }, [dispatch, selectedBreed]);

  const handleBreedClick = (breed: string) => {
    setSelectedBreed(breed);
  };

  const handleSubBreedClick = (breed: string) => {
    console.log('subBreed => ', breed);
    setSelectedSubBreed(breed);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ px: 3, py: 4, textAlign: "center" }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Dog Breeds
        </Typography>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <Typography
          variant="subtitle1"
          sx={{ mb: 2, textTransform: "capitalize" }}
        >
          Selected Breed: {selectedBreed}
        </Typography>
        {!selectedBreed && (
          <List
            className="breeds-list"
            sx={{ maxHeight: 400, borderColor: "secondary" }}
          >
            {breeds.map((breed) => (
              <ListItem key={breed} selected={selectedBreed === breed}>
                <ListItemText
                  primary={breed}
                  sx={{ cursor: "pointer", textTransform: "capitalize" }}
                  onClick={() => handleBreedClick(breed)}
                />
              </ListItem>
            ))}
          </List>
        )}
        {selectedBreed && (
          <List
            className="breeds-list"
            sx={{ maxHeight: 400, borderColor: "secondary" }}
          >
            {breed.map((subBreed: string) => (
              <ListItem key={subBreed} selected={selectedBreed === subBreed}>
                <ListItemText
                  primary={subBreed}
                  sx={{ cursor: "pointer", textTransform: "capitalize" }}
                  onClick={() => handleSubBreedClick(subBreed)}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Container>
  );
};

export default AllBreeds;
