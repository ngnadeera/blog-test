import React, { useContext, useState,useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Cards } from './Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chip from '@mui/material/Chip';


const theme = createTheme({
  palette: {
    primary: {
      main: '#0d2841', 
    },
  },
});

export const AllPostPagination = ({ blogs }) => {



  const [isChipVisible,setIsChipVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3; 
  



  const totalCards = blogs.data.length;
  const pages = Math.ceil(totalCards / cardsPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };


  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, totalCards);

  const handleDelete = () => {
      setIsChipVisible(false);
  }

  return (
    <div>

      {isChipVisible && <Chip
              label="hello"
              onDelete={handleDelete}
            />}

      <Container
        fluid
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '10px',
        }}
      >
        
        <Row>
          {blogs.data.slice(startIndex, endIndex).map((blog, index) => (
            <Col key={blog.id} md={4}>
              <Cards 
              title={blog.attributes.heading}
              imagesrc={`http://localhost:1337${blog.attributes.coverImage.data.attributes.url}`} 
              postRoute={`/post/${blog.id}`}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <div className='all-post-pagination'>
        <ThemeProvider theme={theme}>
          
          <Pagination
            count={pages}
            showFirstButton
            showLastButton
            shape='rounded'
            color='primary'
            page={currentPage}
            onChange={handlePageChange}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};
