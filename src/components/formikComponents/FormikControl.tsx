import Checkbox from "./components/Checkbox";
import DatePicker from "./components/DatePicker";
import Input from "./components/Input";
import RadioButton from "./components/RadioButton";
import Select from "./components/Select";
import TextArea from "./components/TextArea";

export default function FormikControl(props: any) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}
