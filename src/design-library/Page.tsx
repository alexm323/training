import { PropsWithChildren } from "react";

interface PageProps {
  title: string;
}

export const Page: React.FC<PropsWithChildren<PageProps>> = ({
  title,
  children,
}) => {
  return (
    <div className="component-container" style={{ flexDirection: "column" }}>
      <p>{title}</p>
      {children}
    </div>
  );
};
