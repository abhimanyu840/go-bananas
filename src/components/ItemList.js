import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api';
import { Grid, Card, CardContent, Typography, Container, CircularProgress, Box } from '@mui/material';

const ItemList = ({ searchTerm }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            setLoading(true);
            try {
                const posts = await fetchPosts();
                setItems(posts);
            } catch (error) {
                console.error('Failed to fetch posts', error);
            } finally {
                setLoading(false);
            }
        };
        getPosts();
    }, []);

    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                    <CircularProgress />
                </Box>
            ) : (
                <Grid container spacing={3}>
                    {filteredItems.map(item => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Card sx={{ minHeight: 200, display: 'flex', flexDirection: 'column' }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {item.body}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default ItemList;
