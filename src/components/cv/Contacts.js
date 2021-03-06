import { contacts } from "../../data/cv_data";
import { BlankLink } from '../commons/BlankLink';

export const Contacts = ({ importantOnly = true }) => {

  const links = contacts
    .filter(({ important }) => !(importantOnly && important === false))
    .map(({ name, link }, i) => <BlankLink key={i} name={name} href={link}/>)
    .map((component, index) => <li key={index}>{component}</li>);

  return (
    <>
      <h4>Contacts</h4>
      <ul style={{ marginLeft: "-1em" }}>
        {links}
      </ul>
    </>
  );
};
