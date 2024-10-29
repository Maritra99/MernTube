import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Password } from "primereact/password";
import { useEffect, useState } from "react";

export const DividerComponent = (props) => {
  return (
    <Divider
      type={props.type ? props.type : "solid"}
      layout={props.layout ? props.layout : "horizontal"}
      className={props.className}
    />
  );
};

export const InputTextComponent = (props) => {
  return (
    <InputText
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className={props.className}
    />
  );
};

export const PasswordComponent = (props) => {
  return (
    <Password
      value={props.value}
      onChange={props.onChange}
      feedback={props.feedback || false}
      inputClassName={props.inputClassName}
      icon={props.icon}
      toggleMask={props.toggleMask}
      className={props.className}
    />
  );
};

export const AvatarComponent = (props) => {
  return (
    <Avatar
      image={props.src}
      size={props.size ? props.size : "xlarge"}
      shape={props.shape && props.shape}
      className={props.className}
    />
  );
};

export const OverlayComponent = (props) => {
  return (
    <OverlayPanel ref={props.reference} className={props.className}>
      {props.content}
    </OverlayPanel>
  );
};

export const ButtonComponent = (props) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 576);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 576);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Button
      label={!isSmallScreen && props.label}
      onClick={props.onClick}
      icon={props.icon}
      iconPos={props.iconPos ? props.iconPos : "right"}
      loading={props.loading}
      severity={props.severity && props.severity}
      text={props.text}
      className={props.className}
    />
  );
};

export const CardComponent = (props) => {
  return (
    <Card
      title={props.title}
      subTitle={props.subTitle}
      footer={props.footer}
      header={props.header}
      className={props.className}
      style={props.style}
      unstyled={props.unstyled}
    >
      {props.cardContent}
    </Card>
  );
};
