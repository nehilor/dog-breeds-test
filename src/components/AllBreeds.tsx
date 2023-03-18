import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { fetchAllBreeds } from "../redux/actions/allBreedsActions";
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
  const [dataLoaded, setDataLoaded] = useState(false);

  console.log({ breeds, loading, error });

  useEffect(() => {
    if (!dataLoaded) {
      dispatch(fetchAllBreeds());
      setDataLoaded(true);
    }
  }, [dataLoaded, dispatch]);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ p: 3, mt: 3, textAlign: "center" }}>
        <Typography variant="h1" sx={{ mb: 2 }}>
          Dog Breeds
        </Typography>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <List>
          {breeds.map((breed) => (
            <ListItem key={breed}>
              <ListItemText primary={breed} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default AllBreeds;
