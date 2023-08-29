import PropTypes from 'prop-types';
import { useState } from 'react';
import './selectTab.scss';


function SelectTab({ tabs, onChangeTab }) {
    const [selectedTab, setSelectedTab] = useState(0);

    const activeTab = (tab, i) => {
        setSelectedTab(i);
        onChangeTab(tab);
    }

    return (
        <div className='tab-list'>
            {tabs.map((tab, i) =>
                <button key={i}
                    className={`tab-item ${selectedTab === i ? "active" : ""}`}
                    onClick={() => activeTab(tab, i)}
                >{tab}</button>)}
        </div>
    )
}

SelectTab.propTypes = {
    tabs: PropTypes.array,
    onChangeTab: PropTypes.func,
}

export default SelectTab;
