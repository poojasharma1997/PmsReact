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
function AddExpenses() {
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
              <div className="mainHeading px-3">Add Expense</div>
            </div>
            <div className="col-12">
              <div className="sectionContent shadow">
                <div className="row">
                  <div className="col-12">
                    <div className="sectionContentHeader py-3 px-4 mb-4 rounded-3">
                      <div className="row d-flex align-items-center">
                        <div className="col">
                          <div className="sectionHeaderHeaing">Add Expense</div>
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
                                  <FormControl
                                    sx={{ m: 1, minWidth: 120 }}
                                    size="small"
                                  >
                                    <InputLabel id="demo-select-small">
                                      Select Payment Type
                                    </InputLabel>
                                    <Select
                                      labelId="demo-select-small"
                                      id="demo-select-small"
                                      // value={age}
                                      label="Age"
                                      // onChange={handleChange}
                                    >
                                      <MenuItem value="">
                                        <em>Bill Payments</em>
                                      </MenuItem>
                                      <MenuItem value={10}>
                                        Salary/Wage Payment
                                      </MenuItem>
                                      <MenuItem value={20}>
                                        Miscellaneous Payment
                                      </MenuItem>
                                      <MenuItem value={30}>
                                        Tax/Compilance Payment
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
                                        label="Party Name"
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
                                        label="Hotel Name"
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
                                          label={" Bill Date"}
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
                                        label="Amount"
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
                                      Select Category
                                    </InputLabel>
                                    <Select
                                      labelId="demo-select-small"
                                      id="demo-select-small"
                                      // value={age}
                                      label="Age"
                                      // onChange={handleChange}
                                    >
                                      <MenuItem value="">
                                        <em>Utility Bills</em>
                                      </MenuItem>
                                      <MenuItem value={10}>
                                      Payment to Vendor
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
                                      Select SubCategory
                                    </InputLabel>
                                    <Select
                                      labelId="demo-select-small"
                                      id="demo-select-small"
                                      // value={age}
                                      label="Age"
                                      // onChange={handleChange}
                                    >
                                      <MenuItem value="">
                                        <em>Electricity Bill</em>
                                      </MenuItem>
                                      <MenuItem value={10}>
                                     Furniture Bill
                                      </MenuItem>
                                      <MenuItem value={10}>
                                     Broker Bill
                                      </MenuItem>
                                      <MenuItem value={10}>
                                    Tea Bill
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
                                      Select Payment Term
                                    </InputLabel>
                                    <Select
                                      labelId="demo-select-small"
                                      id="demo-select-small"
                                      // value={age}
                                      label="Age"
                                      // onChange={handleChange}
                                    >
                                      <MenuItem value="">
                                        <em>Immediate</em>
                                      </MenuItem>
                                      <MenuItem value={10}>
                                  Paid
                                      </MenuItem>
                                      <MenuItem value={10}>
                                    Due
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
                                        label="Receipt No"
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
                                        label="Bill No"
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
                                        label="Description"
                                        id="outlined-size-small"
                                        size="small"
                                      />
                                    </div>
                                  </Box>
                                </div>
                                <div className="col-md-12">
                                                                        <Form.Group
                                                                            className=""
                                                                            controlId="formBasicEmail"
                                                                        >
                                                                            <Form.Label for="file" className="w-100">
                                                                                <div className="fileLabel">
                                                                                    <div className="text-center">
                                                                                        <div className="fileLableImg">
                                                                                            <img
                                                                                                src={".//assets/uploadFile.svg"}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </Form.Label>
                                                                            <Form.Control
                                                                                className="shadow-none d-none"
                                                                                type="file"
                                                                                id="file"
                                                                                placeholder=""
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group
                                                                            className=""
                                                                            controlId="formBasicEmail"
                                                                        >
                                                                            <Form.Label
                                                                                for="upload"
                                                                                className="w-100"
                                                                            >
                                                                                <div className="fileLabelUpload">
                                                                                    <div className="text-center">
                                                                                        <div className="uploadFiles d-flex align-items-center">
                                                                                            Click to upload file(s)
                                                                                            <img
                                                                                                src="../assets/uploadSmall.svg"
                                                                                                className="ms-2"
                                                                                                alt="img"
                                                                                            ></img>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </Form.Label>
                                                                            <Form.Control
                                                                                className="shadow-none d-none"
                                                                                type="file"
                                                                                id="upload"
                                                                                placeholder=""
                                                                            />
                                                                        </Form.Group>
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
export default AddExpenses;
