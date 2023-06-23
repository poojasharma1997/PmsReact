// import React, { useState } from "react";
// import DateView from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Field, ErrorMessage } from "formik";
// import TextError from "./TextError";
// import styles from "./DatePicker.module.css";

// function DatePicker(props) {
//   const { label, name, ...rest } = props;
//   return (
//     <div>
//       <label htmlFor={name}>{label}</label>
//       <Field name={name}>
//         {({ form, field }) => {
//           const { setFieldValue } = form;
//           const { value } = field;
//           return (
//             <DateView
//               id={name}
//               dateFormat="MM/yy"
//               onKeyDown={(e) => {
//                 e.preventDefault();
//               }}
//               placeholderText="MM/YY"
//               showMonthYearPicker
//               //   style={{ borderRadius: "8px !important " }}
//               {...field}
//               {...rest}
//               className={styles.date}
//               selected={value}
//               onChange={(val) => {
//                 setFieldValue(name, val);
//               }}
//             />
//           );
//         }}
//       </Field>
//       <ErrorMessage name={name} component={TextError} />
//     </div>
//   );
// }

// export default DatePicker;
