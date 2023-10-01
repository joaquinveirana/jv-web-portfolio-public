export type ContactProps = {
  textContent: ContactTextContent;
};

type ContactTextContent = {
  title: string;
  mainParagraph: string;
  email: string;
  footer1: string;
  footer2: string;
  buttonText: string;
  footerRepoLink: string;
  footerReferenceLink: string;
};
