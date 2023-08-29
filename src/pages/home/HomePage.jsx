import Banner from './banner/Banner';
import Trending from './trending/Trending';
import tmdbConfig from '../../api/tmdbConfig';
import './home.scss';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';


function HomePage() {

    return (
        <div className='container'>
            <Banner
                mediaType={tmdbConfig.mediaType.movie}
                mediaCategory={tmdbConfig.mediaCategory.trending} />
            <Trending
                mediaType={tmdbConfig.mediaType.movie}
                mediaCategory={tmdbConfig.mediaCategory.trending} />
            <Popular
                movie={tmdbConfig.mediaType.movie}
                tv={tmdbConfig.mediaType.tv}
                mediaCategory={tmdbConfig.mediaCategory.popular} />
            <TopRated
                movie={tmdbConfig.mediaType.movie}
                tv={tmdbConfig.mediaType.tv}
                mediaCategory={tmdbConfig.mediaCategory.top_rated} />
        </div>
    )
}

export default HomePage;
