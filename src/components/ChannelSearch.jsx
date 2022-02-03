import React, { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';

import { SearchIcon } from '../assets';

const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    // async : because will have to wait for the channels to be fetched
    const getChannels = async (text) =>{
        try {
            // TODO: Fetch Channels
        } catch (error) {
                setQuery(''); // if we got error we can simply set the query to nothing we just reset the search
        }
    }
    // function for search
    const onSearch = (event) =>{
        event.preventDefault(); // this function allows us to prevent the page from reloading whenver we click button

        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value);
    }
    return (
            <div className='channel-search__container'>
                <div className="channel-search__input__wrapper">
                    <div className="channel-search__input__icon">
                        <SearchIcon />
                    </div>
                    <input
                        className="channel-search__input__text"
                        placeholder='Search'
                        type="text"
                        value={query}
                        onChange={onSearch}
                        />
                </div>
            </div>
        );
};

export default ChannelSearch;
