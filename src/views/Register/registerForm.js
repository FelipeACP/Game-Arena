import asset from "../../assets";

const registerForm = [
  {
    title: "Account Information (required)",
    headerImg: asset.headerIcon,
    fields: [
      {
        name: "Username",
        type: "text",
        required: true,
        label: "Username",
        tip: "Your username cannot be changed after registration."
      },
      {
        name: "Password",
        type: "password",
        required: true,
        label: "Password",
        tip: "Fill in your desired password."
      },
      {
        name: "Confirm Password",
        type: "password",
        required: true,
        label: "Confirm Password",
        tip:
          "Please fill in your password again to make sure you didn't type any mistakes."
      },
      {
        name: "Email",
        type: "email",
        required: true,
        label: "Email",
        tip: "Fill in a valid e-mail address. Email verification is required."
      }
    ]
  }
];

export default registerForm;
