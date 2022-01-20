import React, {useState, useEffect} from "react";
import { Grid, Container, Grow, AppBar, TextField, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { getPosts } from "../../actions/posts";
import { useHistory, useLocation } from 'react-router-dom';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';







const Home = () => {
  const classes = useStyles();

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
   <div className="background">

    <Grow in>
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
              <AppBar className={classes.appBarSearch} position="static" color="inherit">
                <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Ads" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
              </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
    
      </Container>
    </Grow>

    </div>
  );
};






export default Home;