export type AboutProps = {
  textContent: AboutTextContent;
};

type AboutTextContent = {
  title: string;
  paragraphs: string[];
  techList: string[];
};
