import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
import Report from "./Report";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
// import { css } from "@emotion/react";
// import ClipLoader from "react-spinners/ClipLoader";
import Loader from "./loader";
import { reportUpload } from "../api/reportUploader";
function Talk() {
      // const [open, setOpen] = React.useState(
      //   "sidebar bg-light w-60 text-secondary-100 px-2 fixed inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-200 ease-in-out"
      // );
      const [end,setEnd] = useState(false);
      const [start,setStart] = useState(false);
      const [data,setData] = useState(null);
      const [transcripts,setTranscripts] = useState([]);
      const [convId,setConvId] = useState(null);
      const [ws,setWs] = useState(null)
      const [loading,setLoading] =useState(false)
      const profilePatient = useSelector(state => state.patientReducer);
      // const [error,setError] = useState(null)
      // const [notification,setNotification] = useState(null)
      const [selectedFile,setSelectedFile] = useState(null);
      const [happy,setHappy] = useState(0);
      const [neutral,setNeutral] = useState(0);
      const [sad,setSad] = useState(0);
      const [finalPolarity,setFinalPolarity] = useState(0);

      const emojiMap = {
        0: '😐',
        1: '😃',
        2: '😞'
      };

      useEffect(()=>{
        if(transcripts.length>0)
        {
          setData({
            transcripts:transcripts,
            patientDetails:{
              name:profilePatient.name,
              age:profilePatient.age,
              city:profilePatient.city
            }
          })
          setLoading(false)
          setEnd(true);
        }
        else
        {
          setLoading(false)
          setEnd(true)
        }
      },[transcripts, profilePatient.age, profilePatient.city, profilePatient.name])

      // useEffect(()=>{
      //   if((end && transcripts.length>0 ))
      //   ReactPDF.render(Report,`${__dirname}/test.pdf`)
      // },[end,transcripts])
      //console.log(__dirname)

      useEffect(()=>{
        async function webSocketSetup(){
        
          if(ws)
        {
          let conversationId;
          ws.onmessage = async (event) => {
  
            const data = JSON.parse(event.data);
            if (data.type === 'message' && data.message.hasOwnProperty('data')) {
              conversationId = data.message.data.conversationId;
              setConvId(conversationId);
            }
            // if (data.type === 'topic_response') {
            //   for (let topic of data.topics) {
            //     // console.log('Topic detected: ', topic.phrases)
            //   }
            // }
            // if (data.type === 'insight_response') {
            //   for (let insight of data.insights) {
            //    // console.log('Insight detected: ', insight.payload.content);
            //   }
            // }
            // if (data.type === 'message' && data.message.hasOwnProperty('punctuated')) {
            //   //console.log('Live transcript: ', data.message.punctuated.transcript);
            // }
    
          };
    
          ws.onerror  = (err) => {
            console.error(err);
            toast.error(err, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          };
          // Fired when the WebSocket connection has been closed
          ws.onclose = (event) => {
            console.info('Connection to websocket closed');
            // setLoading(false)
            // setStart(false);
            // setEnd(false)
            toast.info('Connection to websocket closed', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          };
          // Fired when the connection succeeds.
          ws.onopen = (event) => {
            setStart(true)
            setEnd(false)
            ws.send(JSON.stringify({
              type: 'start_request',
              meetingTitle: 'Websockets How-to', // Conversation name
              insightTypes: ['question', 'action_item'], // Will enable insight generation
              config: {
                confidenceThreshold: 0.5,
                languageCode: 'en-US',
                speechRecognition: {
                  encoding: 'LINEAR16',
                  sampleRateHertz: 44100,
                }
              },
              speaker: {
                userId: 'example@symbl.ai',
                name: 'Example Sample',
              }
            }));
          };
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });

          const handleSuccess = (stream) => {
            const AudioContext = window.AudioContext;
            const context = new AudioContext();
            const source = context.createMediaStreamSource(stream);
            const processor = context.createScriptProcessor(1024, 1, 1);
            const gainNode = context.createGain();
            source.connect(gainNode);
            gainNode.connect(processor);
            processor.connect(context.destination);
            processor.onaudioprocess = (e) => {
              // convert to 16-bit payload
              const inputData = e.inputBuffer.getChannelData(0) || new Float32Array(this.bufferSize);
              const targetBuffer = new Int16Array(inputData.length);
              for (let index = inputData.length; index > 0; index--) {
                  targetBuffer[index] = 32767 * Math.min(1, inputData[index]);
              }
              // Send audio stream to websocket.
              if (ws.readyState === WebSocket.OPEN) {
                ws.send(targetBuffer.buffer);
              }
            };
        
            document.querySelector("#start-instructions").innerHTML = "Start speaking now ...";
          };
          handleSuccess(stream);
        }

        }
        webSocketSetup();
        
      },[ws])

      const onChangeHandler = e => {
        
        const file = e.target.files[0];
        //console.log(file)
        setSelectedFile(file);
      }
      const handleReportSubmit = e => {
        e.preventDefault();
        var data = new FormData();
        //console.log(selectedFile)
        data.append('file', selectedFile);
       //console.log("LOADING FILE UPLOAD")
        reportUpload(data).then(message => {
          toast.success(message,{
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })

          setEnd(false);
          setLoading(false);
          setStart(false);
          setTranscripts([]);
          setConvId(null);
          setHappy(0);
          setSad(0);
          setNeutral(0);
          
        })
        .catch(err => 
          toast.error(err,{
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }))

      }

      // let ws = null;
      let polarityTracker = [0, 0, 0];
      
      // Happy/Sad minimums
      const happyMin = 0.3;
      const sadMin = -0.3;
      
      
      const calculatePolarity = async (transcripts) => {
        var sum=0;
        transcripts.forEach(item => {
          sum+=item.polarityScore;
        })
        if(transcripts.length>0)
        {
          var avg= sum/transcripts.length;
          setFinalPolarity(avg);
        }
        else
        setFinalPolarity(0);
      }


      const trackEmoji = () => {
        if(finalPolarity <=happyMin && finalPolarity >=sadMin) {
          return emojiMap[0];
        }
        else if(finalPolarity > happyMin){
          return emojiMap[1];
        }
        else
        return emojiMap[2];
      }



      const fetchMessages = async () => {
        let cacheTable = [];
        if (convId) {
          // You can log sentiments on messages from data.message.data.conversationId
          const sentimentEndpoint = `https://api.symbl.ai/v1/conversations/${convId}/messages?sentiment=true`;
          const response = await fetch(sentimentEndpoint, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
            }
          });
          const resp = await response.json();
          //console.log(resp)
          //console.log("In Fetch Message")
          if (response.ok) {
            // let rows = "";
            let trans=[];
            // Initialize tracker.
            for (let message of resp.messages) {
              const score = message.sentiment.polarity.score;
              if (cacheTable.indexOf(message.id) === -1) {
                //console.log('Polarity: ', score);
              }
              // rows += `
              //   <tr>
              //     <td>${message.id}</td>
              //     <td>${score}</td>
              //   </tr>
              // `

              trans.push({
                message:message.text,
                messageId:message.id,
                polarityScore:message.sentiment.polarity.score
              })
              cacheTable.push(message.id);
  
              trackPolarity(polarityTracker, score);
  
            }
            if(trans.length===0)
            {
              setLoading(false);
              setEnd(true)
              document.querySelector("#table-parent").innerHTML = "No Transcript Recorded";
            }
            else
            {
              setTranscripts(trans)
              setHappy(polarityTracker[1]);
              setNeutral(polarityTracker[0]);
              setSad(polarityTracker[2]);
              // //document.querySelector("#table-parent").innerHTML = rows;
    
              // document.querySelector("#total-neutral").innerHTML = polarityTracker[0];
              // document.querySelector("#total-happy").innerHTML = polarityTracker[1];
              // document.querySelector("#total-sad").innerHTML = polarityTracker[2];
  
            }
            
          }
        }
        else
        {
          setLoading(false);
          setEnd(true);
        }
      }
      
      /**
      Accepts an array of 3 value. 1st index is neutral, 2nd is happy, 3rd is sad
      **/
      const trackPolarity = (polarityTracker, polarityScore)  => {
        if (polarityScore <= happyMin && polarityScore >= sadMin) {
          polarityTracker[0] += 1
        } else if (polarityScore > happyMin) {
          polarityTracker[1] += 1
        } else if (polarityScore < sadMin) {
          polarityTracker[2] += 1
        }
        return polarityTracker;
      }
      
      const setEndCallStatus = (polarityTracker) => {
        const index = polarityTracker.indexOf(Math.max(...polarityTracker));
        let endCallStatusDiv = document.querySelector("#end-call-status");

        if (endCallStatusDiv) {
          endCallStatusDiv.style.display = 'block';
          //console.log(emojiMap[index])
          endCallStatusDiv.querySelector("#call-status").innerHTML = emojiMap[index];
        }
      }
      

      
      var openSocket = async function() {
        setStart(true)
        setEnd(false);
  
        const symblEndpoint = `wss://api.symbl.ai/v1/realtime/insights/${process.env.REACT_APP_MEETING_ID}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`;
        setWs(new WebSocket(symblEndpoint));

      }

      var closeSocket = () => {
        //console.log(ws)
        setLoading(true)
        if (ws) {
          ws.send(JSON.stringify({
            "type": "stop_request"
          }));

          setTimeout(()=>{
            //console.log("In timeout")
            setEndCallStatus(polarityTracker);
            fetchMessages(transcripts);
            calculatePolarity(transcripts);
            setWs(null)
            
          },10000)
      

        } else {
          alert('Connection not open!');
          setStart(false)
          setEnd(true);
          setLoading(false)
        }
      };
  if(start && loading)
  return (<Loader message={'Processing Report....Wait for some time'}/>)
  else
  return (
    <div>
    <div className="relative min-h-screen md:flex">
      <div className="flex-1 p-5">
        <div className="flex flex-col">
          <div className="space-x-7 justify-center items-center flex flex-wrap mt-10 text-xl">
            <button
              onClick={openSocket}
              className="p-2 bg-primary text-center font-semibold text-gray-700 rounded-full px-7"
            >
              Start
            </button>
            <button
              onClick={()=>{
                toast.info('Analysing Your Voice...', {
                  position: "top-right",
                  autoClose: 14000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  });
                setTimeout(()=>{
                  closeSocket();
                },14000)
              }}
              className="p-2 bg-primary text-center font-semibold text-gray-700 rounded-full px-7"
            >
              End
            </button>
          </div>
          <div className="space-y-7 flex flex-col justify-evenly items-center mt-10">
            <div
              className="section bg-primary md:w-1/2 rounded-md text-center"
              id="table-parent"
            >
              <div className="px-6 py-8 h-full">
                
    
                <div
                  className="text-gray-700 font-md mt-10"
                  id="start-instructions"
                >
                  Press{" "}
                  <div
                    className="font-semibold text-tertiary text-lg hover:text-gray-700 hover:underline"
                    style={{ cursor: "pointer" }}
                  >
                    Start Call Button
                  </div>{" "}
                  to start tacking polarity
                </div>
                <div className=" bg-white pb-5">
                  <div className="flex items-center justify-between mt-5">
                    <div className="text-gray-700 bg-tertiary font-xl py-5 px-5">Message</div>
                    <div className="text-gray-700 bg-tertiary font-xl py-5 px-5">Polarity</div>
                  </div>
                  {
                    transcripts.map(item => (
                      <div className="grid grid-cols-6 px-5">
                        <div className="mt-5 text-gray-700 font-md col-span-4 text-left">{item.message}</div>
                        <div className="mt-5 text-gray-700 font-md col-span-2 text-right text-2xl">{item.polarityScore}</div>
                      </div>
                    ))
                  }
                </div>
                
              </div>
            </div>
    
            <div
              className="section bg-primary md:w-1/2 text-center rounded-md"
              id="sentiment-totals"
            >
              <div className="px-6 py-8 h-80">
                <p className="text-3xl font-bold text-gray-700 mb-5">
                  Know Your Mood
                </p>
    
                <p className="mt-10 text-lg font-semibold text-tertiary">
                  We keep track of the call sentiment here.
                </p>
                <div className="flex flex-col mt-5">
                  <div className="flex justify-evenly">
                    <div className="text-gray-700 font-bold">Happy</div>
                    <div className="text-gray-700 font-bold">Sad</div>
                    <div className="text-gray-700 font-bold">Neutral</div>
                  </div>
                  <div className="flex justify-evenly mt-5">
                    <div className="text-gray-700 font-semibold">
                      <span id="total-happy" >{happy}</span> 😃
                    </div>
                    <div className="text-gray-700 font-semibold">
                      <span id="total-sad">{sad}</span> 😞
                    </div>
                    <div className="text-gray-700 font-semibold">
                      <span id="total-neutral">{neutral}</span> 😐
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section space-x-7 mx-auto flex justify-evenly items-center mt-10 bg-primary shadow-md md:w-1/2"
            id="end-call-status"
          >
            <div className="px-6 py-8 h-40">
              <p className="text-2xl font-bold text-tertiary mb-5">
                End Call Status
              </p>
              <p className="text-center">
                <span id="call-status" className="text-5xl text-gray-700">{
                  (start && !loading && end && transcripts.length>0 )?
                  trackEmoji():
                  null
                }</span>
              </p>
            </div>
            
           
          </div>
          <div className="text-center mt-5 ">
          {
            start?
            loading?
              <div className="">
                Processing Report... Wait for some seconds
              </div>
              :
            
            
              (end && transcripts.length>0 )?
              <>
              <PDFDownloadLink
                  document={<Report data={data} />}
                  fileName={`${profilePatient.name}.pdf`}
                  style={{
                    textDecoration: "none",
                    padding: "10px",
                    color: "#4a4a4a",
                    backgroundColor: "#f2f2f2",
                    border: "1px solid #4a4a4a"
                  }}
                >
                  Download Report
              </PDFDownloadLink>
              <div className="mt-10">
                <div className="text-xl text-center text-light bg-gray-500 py-5 px-5 rounded-md">
                  Please upload the Report Pdf,so that the therapist can review it and suggest Proper ailment  
                </div> 
                <div className="flex flex-row justify-items-center items-center">

                </div>
                <input className="inline-flex text-tertiary font-semibold bg-primary border-0 py-2 px-6 focus:outline-none hover:opacity-80 rounded-full text-lg mt-5" type='file' name='file' placeholder={'Upload Report'} onClick={onChangeHandler}/>
                  
                <button onClick={handleReportSubmit} className="inline-flex text-tertiary font-semibold bg-primary border-0 py-2 px-6 focus:outline-none hover:opacity-80 rounded-full text-lg mt-5">
                  Submit
                </button>
              </div>
              </>
              :
              end?
              <div>No Transcripts Recorded</div>:
              <div></div>
            :
            <div></div>
          }
            </div>
        </div>
      </div>
    </div>
    <div>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </div>
    </div>
  );
}

export default Talk;






