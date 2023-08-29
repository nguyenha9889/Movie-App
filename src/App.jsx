import Header from './components/header/Header';
import HomePage from './pages/home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/page404/PageNotFound';
import Details from './pages/detail/Details';
import Footer from './components/footer/Footer';
import MediaSearch from './pages/search/MediaSearch';
import MediaList from './pages/discover/MediaList';
import './App.scss';


function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/:mediaType' element={<MediaList />} />
                <Route path='/:mediaType/:id' element={<Details />} />
                <Route path='/search' element={<MediaSearch />} />
                <Route path='/*' element={<PageNotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
