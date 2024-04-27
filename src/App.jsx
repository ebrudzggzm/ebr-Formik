import { useFormik } from "formik";
import { schema } from "./schema";
import InputField from "./components/InputField";
import { inputs } from "../src/constants";

const App = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
      terms: false,
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      alert("form başarıyla gönderildi");
    },
  });
console.log(formik,'formik')
  return (
    <div className="vh-100 vw-100 row bg-dark text-white">
      <div className="container col-md-6 mx-auto py-5">
        <div className="d-flex justify-content-center align-items-center gap-2">
        <img className="image" src="../public/coin.png" alt="" />
        <h2 className="">Coinmania</h2>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-3 mt-2"
        >
          {/* 1.yöntem */}
          {/* <div>
            <label className="form-label">Email</label>
            <input
              onBlur={formik.handleBlur}
              type="text"
              onChange={formik.handleChange}
              name="email"
              className={`form-control ${
                formik.errors.email && formik.touched.email && "is-invalid"
              }`}
            />
            <div className="feedback">{formik.errors.email} &nbsp;</div>
          </div> */}
          {/* 1.yöntem */}
{/* //----------------------2.Yöntem */}
          {/* <InputField
            formik={formik}
            data={{ label: "Email", name: "email", type: "text" }}
          />
          <InputField
            formik={formik}
            data={{ label: "Yaş", name: "age", type: "number" }}
          />
          <InputField
            formik={formik}
            data={{ label: "Şifre", name: "password", type: "password" }}
          />
          <InputField
            formik={formik}
            data={{
              label: "Şifre Onay",
              name: "confirmPassword",
              type: "password",
            }}
          /> */}
          {/* //----------------------2.Yöntem */}


          {inputs.map((input,index)=> 
            <InputField key={index} formik={formik} data={input}/>
          )}
          <button type="submit" className="btn btn-primary">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
