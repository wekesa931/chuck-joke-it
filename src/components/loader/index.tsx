import React from 'react';
import {Card, Avatar} from 'antd'

const { Meta } = Card;
export interface LoaderProps {
  
}
 
const Loader: React.SFC<LoaderProps> = () => {
  return ( 

  <Card style={{ background: '#f6e3c8', width: '100%', marginTop: 16, border: 'none' }} loading={true}>
    <Meta
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }
      title="Card title"
      description="This is the description"
    />
  </Card>
   );
}
 
export default Loader;