import React, { FC } from "react";
import cl from "./MyModal.module.css";

export interface MyModalProps {
  children?: React.ReactNode;
  visible: boolean;
  setVisible(visible: boolean): void;
}

const MyModal: FC<MyModalProps> = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.myModal];
  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
export default MyModal;
