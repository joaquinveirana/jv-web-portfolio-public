export type AboutProps = {
  textContent: AboutTextContent;
};

type AboutTextContent = {
  title: string;
  photoAlt: string;
  photoSrc: string;
  paragraphs: string[];
  techList: string[];
};
