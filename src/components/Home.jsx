import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Home() {
  const [visitorLogs, setVisitorLogs] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("visitorLogs");
    if (storedData) {
      setVisitorLogs(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="card-box">
      <h2>Visitor Logs</h2>
      {visitorLogs.length === 0 ? (
        <p>No visitors yet.</p>
      ) : (
         <Box  sx={{ margin: 4 }}>
            {visitorLogs.map((entry, index) => (
                    <Card sx={{ minWidth: 275 , margin : "5px"}}>
                    <CardContent>
                    <div><strong>Visitor number:</strong> {index + 1}</div>
                              <div><strong>Name:</strong> {entry.fullName}</div>
                              <div><strong>Mobile:</strong> {entry.mobileNum}</div>
                              <div><strong>Flat:</strong> {entry.flatNum}</div>
                              <div><strong>Purpose:</strong>{entry.puropose}</div>
                             
                    </CardContent>
                    
                  </Card>
            ))}
        </Box>
      )}
    </div>
  );
}

export default Home;


// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// export default function BasicCard() {
//   return (

//   );
// }


// <Box key={index} sx={{ border: '1px solid #ccc', padding: 2, marginBottom: 2 }}>
//                 <div><strong>Visitor number:</strong> {index + 1}</div>
//                 <div><strong>Name:</strong> {entry.fullName}</div>
//                 <div><strong>Mobile:</strong> {entry.mobileNum}</div>
//                 <div><strong>Flat:</strong> {entry.flatNum}</div>
//                 <div><strong>Purpose:</strong>{entry.puropose}</div>
               
//                 </Box>