import React from "react";
import { Button, Htag, Paragraph, Tag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">Клик</Button>
      <Button appearance="ghost" arrow="right">Клик</Button>
      <Paragraph size="s">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus atque nam iusto perspiciatis cum consequuntur perferendis, autem quibusdam, rem, nesciunt voluptates rerum maxime aliquam. Numquam dignissimos quod similique minima labore?</Paragraph>
      <Paragraph size="m">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus atque nam iusto perspiciatis cum consequuntur perferendis, autem quibusdam, rem, nesciunt voluptates rerum maxime aliquam. Numquam dignissimos quod similique minima labore?</Paragraph>
      <Paragraph size="xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus atque nam iusto perspiciatis cum consequuntur perferendis, autem quibusdam, rem, nesciunt voluptates rerum maxime aliquam. Numquam dignissimos quod similique minima labore?</Paragraph>
      <Tag size='s' color="red">!!!</Tag>
    </>
  );
}
