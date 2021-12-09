import {
  createRef,
  DetailedHTMLProps,
  HTMLAttributes,
  InputHTMLAttributes,
  RefObject,
} from 'react';

import classes from './form.module.scss';
import Button from 'components/Button';

interface Field
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  name: string;
}

interface IForm extends HTMLAttributes<HTMLFormElement> {
  fields: Field[];
  name: string;
}

type EmailField = {
  email: RefObject<HTMLInputElement>;
  name: RefObject<HTMLInputElement>;
  message: RefObject<HTMLInputElement>;
};

async function sendEmail(fields: EmailField) {
  console.log(`Sending email with fields`);
  console.log(fields);

  fetch(
    `api/sendEmail?email=${fields.email}&name=${fields.name}&message=${fields.message}`,
    {}
  )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default function Form({ fields, name, ...rest }: IForm) {
  const fieldSet = new Set<{
    field: string;
    ref: RefObject<HTMLInputElement | HTMLTextAreaElement>;
  }>();
  return (
    <form className={classes.form} name={name} {...rest}>
      {fields.map((field, index) => {
        let { label } = field;
        let id = `${name}-form_${field.name}`.toLowerCase();
        let ref = createRef<any>();
        let inputProps = {
          className: classes.input,
          id: id,
          name: field.name,
          ref: ref,
        };
        fieldSet.add({ field: field.name, ref: ref });
        return (
          <div className={classes.inputGroup} key={index}>
            <label htmlFor={id}>{label}</label>
            {field.type === 'textarea' ? (
              <textarea {...inputProps}></textarea>
            ) : (
              <input {...inputProps} {...field} />
            )}
          </div>
        );
      })}
      <Button
        onClick={() => {
          let fieldsToSend = Object.assign(
            {},
            ...Array.from(fieldSet.values(), (item) => ({
              [item.field]: item.ref.current?.value,
            }))
          );
          sendEmail(fieldsToSend);
        }}
      >
        Verstuur
      </Button>
    </form>
  );
}
