import React from "react";
// import Header from "../components/Header";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#EEEEEE',
  headerBgColor: '#eff88f',
  botBubbleColor: '#eff88f',
  botFontColor: '#00ADB5',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
  margin: '0 auto'
};

function Chatbot(){
	return(
	<div>
	<div className="mx-auto ml-30">
	<ThemeProvider theme={theme} className="mx-auto">
	<ChatBot
	  headerTitle="Chat with Alex"
	  recognitionEnable={true}
	  steps={[
	    {
	      id: '1',
	      message: 'Hi, I am Alex. What is your name?',
	      trigger: '2',
	    },
	    {
	      id: '2',
	      user: true,
	      trigger: '3',
	    },
	    {
	      id: '3',
	      message: 'Hi {previousValue}, nice to meet you!',
	      trigger: '4',
	    },
	    {
	      id: '4',
	      message: 'How are you feeling today?',
	      trigger: '5',
	    },
	    {
	      id: '5',
	      options: [
	        { value: 1, label: 'Great!', trigger: '6' },
	        { value: 2, label: 'Not so good', trigger: '7' },
	        { value: 3, label: 'Feeling very low', trigger: '7' },
	      ],
	    },
	    {
	        id: '6',
	        message: 'That is awesome!',
	        end: true,
	      },
	      {
	        id: '7',
	        message: 'Do not worry, everything will be okay. Take a deep breath and check out some of our resources or listen to music available here to make your mood lighter.',
	        end: true,
	      },
	  ]}
	/>
	</ThemeProvider>
	</div>
	</div>
	);
}

export default Chatbot;