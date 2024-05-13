import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";

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

export const OverlayComponent = (props) => {
  return <OverlayPanel ref={props.reference}>{props.content}</OverlayPanel>;
};

export const ButtonComponent = (props) => {
  return (
    <Button
      label={props.label}
      onClick={props.onClick}
      icon={props.icon}
      iconPos={props.iconPos ? props.iconPos : "right"}
      loading={props.loading}
      severity={props.severity && props.severity}
      {...props}
    />
  );
};
