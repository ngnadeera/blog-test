import React, { useContext, useState,useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Cards } from './Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chip from '@mui/material/Chip';
import { SearchByContext } from './context';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d2841', 
    },
  },
});

export const AllPostPagination = ({ blogs }) => {


  const { searchByState,setSearchByState } = useContext(SearchByContext)

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3; 
  
  const data = searchByState != '' ? blogs.data.filter((blog) => blog.attributes.tags === searchByState) : blogs.data;

  const totalCards = data.length;
  const pages = Math.ceil(totalCards / cardsPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };


  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, totalCards);

  const handleDelete = () => {
    setSearchByState('');
  }

  return (
    <div>

{searchByState !== '' && (
  <Chip
    size='large'
    label={searchByState}
    onDelete={handleDelete}
    sx={{
      ml: '30px',
      borderRadius: 2, 
      fontWeight:"600",
      fontFamily:'Montserrat',

    }}
  />
)}

      <Container
        fluid
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginLeft: '10px',
        }}
      >
                  {data.length === 0 && <div style={{textAlign:'center', width:'100%', height:'200px', marginTop:'100px'}}>  <h3 className='all-post-pagination-nothing-to-display'>Nothing to display</h3></div>}

        <Row> 
          {data.slice(startIndex, endIndex).map((blog, index) => (
            <Col key={blog.id} md={4}>
              <Cards
              title={blog.attributes.heading}
              imagesrc={`http://${process.env.REACT_APP_API_HOST}:1337${blog.attributes.coverImage.data.attributes.url}`} 
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
