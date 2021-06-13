import React from "react";
import { Htag } from "../components";
import Button from "../components/Button/Button";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">Клик</Button>
      <Button appearance="ghost" arrow="right">Клик</Button>
    </>
  );
}
