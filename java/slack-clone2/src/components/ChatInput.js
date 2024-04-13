import React from 'react'

function ChatInput({channelName, channelId}) {

    const sendMessage = e => {
        e.preventDefault(); // prevent Refresh
    }
    
  return <ChatInputContainer>
    <form action="">
        <input placeholder={`Message #ROOM`} />
        <Button hidden type='submit' onClick = {sendMessage}>
            SEND
        </Button>
    </form>
  </ChatInputContainer>
}

export default ChatInput;

const ChatInputContainer = styled.div``;