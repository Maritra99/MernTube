import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";

export const DividerComponent = (props) => {
  return (
    <Divider
      type={props.type ? props.type : "solid"}
      layout={props.layout ? props.layout : "horizontal"}
      {...props}
    />
  );
};

export const InputTextComponent = (props) => {
  return (
    <InputText
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      {...props}
    />
  );
};

export const AvatarComponent = (props) => {
  return (
    <Avatar
      image={props.src}
      size={props.size ? props.size : "xlarge"}
      shape={props.shape && props.shape}
      {...props}
    />
  );
};
