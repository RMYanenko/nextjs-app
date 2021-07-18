import { GetStaticProps } from "next";
import React, { useState } from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";

function Home({menu} : HomeProps): JSX.Element {

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
        Lorem, ipsum dolor sit amet
      </Paragraph>
      <Tag size="s" color="red">
        !!!
      </Tag>
      <Tag size='m'>
        !!!
      </Tag>
      <ul>
        {
          menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))
        }
      </ul>
    
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return{
     props: {
      menu,
      firstCategory
    }
  };   
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
