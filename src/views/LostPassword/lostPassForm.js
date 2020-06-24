import asset from "../../assets";

const lostPassForm = {
  title: "Resetting your password",
  headerImg: asset.headerIcon,
  fields: [
    {
      name: "Email",
      type: "email",
      required: true,
      label: "Email",
      tip: "Fill in your account's e-mail address."
    }
  ]
};

export default lostPassForm;
