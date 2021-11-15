import { Container, Grid } from "@mui/material";
import { HistoryCard } from "../../components";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <HistoryCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <HistoryCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <HistoryCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <HistoryCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
