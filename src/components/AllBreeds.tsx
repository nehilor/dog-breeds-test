import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { fetchAllBreeds } from "../redux/actions/allBreedsActions";
import { fetchBreed } from "../redux/actions/breedActions";
import { fetchSubBreed } from "../redux/actions/subBreedActions";
import {
  Box,
  Button,
  Container,
  Card,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const AllBreeds = () => {
  const dispatch = useDispatch();
  const { breeds, loading, error } = useSelector(
    (state: RootState) => state.allBreeds
  );
  const { breed } = useSelector((state: RootState) => state.breed);
  const { images } = useSelector((state: RootState) => state.subBreed);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [ selectedBreed, setSelectedBreed ] = useState("");
  const [ selectedSubBreed, setSelectedSubBreed ] = useState("");

  useEffect(() => {
    if (!dataLoaded) {
      dispatch(fetchAllBreeds());
      setDataLoaded(true);
    }
  }, [dataLoaded, dispatch]);

  useEffect(() => {
    if (selectedBreed) {
      dispatch(fetchBreed(selectedBreed));
    }
  }, [dispatch, selectedBreed]);

  useEffect(() => {
    if (selectedBreed && selectedSubBreed) {
      dispatch(fetchSubBreed(selectedBreed, selectedSubBreed));
    }
  }, [dispatch, selectedBreed, selectedSubBreed]);

  const handleBreedClick = (breed: string) => {
    setSelectedBreed(breed);
  };

  const handleSubBreedClick = (breed: string) => {
    setSelectedSubBreed(breed);
  };

  const handleClickBreedBackBtn = () => {
    setSelectedBreed("");
  };

  const handleClickSubBreedBackBtn = () => {
    setSelectedSubBreed("");
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
        <Typography
          variant="subtitle1"
          sx={{ mb: 2, textTransform: "capitalize" }}
        >
          Selected Sub-Breed: {selectedSubBreed}
        </Typography>
        <Box sx={{ p: 1, textAlign: "center" }}>
          {selectedBreed && !selectedSubBreed && (
            <Button
              onClick={handleClickBreedBackBtn}
              sx={{
                color: "#000",
                border: "1px solid #c5e1a5",
              }}
              variant="outlined"
            >
              <ArrowBackIosIcon
                sx={{
                  color: "#c5e1a5",
                }}
                fontSize="small"
              />
              Back
            </Button>
          )}
          {selectedBreed && selectedSubBreed && (
            <Button
              onClick={handleClickSubBreedBackBtn}
              sx={{
                color: "#000",
                border: "1px solid #c5e1a5",
              }}
              variant="outlined"
            >
              <ArrowBackIosIcon
                sx={{
                  color: "#c5e1a5",
                }}
                fontSize="small"
              />
              Back
            </Button>
          )}
        </Box>
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

        {selectedBreed && !selectedSubBreed && (
          <List
            className="breeds-list"
            sx={{ maxHeight: 400, borderColor: "secondary" }}
          >
            {!breed.length && (
              <Typography
                variant="subtitle1"
                sx={{ mb: 2, textTransform: "capitalize" }}
              >
                There are no sub breeds to show.
              </Typography>
            )}
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

        {selectedBreed && selectedSubBreed && (
          <Grid
            container
            spacing={2}
            sx={{
              maxHeight: 400,
              overflow: "auto",
              marginTop: 1,
            }}
          >
            {images.map((url: string, index: number) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    image={url}
                    alt={`Image ${index}`}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default AllBreeds;
