import { HtagProps } from "./Htag.props";
import s from './Htag.module.scss';

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return <h1 className={s.h1}>{children} </h1>;
    case "h2":
      return <h2 className={s.h2}>{children} </h2>;
    case "h3":
      return <h3 className={s.h3}>{children}</h3>;
    default:
      return <></>;
  }
  //   return (
  //     <>
  //       {tag == "h1" && <h1>{children} </h1>}
  //       {tag == "h2" && <h2>{children} </h2>}
  //       {tag == "h3" && <h3>{children} </h3>}
  //     </>
  //   );
};
