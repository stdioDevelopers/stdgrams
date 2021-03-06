import React,{Component} from 'react';
import {Card, Image,Button, TextArea, Form} from 'semantic-ui-react';
import '../App.css';

class Post extends Component {


  render(){
    return(
      <div>
        <div>
          <Card
            style={{
              width: "100%",
              backgroundColor:"rgba(128, 128, 128,0.4)",
              marginBottom: 20
            }}
          >
            <Card.Header>
              <Image
                src={this.props.avatar}
                circular
                style={{
                  height:62,
                  width: 62,
                  float:"left",
                  margin: 5,
                }}
              />
              <h1>{' '}{this.props.author}</h1>
            </Card.Header>
            <Image
              style={{
                margin: 'auto'
              }}
              src= {this.props.image}
            />
            <div
              style={{
                margin:5
              }}
            >
              <Button circular color='black' icon='paw' />
              <Button circular color='white' icon='comments outline' />
            </div>
            <Form
              style={{
                margin: 5
              }}
            >
              <TextArea
                autoHeight
                placeholder='Comment this post'
                rows={2}
              />
            </Form>
          </Card>
        </div>
      </div>

    );
  }

}

export default Post;
