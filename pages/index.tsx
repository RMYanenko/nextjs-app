import React, { useState } from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "../components";

export default function Home(): JSX.Element {

  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Rating rating={rating}  isEditable setRating={setRating} />
      <Button
        appearance="primary"
        arrow="right"
      >
        Клик
      </Button>
      <Button
        appearance="ghost"
        arrow="right"
      >
        Клик
      </Button>
      <Paragraph size="s">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus atque
        nam iusto perspiciatis cum consequuntur perferendis, autem quibusdam,
        rem, nesciunt voluptates rerum maxime aliquam. Numquam dignissimos quod
        similique minima labore?
      </Paragraph>
      <Tag size="s" color="red">
        !!!
      </Tag>
      <Tag size='m'>
        !!!
      </Tag>
    
    </>
  );
}
