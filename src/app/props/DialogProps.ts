export type DialogProps = {
  callback: Function;
  content: DialogContent;
};

type DialogContent = {
  title: string;
  paragraph: string;
};
