

const InputField = ({ formik,data }) => {
  const {label,type,name} = data;
  const bsClass = name === 'terms' ? 'form-check-input me-1' : 'form-control';
  const wrapperClass = name === 'terms' ? 'd-flex  flex-row-reverse justify-content-start ' : '';
  
  const conditions = name === 'terms' ? '' : '';
  return (
    <div className={wrapperClass}>
      <label >{label}</label>
      <input
        onBlur={formik.handleBlur}
        type={type}
        onChange={formik.handleChange}
        name={name}
        className={`${bsClass} ${
          formik.errors[name] && formik.touched[name] && "is-invalid"
        }`}
      />
      <div className={`feedback  ${conditions}`}>{formik.errors[name]} &nbsp;</div>
    </div>
  );
};

export default InputField;
