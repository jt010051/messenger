import { useStompClient, useSubscription } from 'react-stomp-hooks';



const PublishComponent = () => {
    const stompClient = useStompClient();
    
    const publishMessage = () => {
      if(stompClient) {
        stompClient.publish({destination: '/app/broadcast', body: 'Hello World'})
      }
    }
    return (
      <div onClick={publishMessage}> Send message </div>
    )
  }

  export default PublishComponent;