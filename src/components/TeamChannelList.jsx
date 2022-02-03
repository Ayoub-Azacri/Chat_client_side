import React from 'react';

import { AddChannel } from '../assets';

const TeamChannelList = ({ children, error = false, loading, type}) => { // type means are we in groupe chat or direct messages
    if(error) { // we handle error
        return  type === 'team' ?( // first we have to check the type : if type=team we send an error message if not then return null = it doesnt exist
            <div className="team-channel-list">
                <p className="team-channel-list__message">
                    Connection error, please wait a moment and try again.
                </p>
            </div>
        ) : null;
    }
    if(loading){ // we handle loading
        return (
            <div className="team-channel-list">
                <p className="team-channel-list__message loading">
                    {type === 'team' ? 'Channels' : 'Messages'} loading ...
                </p>
            </div>
        )
    }

    return (
        // we show our list
        <div className='team-channel-list'>
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__title">
                    {type === 'team' ? 'Channels' : 'Direct Messages'}
                </p>
                {/* Button - Add channel*/}
            </div>
            {children}
        </div>
    );
};

export default TeamChannelList;
