import ContentWrapper from '../contentWrapper/ContentWrapper';
import './globalLoading.scss';


function GlobalLoading() {

    return (
        <ContentWrapper>
            <div className="global-loading">
                <div></div><div></div><div></div><div></div>
            </div>
        </ContentWrapper>
    )
}

export default GlobalLoading;
