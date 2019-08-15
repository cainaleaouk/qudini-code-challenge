import React from 'react';
import CustomerCard from './CustomerCard';
import ProfilePicture from './ProfilePicture';
import Name from './Name';
import Content from './Content';

export default (props) =>
    <CustomerCard>
        <ProfilePicture>
        	<img src={props.avatarUrl} alt='no avatar found' />
        </ProfilePicture>
        <Content>
            <Name>{props.name}</Name>
            <div>Expected Time: {props.expectedTime}</div>
        </Content>
    </CustomerCard>;
