import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const Report = (props) => {

    const styles = StyleSheet.create({
        page: {
          backgroundColor: '#E4E4E4'
        },
        header:{
          fontSize: 20,
          marginTop : 10,
          marginLeft: 'auto',
          marginRight :'auto'
        },
        details:{
          fontSize:10,
          marginLeft:60,
          marginRight:60,
          marginTop:10,
          marginBottom:20,
          display:'flex',
          flexDirection:'row',
          alignItems :'center',
          justifyContent:'space-between'
        },
        table:{
        
        },
        tableRow:{
          fontSize:10,
          display:'flex',
          flexDirection:'row',
          alignItems: 'center',
          justifyContent:'space-between',
          marginHorizontal:40,
          marginVertical:5
        },
        score:{
          fontSize:20
        },
        tableHeader:{
          fontSize:20
        }
      });
    const {transcripts , patientDetails}= props.data;

    return (
        <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text>
              Sentiment Analysis Report
            </Text>
          </View>
          <View style={styles.details}>
              <Text>
                 Name : {patientDetails.name}
              </Text>
              <Text style={styles.detailsField}>
                Age : {patientDetails.age}
              </Text>
              <Text>
                City : {patientDetails.city}
              </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>
              Transcript
            </Text>
            <Text style={styles.tableHeader}>
              Polarity Score
            </Text>
          </View>
          <View>
          {
              transcripts.map((item,key)=>(
                <View key={key} style={styles.tableRow}>
            
                  <Text>
                    {item.message}
                  </Text>
                  <Text style={styles.score}>
                    {item.polarityScore}
                  </Text>
                </View>
              ))
          }
          </View>
        </Page>
      </Document>
    )
}

export default Report