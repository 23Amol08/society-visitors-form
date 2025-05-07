import React, { useState, useEffect } from "react";
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

function Form() {
  const [formData, setData] = useState({
    fullName: "",
    mobileNum: "",
    flatNum: "",
    puropose: "",
    otherPurpose: "",
  });

  const [errors, setError] = useState({
    fullName: false,
    mobileNum: false,
    flatNum: false,
    puropose: false,
    otherPurpose: false,
  });

  const [visitData, setVisit] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setData(prevValue => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSubmit() {
    const newErrors = {
      fullName: formData.fullName.trim() === "",
      mobileNum: formData.mobileNum.trim() === "" || formData.mobileNum.length !== 10 || isNaN(formData.mobileNum),
      flatNum: formData.flatNum.trim() === "",
      puropose: formData.puropose.trim() === "",
      otherPurpose: formData.puropose === "Other" && formData.otherPurpose.trim() === "",
    };

    setError(newErrors);

    if (Object.values(newErrors).some(error => error)) return;

    const finalPurpose = formData.puropose === "Other" ? formData.otherPurpose : formData.puropose;

    const newEntry = {
      fullName: formData.fullName,
      mobileNum: formData.mobileNum,
      flatNum: formData.flatNum,
      puropose: finalPurpose,
    };

    const updatedLogs = [...visitData, newEntry];

    // Save to localStorage immediately after updating state
    localStorage.setItem("visitorLogs", JSON.stringify(updatedLogs));

    setVisit(updatedLogs); // Update state with the new logs

    setData({
      fullName: "",
      mobileNum: "",
      flatNum: "",
      puropose: "",
      otherPurpose: "",
    });
  }

  useEffect(() => {
    const storedData = localStorage.getItem("visitorLogs");
    if (storedData) {
      setVisit(JSON.parse(storedData)); // Set state with data from localStorage on component mount
    }
  }, []);

  return (
    <div className="form">
      <Box className="form-box" component="section" sx={{ p: 4, border: '2px dashed grey', margin: '50px', width: "400px", backgroundColor: "white" }}>
        <TextField
          fullWidth
          label="Full Name"
          variant="outlined"
          sx={{ margin: 1, backgroundColor: "white" }}
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
          helperText={errors.fullName && "Full Name is required"}
        />
        <br />
        <TextField
          fullWidth
          label="Mobile Number"
          variant="outlined"
          sx={{ margin: 1, backgroundColor: "white" }}
          name="mobileNum"
          value={formData.mobileNum}
          onChange={handleChange}
          error={errors.mobileNum}
          helperText={errors.mobileNum && "Mobile Number is required"}
        />
        <br />
        <TextField
          fullWidth
          label="Flat Number"
          variant="outlined"
          sx={{ margin: 1, backgroundColor: "white" }}
          name="flatNum"
          value={formData.flatNum}
          onChange={handleChange}
          error={errors.flatNum}
          helperText={errors.flatNum && "Flat number is required"}
        />
        <br />
        <Box sx={{ margin: 1, backgroundColor: "white" }}>
          <FormControl fullWidth>
            <InputLabel>Purpose of Visit</InputLabel>
            <Select
              id="demo-simple-select"
              name="puropose"
              value={formData.puropose}
              label="Purpose of Visit"
              onChange={handleChange}
            >
              <MenuItem value="">Select Purpose</MenuItem>
              <MenuItem value="Delivery">Delivery</MenuItem>
              <MenuItem value="Guest">Guest</MenuItem>
              <MenuItem value="Maintenance">Maintenance</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
            {formData.puropose === "Other" && (
              <TextField
                fullWidth
                label="Please specify"
                variant="outlined"
                sx={{ margin: 1, backgroundColor: "white" }}
                name="otherPurpose"
                value={formData.otherPurpose}
                onChange={handleChange}
                error={errors.otherPurpose}
                helperText={errors.otherPurpose && "Please specify the purpose"}
              />
            )}
            {errors.puropose && (
              <FormHelperText>Purpose is required</FormHelperText>
            )}
          </FormControl>
        </Box>
      </Box>
      <Box>
        <Button variant="contained" onClick={handleSubmit} sx={{ marginRight: 2 }}>Submit</Button>
        <Button variant="outlined" component={RouterLink} to="/visitor-logs" sx={{ marginLeft: 2, border: "solid", fontWeight: 600 }}>View Logs</Button>
      </Box>
    </div>
  );
}

export default Form;
