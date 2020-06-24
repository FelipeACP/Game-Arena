import React, { Fragment } from "react";

export const Form = ({ forms = [], onSubmit = () => {} }) => {
  const handleSubmit = ev => {
    ev.preventDefault();
    onSubmit(ev.target.value);
  };
  return (
    <form class="formdata" onSubmit={handleSubmit}>
      {forms.map(({ title, fields, headerImg }) => (
        <Painel title={title} fields={fields} headerImg={headerImg} />
      ))}
      <div class="centerp">
        <input type="submit" class="button" name="send" value="Send" />
      </div>
    </form>
  );
};

const Painel = ({ title, fields, headerImg }) => (
  <table class="max">
    <tbody>
      <tr>
        <td class="title" colspan="2">
          <img alt="" class="pre" src={headerImg} />
          {title}
        </td>
      </tr>
      {fields.map(field => (
        <Row field={field} />
      ))}
      <tr>
        <td class="dots" colspan="2" />
      </tr>
    </tbody>
  </table>
);

const Row = ({ field }) => (
  <Fragment>
    <tr class="color2">
      {field.tip && (
        <td class="info" colspan="2">
          {field.tip}
        </td>
      )}
    </tr>
    <tr class="color1">
      <td width="25%">
        <label for={field.type}>{field.label}</label>
      </td>
      <td width="75%">
        <input
          type={field.type}
          name={field.name}
          maxlength={field.maxlength}
        />
      </td>
    </tr>
  </Fragment>
);
