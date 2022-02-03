import React from 'react';
import { Avatar, useChatContext } from 'stream-chat-react'; // Avatar for users images

const TeamChannelPreview = ( channel, type ) => {
    const { channel : activeChannel, client } = useChatContext();
    const ChannelPreview = () => ( //  this is a preview for the  channel of  multiple users
        <p className="channel-preview__item">
            # {channel?.data?.name || channel?.data?.id} {/* get the channel name and with ? we make sure that we have the channel before we want to acces  something else
                                                            or if the channel doenst have name we can get it with the id  */}
        </p>
    )
    const DirectPreview = () =>{// preview for Direct messages
        // mapping all over users and we're keeping all the ones where the id is not equal to client Id ( to get the users that we're talking to out the chat )
        const members = Object.values(channel.state.members).filter(({ user }) => user.id !== client.userID);

        return (
            <div className="channel-preview__item single">
                <Avatar
                    image={members[0]?.user?.image}
                    name={members[0]?.user?.fullName}
                    size={24}
                />
                <p>{members[0]?.user?.fullName} {/* list members name*/}</p>
            </div>
        )
    }
    return (
        <div className={
            channel?.id === activeChannel?.id
            ? 'channel-preview__wrapper__selected'
            : 'channel-preview__wrapper'
        }
        onClick={() => {
            console.log(channel); //channel name
        } }
        >
            { type === 'team' ? <ChannelPreview /> : <DirectPreview /> }
        </div>

    );
};

export default TeamChannelPreview;
