import Header from "../../../../CommonComponents/Header";
import Form from "react-bootstrap/Form";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";
import Select, { SelectChangeEvent } from "@mui/material/Select";
function AddMiscellanousIncome() {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#FCB532",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgb(255, 161, 39)",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(0,0,0,0.32)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(0,0,0,0.32)",
      },
      "&.Mui-focused fieldset": {
        borderBottomColor: "#FCB532 !important",
        borderColor: "rgba(0,0,0,0.32)",
        borderWidth: "1px",
      },
    },
  });
  return (
    <>
      <div className="mainContent" id="mainContent">
        <Header />
        <div className="section">
          <div className="row justify-content-center">
            <div className="col-12 pt-3">
              <div className="mainHeading px-3">Add MiscellaneousIncome</div>
            </div>
            <div className="col-12">
              <div className="sectionContent shadow">
                <div className="row">
                  <div className="col-12">
                    <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                      <div className="row d-flex align-items-center">
                        <div className="col">
                          <div className="sectionHeaderHeaing">Add Miscellaneous Income</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="addForm">
                      <form action="#">
                        <div className="row gy-3">
                          <div className="col-md-6">
                            <div className=" shadow p-4 rounded-2">
                              <div className="row gy-3">
                                <div className="col-md-12">
                                  <FormControl
                                    sx={{ m: 1, minWidth: 120 }}
                                    size="small"
                                  >
                                    <LocalizationProvider
                                      dateAdapter={AdapterDayjs}
                                    >
                                      <DemoContainer
                                        components={["MobileDatePicker"]}
                                      >
                                        <MobileDatePicker
                                          label={"Date"}
                                          views={["year", "month", "day"]}
                                        />
                                      </DemoContainer>
                                    </LocalizationProvider>
                                  </FormControl>
                                </div>
                                <div className="col-md-12">
                                  <Box
                                    component="form"
                                    sx={{
                                      "& .MuiTextField-root": {
                                        m: 1,
                                        width: "25ch",
                                      },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                  >
                                    <div>
                                      <CssTextField
                                        label="Transaction Id"
                                        id="outlined-size-small"
                                        size="small"
                                      />
                                    </div>
                                  </Box>
                                </div>
                                <div className="col-md-12">
                                  <Box
                                    component="form"
                                    sx={{
                                      "& .MuiTextField-root": {
                                        m: 1,
                                        width: "25ch",
                                      },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                  >
                                    <div>
                                      <CssTextField
                                        label="Received By"
                                        id="outlined-size-small"
                                        size="small"
                                      />
                                    </div>
                                  </Box>
                                </div>
                                <div className="col-md-12">
                                  <Box
                                    component="form"
                                    sx={{
                                      "& .MuiTextField-root": {
                                        m: 1,
                                        width: "25ch",
                                      },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                  >
                                    <div>
                                      <CssTextField
                                        label="Received From"
                                        id="outlined-size-small"
                                        size="small"
                                      />
                                    </div>
                                  </Box>
                                </div>
                                <div className="col-md-12">
                                  <FormControl
                                    sx={{ m: 1, minWidth: 120 }}
                                    size="small"
                                  >
                                    <InputLabel id="demo-select-small">
                                      Select Profit Center
                                    </InputLabel>
                                    <Select
                                      labelId="demo-select-small"
                                      id="demo-select-small"
                                      // value={age}
                                      label="Age"
                                      // onChange={handleChange}
                                    >
                                      <MenuItem value="">
                                        <em>Kolkata</em>
                                      </MenuItem>
                                      <MenuItem value={10}>
                                       Howarh
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </div>
                                <div className="col-md-12">
                                  <Box
                                    component="form"
                                    sx={{
                                      "& .MuiTextField-root": {
                                        m: 1,
                                        width: "25ch",
                                      },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                  >
                                    <div>
                                      <CssTextField
                                        label="Income For"
                                        id="outlined-size-small"
                                        size="small"
                                      />
                                    </div>
                                  </Box>
                                </div>
                              
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div>
                              <div className=" shadow p-4 rounded-2">
                                <div className="row gy-3">
                                <div className="col-md-12">
                                  <FormControl
                                    sx={{ m: 1, minWidth: 120 }}
                                    size="small"
                                  >
                                    <InputLabel id="demo-select-small">
                                      Select Payment Mode
                                    </InputLabel>
                                    <Select
                                      labelId="demo-select-small"
                                      id="demo-select-small"
                                      // value={age}
                                      label="Age"
                                      // onChange={handleChange}
                                    >
                                      <MenuItem value="">
                                        <em>Cash</em>
                                      </MenuItem>
                                      <MenuItem value={10}>
                                     Cr/Dr Card
                                      </MenuItem>
                                      <MenuItem value={10}>
                                     Fund Transfer   </MenuItem>
                                      <MenuItem value={10}>
                                     Cheque
                                      </MenuItem>
                                      <MenuItem value={10}>
                                     Draft
                                      </MenuItem>
                                      <MenuItem value={10}>
                                    E Wallet
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </div>
                                <div className="col-md-12">
                                  <FormControl
                                    sx={{ m: 1, minWidth: 120 }}
                                    size="small"
                                  >
                                    <InputLabel id="demo-select-small">
                                     Tax(%)
                                    </InputLabel>
                                    <Select
                                      labelId="demo-select-small"
                                      id="demo-select-small"
                                      // value={age}
                                      label="Age"
                                      // onChange={handleChange}
                                    >
                                      <MenuItem value="">
                                        <em>18.9(%)</em>
                                      </MenuItem>
                                      <MenuItem value={10}>
                                  10.9(%)
                                      </MenuItem>
                                     
                                    </Select>
                                  </FormControl>
                                </div>
                                <div className="col-md-12">
                                  <Box
                                    component="form"
                                    sx={{
                                      "& .MuiTextField-root": {
                                        m: 1,
                                        width: "25ch",
                                      },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                  >
                                    <div>
                                      <CssTextField
                                        label="Amount"
                                        id="outlined-size-small"
                                        size="small"
                                      />
                                    </div>
                                  </Box>
                                </div>
                                <div className="col-md-12">
                                  <Box
                                    component="form"
                                    sx={{
                                      "& .MuiTextField-root": {
                                        m: 1,
                                        width: "25ch",
                                      },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                  >
                                    <div>
                                      <CssTextField
                                        label="Remark"
                                        id="outlined-size-small"
                                        size="small"
                                      />
                                    </div>
                                  </Box>
                                </div>
                                <div className="col-md-12">
                                  <Box
                                    component="form"
                                    sx={{
                                      "& .MuiTextField-root": {
                                        m: 1,
                                        width: "25ch",
                                      },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                  >
                                    <div>
                                      <CssTextField
                                        label="Total"
                                        id="outlined-size-small"
                                        size="small"
                                      />
                                    </div>
                                  </Box>
                                </div>
                                <div className="col-md-12">
                                  <FormControl
                                    sx={{ m: 1, minWidth: 120 }}
                                    size="small"
                                  >
                                    <InputLabel id="demo-select-small">
                                     Payment Received
                                    </InputLabel>
                                    <Select
                                      labelId="demo-select-small"
                                      id="demo-select-small"
                                      // value={age}
                                      label="Age"
                                      // onChange={handleChange}
                                    >
                                      <MenuItem value="">
                                        <em>Received</em>
                                      </MenuItem>
                                      <MenuItem value={10}>
                                Not Received
                                      </MenuItem>
                                      <MenuItem value={10}>
                                   Partial Received
                                      </MenuItem>
                                      
                                    </Select>
                                  </FormControl>
                                </div>
                            
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                          
                          <div class="text-center pt-3 col-md-12">
                                <button
                                  type="submit"
                                  class=" btn "
                                  style={{
                                   color:'white',
                                    padding:'9px 40px !important', 
                                      borderRadius:'50PX',
                                  width:'180px',
                                  marginRight: '25px',
                                backgroundColor:'rgb(255, 145, 0)'}}
                                >
                                  Submit
                                </button>
                                <button
                                  type="submit"
                                  class=" btn"
                                  style={{ 
                                  color:'white',
                                    padding:'9px 40px !important',
                                      borderRadius:'50PX',
                                          width:'180px',
                                backgroundColor: 'rgb(234, 67, 53)' }}
                                >
                                  Reset
                                </button>
                           
                          
                          </div>
                        </div>
                           
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddMiscellanousIncome;
