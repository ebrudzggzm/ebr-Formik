import * as yup from "yup";
// metin içerisnde  en az 5 karakter
// 1 büyük harf
// 1 küçük harf
// 1 sayı
// 1 özel karakter
// olma durumunu kontrol eder
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email geçerli bir formatta değil!")
    .required("Email alanı zorunludur"),
  age: yup
    .number()
    .integer("Lütfen Tam Sayı Değer Giriniz.")
    .min(18, "Yaş 18'den küçük olamaz.")
    .max(100, "Yaş 100'den büyük olamaz.")
    .required("Yaş alanı zorunludur"),
  password: yup
    .string()
    .min(5, "Şifreniz en az 5 karakter içermelidir.")
    .matches(regex, "Şifreniz yeterince güçlü değil")
    .required("Şifre alanı zorunludur."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Doğrulama şifreniz eşleşmiyor.")
    .required("Lütfen şifrenizi doğrulayın."),
    terms: yup
    .boolean()
    .oneOf([true], "Şartları kabul etmelisiniz.")
  });
